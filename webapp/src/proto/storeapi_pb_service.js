// package:
// file: storeapi.proto

var storeapi_pb = require("./storeapi_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var StoreAPI = (function () {
  function StoreAPI() {}
  StoreAPI.serviceName = "storepb.StoreAPI";
  return StoreAPI;
})();

StoreAPI.GetBrowseManifest = {
  methodName: "GetBrowseManifest",
  service: StoreAPI,
  requestStream: false,
  responseStream: false,
  requestType: storeapi_pb.GetBrowseManifestInbound,
  responseType: storeapi_pb.GetBrowseManifestOutbound,
};

exports.StoreAPI = StoreAPI;

function StoreAPIClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

StoreAPIClient.prototype.getBrowseManifest = function getBrowseManifest(
  requestMessage,
  metadata,
  callback
) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(StoreAPI.GetBrowseManifest, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    },
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    },
  };
};

exports.StoreAPIClient = StoreAPIClient;
