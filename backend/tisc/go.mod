module github.com/thundrcld/tisc

go 1.16

replace github.com/thundrcld/protos/emailserviceproto => ../protos/emailserviceproto

exclude github.com/thundrcld/protos/emailserviceproto v0.0.0-00010101000000-000000000000

replace github.com/thundrcld/protos/accountproto => ../protos/accountproto

exclude github.com/thundrcld/protos/accountproto v0.0.0-00010101000000-000000000000

require (
	github.com/chasex/redis-go-cluster v1.0.0
	github.com/thundrcld/protos/accountproto v0.0.0-00010101000000-000000000000
	github.com/thundrcld/protos/emailserviceproto v0.0.0-00010101000000-000000000000
	google.golang.org/grpc v1.38.0
)
