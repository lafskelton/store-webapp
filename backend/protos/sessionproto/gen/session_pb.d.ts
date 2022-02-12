// package: 
// file: session.proto

import * as jspb from "google-protobuf";

export class SessionStreamStart extends jspb.Message {
  getSessionstarttoken(): string;
  setSessionstarttoken(value: string): void;

  getDeviceip(): string;
  setDeviceip(value: string): void;

  getAccountid(): string;
  setAccountid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SessionStreamStart.AsObject;
  static toObject(includeInstance: boolean, msg: SessionStreamStart): SessionStreamStart.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SessionStreamStart, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SessionStreamStart;
  static deserializeBinaryFromReader(message: SessionStreamStart, reader: jspb.BinaryReader): SessionStreamStart;
}

export namespace SessionStreamStart {
  export type AsObject = {
    sessionstarttoken: string,
    deviceip: string,
    accountid: string,
  }
}

export class SessionStreamMsg extends jspb.Message {
  getMsgtype(): SessionStreamMsg.MsgTypeMap[keyof SessionStreamMsg.MsgTypeMap];
  setMsgtype(value: SessionStreamMsg.MsgTypeMap[keyof SessionStreamMsg.MsgTypeMap]): void;

  getJsonpayload(): string;
  setJsonpayload(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SessionStreamMsg.AsObject;
  static toObject(includeInstance: boolean, msg: SessionStreamMsg): SessionStreamMsg.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SessionStreamMsg, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SessionStreamMsg;
  static deserializeBinaryFromReader(message: SessionStreamMsg, reader: jspb.BinaryReader): SessionStreamMsg;
}

export namespace SessionStreamMsg {
  export type AsObject = {
    msgtype: SessionStreamMsg.MsgTypeMap[keyof SessionStreamMsg.MsgTypeMap],
    jsonpayload: string,
  }

  export interface MsgTypeMap {
    REFRESH_SESSION: 0;
    END_SESSION: 1;
    INVALID_SESSION: 2;
    STREAM_STATUS: 3;
    UPDATE_CLIENT_STATE: 4;
    USER_NOTIFICATION: 5;
    USER_USER_MESSAGE: 6;
  }

  export const MsgType: MsgTypeMap;
}

