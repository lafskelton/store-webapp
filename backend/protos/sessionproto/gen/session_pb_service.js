// package: 
// file: session.proto

var session_pb = require("./session_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var SessionService = (function () {
  function SessionService() {}
  SessionService.serviceName = "SessionService";
  return SessionService;
}());

SessionService.SessionStream = {
  methodName: "SessionStream",
  service: SessionService,
  requestStream: false,
  responseStream: true,
  requestType: session_pb.SessionStreamStart,
  responseType: session_pb.SessionStreamMsg
};

exports.SessionService = SessionService;

function SessionServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

SessionServiceClient.prototype.sessionStream = function sessionStream(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(SessionService.SessionStream, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

exports.SessionServiceClient = SessionServiceClient;

