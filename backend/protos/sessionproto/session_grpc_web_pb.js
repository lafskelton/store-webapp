/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = require('./session_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.SessionServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.SessionServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.SessionStreamStart,
 *   !proto.SessionStreamMsg>}
 */
const methodDescriptor_SessionService_SessionStream = new grpc.web.MethodDescriptor(
  '/SessionService/SessionStream',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.SessionStreamStart,
  proto.SessionStreamMsg,
  /**
   * @param {!proto.SessionStreamStart} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.SessionStreamMsg.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.SessionStreamStart,
 *   !proto.SessionStreamMsg>}
 */
const methodInfo_SessionService_SessionStream = new grpc.web.AbstractClientBase.MethodInfo(
  proto.SessionStreamMsg,
  /**
   * @param {!proto.SessionStreamStart} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.SessionStreamMsg.deserializeBinary
);


/**
 * @param {!proto.SessionStreamStart} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.SessionStreamMsg>}
 *     The XHR Node Readable Stream
 */
proto.SessionServiceClient.prototype.sessionStream =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/SessionService/SessionStream',
      request,
      metadata || {},
      methodDescriptor_SessionService_SessionStream);
};


/**
 * @param {!proto.SessionStreamStart} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.SessionStreamMsg>}
 *     The XHR Node Readable Stream
 */
proto.SessionServicePromiseClient.prototype.sessionStream =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/SessionService/SessionStream',
      request,
      metadata || {},
      methodDescriptor_SessionService_SessionStream);
};


module.exports = proto;

