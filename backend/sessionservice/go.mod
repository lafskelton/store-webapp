module github.com/thundrcld/sessionservice

go 1.16

replace github.com/thundrcld/tisc => ../tisc

replace github.com/thundrcld/protos/sessionproto => ../protos/sessionproto

exclude github.com/thundrcld/protos/sessionproto v0.0.0-00010101000000-000000000000

require (
	github.com/dgrijalva/jwt-go v3.2.0+incompatible
	github.com/go-redis/redis/v8 v8.9.0
	github.com/nats-io/jwt v0.3.2 // indirect
	github.com/nats-io/nats.go v1.11.0
	github.com/thundrcld/protos/sessionproto v0.0.0-00010101000000-000000000000
	google.golang.org/grpc v1.38.0
	google.golang.org/protobuf v1.26.0 // indirect
)
