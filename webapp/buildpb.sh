#!/bin/bash

export GOBIN="$GOPATH/bin"

protoc \
  --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
    -I=./src/proto \
  --js_out=import_style=commonjs,binary:./src/proto \
  --ts_out=service=grpc-web:./src/proto \
    ./src/proto/storeapi.proto