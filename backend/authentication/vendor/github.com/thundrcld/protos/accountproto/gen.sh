protoc \
--plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
--js_out=import_style=commonjs,binary:gen \
--ts_out=service=grpc-web:gen \
--grpc-web_out=import_style=commonjs,mode=grpcwebtext:. \
-I . \
account.proto

protoc --go_out=. --go_opt=paths=source_relative \
    --go-grpc_out=. --go-grpc_opt=paths=source_relative\
   account.proto


cp -r gen/. ~/limlam/react-app/thundrcld/src/lib/generated/.


