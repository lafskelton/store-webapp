package main

import (
	"context"
	"database/sql"
	"fmt"
	"log"
	"net"
	"time"

	"github.com/google/uuid"
	pb "github.com/thundrcld/protos/accountproto"
	"golang.org/x/crypto/bcrypt"
	"google.golang.org/grpc"
	"vitess.io/vitess/go/vt/vitessdriver"
)

type server struct {
	pb.AccountServiceServer
	db *sql.DB
}

const (
	port = ":42069"
)

// UserLogin handler
func (s *server) CreateUser(ctx context.Context, in *pb.CreateUserRequest) (*pb.CreateUserReply, error) {
	// //Retrieve SQL connection from pool
	dbCtx, cancel := context.WithTimeout(ctx, time.Second*3)
	defer cancel()
	conn, err := s.db.Conn(dbCtx)
	if err != nil {
		log.Println(err)
		return &pb.CreateUserReply{Valid: false, AccountID: "", Error: "internalError"}, nil
	}

	// //Begin transaction
	tx, err := conn.BeginTx(dbCtx, nil)
	if err != nil {
		log.Println(err)
		return &pb.CreateUserReply{Valid: false, AccountID: "", Error: "internalError"}, nil
	}

	//##// Query for existing email

	res := tx.QueryRow("SELECT verified FROM accountservices.accountDataLogin WHERE email_hash = md5(?) ", in.GetEmail())

	//	Scan
	var verified bool
	err = res.Scan(&verified)
	if err == nil {
		return &pb.CreateUserReply{Valid: false, AccountID: "", Error: "emailTaken"}, nil
	}

	//##// Query for existing username

	res = tx.QueryRow("SELECT verified FROM accountservices.accountDataLogin WHERE username = ? ", in.GetUsername())

	//	Scan
	err = res.Scan(&verified)
	if err == nil {
		return &pb.CreateUserReply{Valid: false, AccountID: "", Error: "usernameTaken"}, nil
	}

	//##// Insert
	accountID := uuid.New().String()

	pwdHash, err := bcrypt.GenerateFromPassword([]byte(in.GetPwd()), bcrypt.DefaultCost)
	if err != nil {
		log.Println(err)
		return &pb.CreateUserReply{Valid: false, AccountID: "", Error: "internalError"}, nil
	}

	//Primary
	_, err = tx.Exec(`INSERT INTO accountDataPrimary values 
		( unhex(replace(?,'-','')), cast(md5(?) as binary), ?, 
		?, ?, 'KELOWNA-CAN', CURRENT_TIMESTAMP());`,
		accountID, in.GetEmail(), accountID, in.GetUsername(), in.GetEmail())

	if err != nil {
		log.Println(err)
		return &pb.CreateUserReply{Valid: false, AccountID: "", Error: "internalError"}, nil
	}

	//Login
	_, err = tx.Exec(`INSERT INTO accountDataLogin values (  
		cast(md5(?) as binary),
		unhex(replace(?,'-','')),  
		 ?, 
		 ?, 
		 ?,
		 ?
		);`,
		in.GetEmail(), accountID, accountID, pwdHash, in.GetUsername(), false)

	if err != nil {
		log.Println(err)
		return &pb.CreateUserReply{Valid: false, AccountID: "", Error: "internalError"}, nil
	}

	//Login
	_, err = tx.Exec(`INSERT INTO accountDataSettings values (  
		?,
		unhex(replace(?,'-','')),    
		?
		);`, 0, accountID, `{"k1": "value", "k2": 10}`)

	if err != nil {
		log.Println(err)
		return &pb.CreateUserReply{Valid: false, AccountID: "", Error: "internalError"}, nil
	}

	// Commit
	err = tx.Commit()
	if err != nil {
		log.Println(err)
		return &pb.CreateUserReply{Valid: false, AccountID: "", Error: "internalError"}, nil
	}

	return &pb.CreateUserReply{Valid: true, AccountID: accountID, Error: ""}, nil
}

func main() {

	// Connect to vitess cluster
	db, err := vitessdriver.Open("vtgate.vitess:15999", "@master")
	if err != nil {
		log.Fatalln(err)
	}

	lis, err := net.Listen("tcp", port)
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}
	s := grpc.NewServer()
	pb.RegisterAccountServiceServer(s, &server{
		db: db,
	})
	fmt.Println("Starting")
	if err := s.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}

}
