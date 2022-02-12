// package: 
// file: authentication.proto

import * as jspb from "google-protobuf";

export class UserLoginRequest extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): void;

  getPwd(): string;
  setPwd(value: string): void;

  getSignature(): string;
  setSignature(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserLoginRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UserLoginRequest): UserLoginRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserLoginRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserLoginRequest;
  static deserializeBinaryFromReader(message: UserLoginRequest, reader: jspb.BinaryReader): UserLoginRequest;
}

export namespace UserLoginRequest {
  export type AsObject = {
    email: string,
    pwd: string,
    signature: string,
  }
}

export class UserLoginReply extends jspb.Message {
  getValid(): boolean;
  setValid(value: boolean): void;

  getAccountid(): string;
  setAccountid(value: string): void;

  getSessiontoken(): string;
  setSessiontoken(value: string): void;

  getError(): string;
  setError(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserLoginReply.AsObject;
  static toObject(includeInstance: boolean, msg: UserLoginReply): UserLoginReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserLoginReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserLoginReply;
  static deserializeBinaryFromReader(message: UserLoginReply, reader: jspb.BinaryReader): UserLoginReply;
}

export namespace UserLoginReply {
  export type AsObject = {
    valid: boolean,
    accountid: string,
    sessiontoken: string,
    error: string,
  }
}

export class VerifyEmailRequest extends jspb.Message {
  getAccountid(): string;
  setAccountid(value: string): void;

  getVcode(): string;
  setVcode(value: string): void;

  getClientsignature(): string;
  setClientsignature(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyEmailRequest.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyEmailRequest): VerifyEmailRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VerifyEmailRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyEmailRequest;
  static deserializeBinaryFromReader(message: VerifyEmailRequest, reader: jspb.BinaryReader): VerifyEmailRequest;
}

export namespace VerifyEmailRequest {
  export type AsObject = {
    accountid: string,
    vcode: string,
    clientsignature: string,
  }
}

export class VerifyEmailReply extends jspb.Message {
  getValid(): boolean;
  setValid(value: boolean): void;

  getSessiontoken(): string;
  setSessiontoken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyEmailReply.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyEmailReply): VerifyEmailReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VerifyEmailReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyEmailReply;
  static deserializeBinaryFromReader(message: VerifyEmailReply, reader: jspb.BinaryReader): VerifyEmailReply;
}

export namespace VerifyEmailReply {
  export type AsObject = {
    valid: boolean,
    sessiontoken: string,
  }
}

