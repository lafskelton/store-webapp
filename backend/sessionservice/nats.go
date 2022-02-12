package main

import (
	"fmt"
	"time"

	pb "github.com/thundrcld/protos/sessionproto"
)

//NATS worker
func natsWorker(accountID string, natsChan chan interface{}, exitCh chan error) {
	//Listen to all channels attached to this accountID
	for {
		time.Sleep(time.Second)
	}
}

//Event types
type UserToUserMessage struct {
	AccountID string
	SenderID  string
	Payload   string
}

//NATS worker
func natsEventTriage(msg interface{}, accountID string, clientKey string, stream pb.SessionService_SessionStreamServer) {
	//Listen to all channels attached to this accountID
	switch m := msg.(type) {
	case UserToUserMessage:
		fmt.Println("UserToUserMessage:", m)
		break
	default:
		fmt.Println("FuckedUpTypeMsg: ", m)
	}
}
