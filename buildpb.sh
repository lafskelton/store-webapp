#!/bin/bash

export GOBIN="$GOPATH/bin"

protoc \
  --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
    -I=./webapp/src/proto \
  --js_out=import_style=commonjs,binary:./webapp/src/proto \
  --ts_out=service=grpc-web:./webapp/src/proto \
    ./webapp/src/proto/storeapi.proto