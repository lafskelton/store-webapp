// package: 
// file: storeapi.proto

import * as jspb from "google-protobuf";

export class GetBrowseManifestInbound extends jspb.Message {
  clearFlagsList(): void;
  getFlagsList(): Array<string>;
  setFlagsList(value: Array<string>): void;
  addFlags(value: string, index?: number): string;

  getUserid(): string;
  setUserid(value: string): void;

  getOriginid(): string;
  setOriginid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBrowseManifestInbound.AsObject;
  static toObject(includeInstance: boolean, msg: GetBrowseManifestInbound): GetBrowseManifestInbound.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBrowseManifestInbound, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBrowseManifestInbound;
  static deserializeBinaryFromReader(message: GetBrowseManifestInbound, reader: jspb.BinaryReader): GetBrowseManifestInbound;
}

export namespace GetBrowseManifestInbound {
  export type AsObject = {
    flagsList: Array<string>,
    userid: string,
    originid: string,
  }
}

export class GetBrowseManifestOutbound extends jspb.Message {
  getManifest(): string;
  setManifest(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBrowseManifestOutbound.AsObject;
  static toObject(includeInstance: boolean, msg: GetBrowseManifestOutbound): GetBrowseManifestOutbound.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBrowseManifestOutbound, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBrowseManifestOutbound;
  static deserializeBinaryFromReader(message: GetBrowseManifestOutbound, reader: jspb.BinaryReader): GetBrowseManifestOutbound;
}

export namespace GetBrowseManifestOutbound {
  export type AsObject = {
    manifest: string,
  }
}

