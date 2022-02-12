// package: 
// file: authentication.proto

import * as authentication_pb from "./authentication_pb";
import {grpc} from "@improbable-eng/grpc-web";

type AuthServiceUserLogin = {
  readonly methodName: string;
  readonly service: typeof AuthService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof authentication_pb.UserLoginRequest;
  readonly responseType: typeof authentication_pb.UserLoginReply;
};

type AuthServiceUserVerifyEmail = {
  readonly methodName: string;
  readonly service: typeof AuthService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof authentication_pb.VerifyEmailRequest;
  readonly responseType: typeof authentication_pb.VerifyEmailReply;
};

export class AuthService {
  static readonly serviceName: string;
  static readonly UserLogin: AuthServiceUserLogin;
  static readonly UserVerifyEmail: AuthServiceUserVerifyEmail;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class AuthServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  userLogin(
    requestMessage: authentication_pb.UserLoginRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: authentication_pb.UserLoginReply|null) => void
  ): UnaryResponse;
  userLogin(
    requestMessage: authentication_pb.UserLoginRequest,
    callback: (error: ServiceError|null, responseMessage: authentication_pb.UserLoginReply|null) => void
  ): UnaryResponse;
  userVerifyEmail(
    requestMessage: authentication_pb.VerifyEmailRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: authentication_pb.VerifyEmailReply|null) => void
  ): UnaryResponse;
  userVerifyEmail(
    requestMessage: authentication_pb.VerifyEmailRequest,
    callback: (error: ServiceError|null, responseMessage: authentication_pb.VerifyEmailReply|null) => void
  ): UnaryResponse;
}

