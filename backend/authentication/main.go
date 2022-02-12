package main

import (
	"context"
	"database/sql"
	"flag"
	"fmt"
	"log"
	"net"
	"time"

	"github.com/thundrcld/tisc"

	"github.com/dgrijalva/jwt-go"
	"github.com/go-redis/redis/v8"
	"github.com/google/uuid"
	pb "github.com/thundrcld/protos/authproto"
	"github.com/thundrcld/protos/emailserviceproto"
	"golang.org/x/crypto/bcrypt"
	"google.golang.org/grpc"
	"vitess.io/vitess/go/vt/vitessdriver"
)

type server struct {
	pb.AuthServiceServer
	db  *sql.DB
	rdb *redis.Client
	tc  *tisc.TISClient
}

const (
	port = ":42069"
)

//MUST MATCH SESSION SERVICE
type SessionStartClaims struct {
	SessionKey string `json:"sessionKey"` //User provided key for client-side verification
	AccountID  string `json:"accountID"`
	jwt.StandardClaims
}

//Verify email handler

func (s *server) UserVerifyEmail(ctx context.Context, in *pb.VerifyEmailRequest) (*pb.VerifyEmailReply, error) {

	stat, err := s.rdb.Get(ctx, in.AccountID+"_vcode").Result()
	if err != nil {
		return &pb.VerifyEmailReply{
			Valid: false,
		}, nil
	}

	//Check stored key against cached key
	if stat != in.GetVcode() {
		return &pb.VerifyEmailReply{
			Valid: false,
		}, nil
	}

	//Update vitess
	conn, err := s.db.Conn(ctx)
	if err != nil {
		log.Println("conn:", err)
		return &pb.VerifyEmailReply{Valid: false, SessionToken: ""}, nil
	}

	//Begin transaction
	tx, err := conn.BeginTx(ctx, nil)
	if err != nil {
		log.Println("tx:", err)
		return &pb.VerifyEmailReply{Valid: false, SessionToken: ""}, nil
	}

	// Query and commit by email
	_, err = tx.Exec("UPDATE accountservices.accountDataLogin SET verified = true WHERE accountIdx = unhex(replace(?,'-',''))", in.GetAccountID())
	if err != nil {
		log.Println("update:", err)
		return &pb.VerifyEmailReply{Valid: false, SessionToken: ""}, nil
	}

	// Commit database transaction
	err = tx.Commit()
	if err != nil {
		log.Println("commit:", err)
		return &pb.VerifyEmailReply{Valid: false, SessionToken: ""}, nil
	}

	//Complete login flow

	//Create session, key, and sessionStartToken. A JWT signed by the provided signature.
	//Store in cache: accountID_signature and accountID_sessionKey.

	key := uuid.New().String() // Server generated key for server-side verification

	//Set signing key in cache
	//
	_, err = s.rdb.Set(ctx, in.GetAccountID()+"_serverkey", key, time.Hour).Result()
	if err != nil && err.Error() != "EOF" {
		fmt.Println("redis_set serverkey:", err)
		return &pb.VerifyEmailReply{Valid: false, SessionToken: ""}, nil
	}
	_, err = s.rdb.Set(ctx, in.GetAccountID()+"_clientkey", in.GetClientSignature(), time.Hour).Result()
	if err != nil && err.Error() != "EOF" {
		fmt.Println("redis_set clientkey:", err)
		return &pb.VerifyEmailReply{Valid: false, SessionToken: ""}, nil
	}

	// Create Claims
	claims := SessionStartClaims{
		in.GetClientSignature(), //User provided key for client-side verification
		in.GetAccountID(),
		jwt.StandardClaims{
			ExpiresAt: time.Now().Add(time.Hour).Unix(),
			Issuer:    "thundrcld.com",
		},
	}

	//
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	ss, err := token.SignedString([]byte(key))
	if err != nil {
		return &pb.VerifyEmailReply{Valid: false, SessionToken: ""}, nil
	}

	//Success
	return &pb.VerifyEmailReply{Valid: true, SessionToken: ss}, nil

}

