package main

import (
	"fmt"
	"log"
	"net"
	"time"

	"github.com/dgrijalva/jwt-go"
	"github.com/go-redis/redis/v8"
	"github.com/nats-io/nats.go"
	pb "github.com/thundrcld/protos/sessionproto"
	"google.golang.org/grpc"
)

type server struct {
	pb.SessionServiceServer
	rdb *redis.Client
}

const (
	servicePort = ":42069"
)

//MUST MATCH AUTHENTICATION SERVICE
type SessionStartClaims struct {
	SessionKey string `json:"sessionKey"` //User provided key for client-side verification
	AccountID  string `json:"accountID"`
	jwt.StandardClaims
}

func (s *server) SessionStream(in *pb.SessionStreamStart, stream pb.SessionService_SessionStreamServer) error {
	exitCh := make(chan error)
	fmt.Println(in)

	if in.GetAccountID() == "" {
		stream.Send(&pb.SessionStreamMsg{
			MsgType:     pb.SessionStreamMsg_INVALID_SESSION,
			JsonPayload: `{"code":"malformed_request"}`,
		})
		return nil
	}

	claims, err := validateSession(s.rdb, in.SessionStartToken, in.AccountID)
	if err != nil {
		stream.Send(&pb.SessionStreamMsg{
			MsgType:     pb.SessionStreamMsg_INVALID_SESSION,
			JsonPayload: err.Error(),
		})
		return nil
	}
	//Validate token, map to struct

	//Expiry worker
	updateClaims := make(chan *SessionStartClaims)
	go validationWorker(s.rdb, in.SessionStartToken, claims, updateClaims, exitCh)
	go func(u chan *SessionStartClaims) {
		for state := range u {
			claims = state
			stream.Send(&pb.SessionStreamMsg{
				MsgType:     pb.SessionStreamMsg_STREAM_STATUS,
				JsonPayload: `{"status":"healthy"}`,
			})
		}
	}(updateClaims)

	//NATS worker & message triage
	natsChan := make(chan interface{})
	go natsWorker(claims.AccountID, natsChan, exitCh)
	go func(ut chan interface{}) {
		for msg := range natsChan {
			natsEventTriage(msg, claims.AccountID, claims.SessionKey, stream)
		}
	}(natsChan)
	//
	//
	errChRes := <-exitCh
	if errChRes != nil {
		fmt.Println(errChRes)
		stream.Send(&pb.SessionStreamMsg{
			MsgType:     pb.SessionStreamMsg_INVALID_SESSION,
			JsonPayload: errChRes.Error(),
		})
	}

	// time.Sleep(time.Minute)
	return nil
}

func main() {
	// Grace period to allow istio-proxy to become fully alive
	time.Sleep(time.Second * 3)

	//Connect nats
	nc, err := nats.Connect("nats://nats-cluster.nats-io:4222", nats.Timeout(10*time.Second), nats.MaxReconnects(5), nats.ReconnectWait(2*time.Second))
	if err != nil {
		log.Fatal(err)
	}
	defer nc.Close()

	rdb := redis.NewClient(&redis.Options{
		Addr: "redis.redis:6379",
	})

	lis, err := net.Listen("tcp", servicePort)
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}
	srv := grpc.NewServer()
	//Register server to gRPC handler
	pb.RegisterSessionServiceServer(srv, &server{
		//Start redis client
		// rdb: rdb,
		//Start email client
		rdb: rdb,
	})
	fmt.Println("Starting")
	if err := srv.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}
