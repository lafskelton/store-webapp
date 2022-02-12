// package: 
// file: account.proto

import * as jspb from "google-protobuf";

export class CreateUserRequest extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): void;

  getPwd(): string;
  setPwd(value: string): void;

  getUsername(): string;
  setUsername(value: string): void;

  getLocationcode(): string;
  setLocationcode(value: string): void;

  getIp(): string;
  setIp(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateUserRequest): CreateUserRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateUserRequest;
  static deserializeBinaryFromReader(message: CreateUserRequest, reader: jspb.BinaryReader): CreateUserRequest;
}

export namespace CreateUserRequest {
  export type AsObject = {
    email: string,
    pwd: string,
    username: string,
    locationcode: string,
    ip: string,
  }
}

export class CreateUserReply extends jspb.Message {
  getValid(): boolean;
  setValid(value: boolean): void;

  getAccountid(): string;
  setAccountid(value: string): void;

  getError(): string;
  setError(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateUserReply.AsObject;
  static toObject(includeInstance: boolean, msg: CreateUserReply): CreateUserReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateUserReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateUserReply;
  static deserializeBinaryFromReader(message: CreateUserReply, reader: jspb.BinaryReader): CreateUserReply;
}

export namespace CreateUserReply {
  export type AsObject = {
    valid: boolean,
    accountid: string,
    error: string,
  }
}