// UserLogin handler
func (s *server) UserLogin(ctx context.Context, in *pb.UserLoginRequest) (*pb.UserLoginReply, error) {
	accountId, pwd := "", ""
	verified := false

	//Retrieve SQL connection from pool
	dbCtx, cancel := context.WithTimeout(ctx, time.Second*3)
	defer cancel()
	conn, err := s.db.Conn(dbCtx)
	if err != nil {
		log.Println(err)
		return &pb.UserLoginReply{Valid: false, AccountID: "", SessionToken: "", Error: "internalError"}, nil
	}

	//Begin transaction
	tx, err := conn.BeginTx(dbCtx, nil)
	if err != nil {
		log.Println(err)
		return &pb.UserLoginReply{Valid: false, AccountID: "", SessionToken: "", Error: "internalError"}, nil
	}

	// Query and commit by email
	res := tx.QueryRow("SELECT accountID, pwd, verified FROM accountservices.accountDataLogin WHERE email_hash = md5(?) ", in.GetEmail())

	//	Scan
	err = res.Scan(&accountId, &pwd, &verified)
	if err != nil {
		return &pb.UserLoginReply{Valid: false, AccountID: "", SessionToken: "", Error: "noMatch"}, nil
	}

	// Commit database transaction
	err = tx.Commit()
	if err != nil {
		log.Println(err)
		return &pb.UserLoginReply{Valid: false, AccountID: "", SessionToken: "", Error: "internal"}, nil
	}

	if !verified {
		// Dispatch verification email
		reply, err := s.tc.EmailCreateVerification(ctx, &emailserviceproto.CreateVerificationRequest{
			AccountID: accountId,
			Email:     in.GetEmail(),
		})
		if err != nil || !reply.Valid {
			fmt.Println(err)
			return &pb.UserLoginReply{Valid: false, AccountID: "", SessionToken: "", Error: "emailinternal"}, nil
		}
		//
		return &pb.UserLoginReply{Valid: true, AccountID: accountId, SessionToken: "", Error: "verificationRequired"}, nil
	}

	fmt.Println(accountId, pwd, in.GetSignature())

	//Compare DB hashed pwd, and plain-text provided password, on success return valid.
	err = bcrypt.CompareHashAndPassword([]byte(pwd), []byte(in.GetPwd()))
	if err != nil {
		return &pb.UserLoginReply{Valid: false, AccountID: "", SessionToken: "", Error: "noMatch"}, nil
	}

	//Create session, key, and sessionStartToken. A JWT signed by the provided signature.
	//Store in cache: accountID_signature and accountID_sessionKey.

	key := uuid.New().String() // Server generated key for server-side verification

	//Set signing key in cache
	//
	_, err = s.rdb.Set(ctx, accountId+"_serverkey", key, time.Hour).Result()
	if err != nil && err.Error() != "EOF" {
		fmt.Println("redis_set serverkey:", err)
		return &pb.UserLoginReply{Valid: false, AccountID: "", SessionToken: "", Error: "internal"}, nil
	}
	_, err = s.rdb.Set(ctx, accountId+"_clientkey", in.GetSignature(), time.Hour).Result()
	if err != nil && err.Error() != "EOF" {
		fmt.Println("redis_set clientkey:", err)
		return &pb.UserLoginReply{Valid: false, AccountID: "", SessionToken: "", Error: "internal"}, nil
	}

	// Create the Claims
	claims := SessionStartClaims{
		in.GetSignature(), //User provided key for client-side verification
		accountId,
		jwt.StandardClaims{
			ExpiresAt: time.Now().Add(time.Hour).Unix(),
			Issuer:    "thundrcld.com",
		},
	}

	//
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	ss, err := token.SignedString([]byte(key))
	if err != nil {
		return &pb.UserLoginReply{Valid: false, AccountID: "", SessionToken: "", Error: "internal_error"}, nil
	}

	//Success
	return &pb.UserLoginReply{Valid: true, AccountID: accountId, SessionToken: ss}, nil
}

func main() {
	flag.Parse()
	time.Sleep(time.Second * 3)
	// Create email client
	tiscClient := tisc.Connect(&tisc.Config{
		EmailEnabled:  true,
		EmailEndpoint: "emailservice:42069",
	})
	// Connect to vitess cluster
	db, err := vitessdriver.Open("vtgate.vitess:15999", "@master")
	if err != nil {
		log.Fatalln(err)
	}
	//
	rdb := redis.NewClient(&redis.Options{
		Addr: "redis.redis:6379",
	})
	//
	lis, err := net.Listen("tcp", port)
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}
	s := grpc.NewServer()
	pb.RegisterAuthServiceServer(s, &server{
		db:  db,
		rdb: rdb,
		tc:  tiscClient,
	})
	fmt.Println("Starting")
	if err := s.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}

}
