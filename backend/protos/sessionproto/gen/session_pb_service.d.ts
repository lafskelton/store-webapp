// package: 
// file: session.proto

import * as session_pb from "./session_pb";
import {grpc} from "@improbable-eng/grpc-web";

type SessionServiceSessionStream = {
  readonly methodName: string;
  readonly service: typeof SessionService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof session_pb.SessionStreamStart;
  readonly responseType: typeof session_pb.SessionStreamMsg;
};

export class SessionService {
  static readonly serviceName: string;
  static readonly SessionStream: SessionServiceSessionStream;
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

export class SessionServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  sessionStream(requestMessage: session_pb.SessionStreamStart, metadata?: grpc.Metadata): ResponseStream<session_pb.SessionStreamMsg>;
}

