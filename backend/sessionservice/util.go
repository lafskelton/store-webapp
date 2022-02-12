package main

import (
	"context"
	"errors"
	"time"

	"github.com/dgrijalva/jwt-go"
	"github.com/go-redis/redis/v8"
)

func validateSession(rdb *redis.Client, sessionStartToken string, accountID string) (*SessionStartClaims, error) {
	//	Parse start token
	token, err := jwt.ParseWithClaims(sessionStartToken, &SessionStartClaims{}, func(token *jwt.Token) (interface{}, error) {
		ctx, cancel := context.WithTimeout(context.Background(), time.Second*5)
		defer cancel()
		//Retrieve s	erver-side key for this session
		key, err := rdb.Get(ctx, accountID+"_serverkey").Result()
		if err != nil {
			return nil, errors.New("cache_failure: " + err.Error())
		}
		return []byte(key), nil
	})
	if err != nil {
		return nil, errors.New(`{"code":"invalid_key"}`) //Exit stream
	}

	//Validate token, map to struct
	claims, ok := token.Claims.(*SessionStartClaims)
	if !ok || !token.Valid {
		return nil, errors.New(`{"code":"token_invalid"}`) //Exit stream
	}

	//SessionKey - generated by the client to verify the token locally
	return claims, nil
}
