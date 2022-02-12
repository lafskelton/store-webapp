package tisc

import (
	"context"
	"log"
	"sync"

	pb "github.com/thundrcld/protos/emailserviceproto"
	"google.golang.org/grpc"
)

//Account grpc client
type email struct {
	emailClient pb.EmailServiceClient
	conn        *grpc.ClientConn
}

func newEmailClient(endpoint string) email {
	//
	opts := []grpc.DialOption{grpc.WithInsecure()}
	conn, err := grpc.Dial(endpoint, opts...)
	if err != nil {
		log.Fatalln(err)
	}
	//
	return email{
		conn:        conn,
		emailClient: pb.NewEmailServiceClient(conn),
	}
	//
	//
}

// ###### API & Worker types

// #### Delete

// worker func
type createVerificationEmail struct {
	ctx    context.Context
	result chan *pb.CreateVerificationReply
	err    chan error
	task   *pb.CreateVerificationRequest
}

var createVerificationEmailPool = sync.Pool{
	New: func() interface{} {
		return new(createVerificationEmail)
	},
}

//AccountCreate creates an account resource
func (c *TISClient) EmailCreateVerification(parentCtx context.Context, in *pb.CreateVerificationRequest) (*pb.CreateVerificationReply, error) {
	//
	a := createVerificationEmailPool.Get().(*createVerificationEmail)
	//
	// Reset pool item
	result := make(chan *pb.CreateVerificationReply)
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
