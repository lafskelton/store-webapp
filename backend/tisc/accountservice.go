package tisc

import (
	"context"
	"log"
	"sync"

	pb "github.com/thundrcld/protos/accountproto"
	"google.golang.org/grpc"
)

//Account grpc client
type account struct {
	accountClient pb.AccountServiceClient
	conn          *grpc.ClientConn
}

func newAccountClient(endpoint string) account {
	//
	opts := []grpc.DialOption{grpc.WithInsecure()}
	conn, err := grpc.Dial(endpoint, opts...)
	if err != nil {
		log.Fatalln(err)
	}
	//
	return account{
		conn:          conn,
		accountClient: pb.NewAccountServiceClient(conn),
	}
	//
	//
}

// ###### API & Worker types

// #### Delete

// worker func
type accountCreate struct {
	ctx    context.Context
	result chan *pb.CreateUserReply
	err    chan error
	task   *pb.CreateUserRequest
}

var accountCreatePool = sync.Pool{
	New: func() interface{} {
		return new(accountCreate)
	},
}

//AccountCreate creates an account resource
func (c *TISClient) AccountCreate(parentCtx context.Context, in *pb.CreateUserRequest) (*pb.CreateUserReply, error) {
	//
	a := accountCreatePool.Get().(*accountCreate)
	//
	// Reset pool item
	result := make(chan *pb.CreateUserReply)
	a.result = result
	err := make(chan error)
	a.err = err
	a.task = in
	//
	ctx, cancel := context.WithTimeout(parentCtx, timeoutAfter)
	a.ctx = ctx
	//
	c.wrker.dispatchTask(a)
	select {
	case result := <-result:
		cancel()
		return result, nil
	case err := <-err:
		cancel()
		return nil, err
	}
}
