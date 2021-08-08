// package: 
// file: storeapi.proto

import * as storeapi_pb from "./storeapi_pb";
import {grpc} from "@improbable-eng/grpc-web";

type StoreAPIGetBrowseManifest = {
  readonly methodName: string;
  readonly service: typeof StoreAPI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof storeapi_pb.GetBrowseManifestInbound;
  readonly responseType: typeof storeapi_pb.GetBrowseManifestOutbound;
};

export class StoreAPI {
  static readonly serviceName: string;
  static readonly GetBrowseManifest: StoreAPIGetBrowseManifest;
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

export class StoreAPIClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getBrowseManifest(
    requestMessage: storeapi_pb.GetBrowseManifestInbound,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: storeapi_pb.GetBrowseManifestOutbound|null) => void
  ): UnaryResponse;
  getBrowseManifest(
    requestMessage: storeapi_pb.GetBrowseManifestInbound,
    callback: (error: ServiceError|null, responseMessage: storeapi_pb.GetBrowseManifestOutbound|null) => void
  ): UnaryResponse;
}

