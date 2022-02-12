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

const proto = require('./authentication_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.AuthServiceClient =
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
proto.AuthServicePromiseClient =
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
 *   !proto.UserLoginRequest,
 *   !proto.UserLoginReply>}
 */
const methodDescriptor_AuthService_UserLogin = new grpc.web.MethodDescriptor(
  '/AuthService/UserLogin',
  grpc.web.MethodType.UNARY,
  proto.UserLoginRequest,
  proto.UserLoginReply,
  /**
   * @param {!proto.UserLoginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.UserLoginReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.UserLoginRequest,
 *   !proto.UserLoginReply>}
 */
const methodInfo_AuthService_UserLogin = new grpc.web.AbstractClientBase.MethodInfo(
  proto.UserLoginReply,
  /**
   * @param {!proto.UserLoginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.UserLoginReply.deserializeBinary
);


/**
 * @param {!proto.UserLoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.UserLoginReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.UserLoginReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.AuthServiceClient.prototype.userLogin =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/AuthService/UserLogin',
      request,
      metadata || {},
      methodDescriptor_AuthService_UserLogin,
      callback);
};


/**
 * @param {!proto.UserLoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.UserLoginReply>}
 *     Promise that resolves to the response
 */
proto.AuthServicePromiseClient.prototype.userLogin =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/AuthService/UserLogin',
      request,
      metadata || {},
      methodDescriptor_AuthService_UserLogin);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.VerifyEmailRequest,
 *   !proto.VerifyEmailReply>}
 */
const methodDescriptor_AuthService_UserVerifyEmail = new grpc.web.MethodDescriptor(
  '/AuthService/UserVerifyEmail',
  grpc.web.MethodType.UNARY,
  proto.VerifyEmailRequest,
  proto.VerifyEmailReply,
  /**
   * @param {!proto.VerifyEmailRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.VerifyEmailReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.VerifyEmailRequest,
 *   !proto.VerifyEmailReply>}
 */
const methodInfo_AuthService_UserVerifyEmail = new grpc.web.AbstractClientBase.MethodInfo(
  proto.VerifyEmailReply,
  /**
   * @param {!proto.VerifyEmailRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.VerifyEmailReply.deserializeBinary
);


/**
 * @param {!proto.VerifyEmailRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.VerifyEmailReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.VerifyEmailReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.AuthServiceClient.prototype.userVerifyEmail =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/AuthService/UserVerifyEmail',
      request,
      metadata || {},
      methodDescriptor_AuthService_UserVerifyEmail,
      callback);
};


/**
 * @param {!proto.VerifyEmailRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.VerifyEmailReply>}
 *     Promise that resolves to the response
 */
proto.AuthServicePromiseClient.prototype.userVerifyEmail =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/AuthService/UserVerifyEmail',
      request,
      metadata || {},
      methodDescriptor_AuthService_UserVerifyEmail);
};


module.exports = proto;

