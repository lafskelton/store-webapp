package main

import (
	"time"

	"github.com/go-redis/redis/v8"
)

// Every 3 minutes, the validation workers wakes from sleep and checks if the session is valid.
// if the session is not valid, it returns an invalid error to exitCh
func validationWorker(rdb *redis.Client, sessionStartToken string, claims *SessionStartClaims, updateClaims chan *SessionStartClaims, exitCh chan error) {
	for {
		claims, err := validateSession(rdb, sessionStartToken, claims.AccountID)
		if err != nil {
			exitCh <- err
			return
		}
		//write over values, lol
		updateClaims <- claims
		time.Sleep(time.Minute * 3)
	}
}
