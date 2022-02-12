module github.com/thundrcld/account

go 1.16

replace github.com/thundrcld/protos/accountproto => ../protos/accountproto

exclude github.com/thundrcld/protos/accountproto v0.0.0-00010101000000-000000000000

require (
	github.com/google/uuid v1.2.0
	github.com/thundrcld/protos/accountproto v0.0.0-00010101000000-000000000000
	golang.org/x/crypto v0.0.0-20200622213623-75b288015ac9
	golang.org/x/net v0.0.0-20210226172049-e18ecbb05110 // indirect
	google.golang.org/grpc v1.38.0
	vitess.io/vitess v0.9.0
)
