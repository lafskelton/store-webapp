FROM golang:1.16-buster as builder

    WORKDIR /app

    COPY go.* ./
    RUN go mod vendor

    COPY . ./

    RUN CGO_ENABLED=0 go build -v -a -ldflags '-s' -o main

################

FROM scratch

    CMD [ "/main" ]
    EXPOSE 42069
    COPY --from=builder /app/main /main