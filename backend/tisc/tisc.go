package tisc

import "time"

type TISClient struct {
	wrker worker
}

type Config struct {
	TimeoutAfter time.Duration
	// Services
	AccountEnabled  bool
	AccountEndpoint string
	AuthEnabled     bool
	AuthEndPoint    string
	EmailEnabled    bool
	EmailEndpoint   string
}

var timeoutAfter time.Duration = time.Second * 3 // Default 3 seconds

//Connect returns an initialized Client interface
func Connect(conf *Config) *TISClient {
	client := new(TISClient)
	//
	if conf.TimeoutAfter != 0 {
		timeoutAfter = conf.TimeoutAfter
	}
	//

	client.wrker.init(conf)
	go client.wrker.run()
	//
	return client
}

//Close all clients
func (client *TISClient) Close() {
	//
	client.wrker.closeAll()
	//
}
