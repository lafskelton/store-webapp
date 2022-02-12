module github.com/thundrcld/authentication

go 1.16

replace github.com/thundrcld/tisc => ../tisc

replace github.com/thundrcld/protos/authproto => ../protos/authproto

replace github.com/thundrcld/protos/accountproto => ../protos/accountproto

replace github.com/thundrcld/protos/emailserviceproto => ../protos/emailserviceproto

exclude github.com/thundrcld/tisc v0.0.0-00010101000000-000000000000

exclude github.com/thundrcld/protos/authproto v0.0.0-00010101000000-000000000000

exclude github.com/thundrcld/protos/accountproto v0.0.0-00010101000000-000000000000

exclude github.com/thundrcld/protos/emailserviceproto v0.0.0-00010101000000-000000000000

require (
	github.com/dgrijalva/jwt-go v3.2.0+incompatible
	github.com/go-redis/redis/v8 v8.9.0
	github.com/google/uuid v1.1.2
	github.com/thundrcld/protos/accountproto v0.0.0-00010101000000-000000000000 // indirect
	github.com/thundrcld/protos/authproto v0.0.0-00010101000000-000000000000
	github.com/thundrcld/protos/emailserviceproto v0.0.0-00010101000000-000000000000
	github.com/thundrcld/tisc v0.0.0-00010101000000-000000000000
	golang.org/x/crypto v0.0.0-20210513164829-c07d793c2f9a
	google.golang.org/grpc v1.38.0
	vitess.io/vitess v0.9.0
)
