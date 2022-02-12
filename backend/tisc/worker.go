package tisc

import (
	"container/list"
	"errors"
	"log"
	"sync"
	"time"
)

type queue struct {
	list *list.List
	sync.Mutex
}

// worker //
type worker struct {
	account
	email
	// auth
	sync.Mutex
	queue
	cond sync.Cond
	conf *Config
}

//Init initializes a worker and returns it
func (w *worker) init(conf *Config) {
	w.queue.list = list.New()
	w.cond.L = &w.Mutex
	w.conf = conf
	//
}

//DispatchTask to worker queue
func (w *worker) dispatchTask(task interface{}) {
	w.queue.Lock()
	w.list.PushBack(task)
	w.queue.Unlock()
	w.cond.Signal()
}

// PopTask //
func (w *worker) popTask() interface{} {
	w.queue.Lock()
	t := w.queue.list.Remove(w.queue.list.Front())
	w.queue.Unlock()
	return t
}

func (w *worker) grpcConnections() error {
	count := 0
	if w.conf.AccountEnabled {
		count++
		w.account = newAccountClient(w.conf.AccountEndpoint)
	}
	if w.conf.EmailEnabled {
		count++
		w.email = newEmailClient(w.conf.EmailEndpoint)
	}
	// if w.conf.AuthEnabled {
	//	count++
	// 	w.auth = newAuthClient("authorization-service")
	// }
	if count == 0 {
		return errors.New("noClientsEnabled")
	}
	return nil
}
func (w *worker) closeAll() {
	if w.conf.AccountEnabled {
		w.account.conn.Close()
	}
	if w.conf.EmailEnabled {
		w.email.conn.Close()
	}
	// if w.conf.AuthEnabled {
	// 	w.auth.conn.Close()
	// }
}

// Run //
func (w *worker) run() {
	//
	err := w.grpcConnections()
	if err != nil {
		log.Fatal("TISC Error:", err)
		return
	}
	defer w.closeAll()
	//
	time.Sleep(time.Millisecond * 100)
	//
	for {
		w.Lock()
		for w.queue.list.Len() == 0 {
			//No, Wait for jobs
			// runtime.GC() // well, since we're waiting right?
			w.cond.Wait()

		}
		task := w.popTask()
		//
		//
		//switch
		switch t := task.(type) {
		//
		//Account
		case *accountCreate:
			go func(*accountCreate) {
				resp, err := w.account.accountClient.CreateUser(t.ctx, t.task)
				if err != nil {
					t.err <- err
				} else {
					t.result <- resp
				}
				t.result <- resp
				accountCreatePool.Put(t)
			}(t)
		//
		//Email
		case *createVerificationEmail:
			go func(*createVerificationEmail) {
				resp, err := w.emailClient.CreateVerification(t.ctx, t.task)
				if err != nil {
					t.err <- err
				} else {
					t.result <- resp
				}
				createVerificationEmailPool.Put(t)
			}(t)
			//
			//Auth
			// case *authLogin:
			// 	resp, err := w.authClient.Login(t.ctx, t.task)
			// 	if err != nil {
			// 		log.Println(err)
			// 	}
			// 	t.result <- resp
			// 	authLoginPool.Put(t)

		}
		//
		w.Unlock()
	}
}
