// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.26.0
// 	protoc        v3.6.1
// source: session.proto

package sessionservice

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type SessionStreamMsg_MsgType int32

const (
	SessionStreamMsg_REFRESH_SESSION     SessionStreamMsg_MsgType = 0
	SessionStreamMsg_END_SESSION         SessionStreamMsg_MsgType = 1
	SessionStreamMsg_INVALID_SESSION     SessionStreamMsg_MsgType = 2
	SessionStreamMsg_STREAM_STATUS       SessionStreamMsg_MsgType = 3
	SessionStreamMsg_UPDATE_CLIENT_STATE SessionStreamMsg_MsgType = 4
	SessionStreamMsg_USER_NOTIFICATION   SessionStreamMsg_MsgType = 5
	SessionStreamMsg_USER_USER_MESSAGE   SessionStreamMsg_MsgType = 6
)

// Enum value maps for SessionStreamMsg_MsgType.
var (
	SessionStreamMsg_MsgType_name = map[int32]string{
		0: "REFRESH_SESSION",
		1: "END_SESSION",
		2: "INVALID_SESSION",
		3: "STREAM_STATUS",
		4: "UPDATE_CLIENT_STATE",
		5: "USER_NOTIFICATION",
		6: "USER_USER_MESSAGE",
	}
	SessionStreamMsg_MsgType_value = map[string]int32{
		"REFRESH_SESSION":     0,
		"END_SESSION":         1,
		"INVALID_SESSION":     2,
		"STREAM_STATUS":       3,
		"UPDATE_CLIENT_STATE": 4,
		"USER_NOTIFICATION":   5,
		"USER_USER_MESSAGE":   6,
	}
)

func (x SessionStreamMsg_MsgType) Enum() *SessionStreamMsg_MsgType {
	p := new(SessionStreamMsg_MsgType)
	*p = x
	return p
}

func (x SessionStreamMsg_MsgType) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (SessionStreamMsg_MsgType) Descriptor() protoreflect.EnumDescriptor {
	return file_session_proto_enumTypes[0].Descriptor()
}

func (SessionStreamMsg_MsgType) Type() protoreflect.EnumType {
	return &file_session_proto_enumTypes[0]
}

func (x SessionStreamMsg_MsgType) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use SessionStreamMsg_MsgType.Descriptor instead.
func (SessionStreamMsg_MsgType) EnumDescriptor() ([]byte, []int) {
	return file_session_proto_rawDescGZIP(), []int{1, 0}
}

// Start Request
type SessionStreamStart struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	SessionStartToken string `protobuf:"bytes,1,opt,name=sessionStartToken,proto3" json:"sessionStartToken,omitempty"`
	DeviceIP          string `protobuf:"bytes,2,opt,name=deviceIP,proto3" json:"deviceIP,omitempty"`
	AccountID         string `protobuf:"bytes,3,opt,name=accountID,proto3" json:"accountID,omitempty"`
}

func (x *SessionStreamStart) Reset() {
	*x = SessionStreamStart{}
	if protoimpl.UnsafeEnabled {
		mi := &file_session_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *SessionStreamStart) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SessionStreamStart) ProtoMessage() {}

func (x *SessionStreamStart) ProtoReflect() protoreflect.Message {
	mi := &file_session_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SessionStreamStart.ProtoReflect.Descriptor instead.
func (*SessionStreamStart) Descriptor() ([]byte, []int) {
	return file_session_proto_rawDescGZIP(), []int{0}
}

func (x *SessionStreamStart) GetSessionStartToken() string {
	if x != nil {
		return x.SessionStartToken
	}
	return ""
}

func (x *SessionStreamStart) GetDeviceIP() string {
	if x != nil {
		return x.DeviceIP
	}
	return ""
}

func (x *SessionStreamStart) GetAccountID() string {
	if x != nil {
		return x.AccountID
	}
	return ""
}

// responces
type SessionStreamMsg struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	MsgType     SessionStreamMsg_MsgType `protobuf:"varint,1,opt,name=msgType,proto3,enum=SessionStreamMsg_MsgType" json:"msgType,omitempty"`
	JsonPayload string                   `protobuf:"bytes,2,opt,name=jsonPayload,proto3" json:"jsonPayload,omitempty"`
}

func (x *SessionStreamMsg) Reset() {
	*x = SessionStreamMsg{}
	if protoimpl.UnsafeEnabled {
		mi := &file_session_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *SessionStreamMsg) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SessionStreamMsg) ProtoMessage() {}

func (x *SessionStreamMsg) ProtoReflect() protoreflect.Message {
	mi := &file_session_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SessionStreamMsg.ProtoReflect.Descriptor instead.
func (*SessionStreamMsg) Descriptor() ([]byte, []int) {
	return file_session_proto_rawDescGZIP(), []int{1}
}

func (x *SessionStreamMsg) GetMsgType() SessionStreamMsg_MsgType {
	if x != nil {
		return x.MsgType
	}
	return SessionStreamMsg_REFRESH_SESSION
}

func (x *SessionStreamMsg) GetJsonPayload() string {
	if x != nil {
		return x.JsonPayload
	}
	return ""
}

var File_session_proto protoreflect.FileDescriptor

var file_session_proto_rawDesc = []byte{
	0x0a, 0x0d, 0x73, 0x65, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22,
	0x7c, 0x0a, 0x12, 0x53, 0x65, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x53, 0x74, 0x72, 0x65, 0x61, 0x6d,
	0x53, 0x74, 0x61, 0x72, 0x74, 0x12, 0x2c, 0x0a, 0x11, 0x73, 0x65, 0x73, 0x73, 0x69, 0x6f, 0x6e,
	0x53, 0x74, 0x61, 0x72, 0x74, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x11, 0x73, 0x65, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x53, 0x74, 0x61, 0x72, 0x74, 0x54, 0x6f,
	0x6b, 0x65, 0x6e, 0x12, 0x1a, 0x0a, 0x08, 0x64, 0x65, 0x76, 0x69, 0x63, 0x65, 0x49, 0x50, 0x18,
	0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x64, 0x65, 0x76, 0x69, 0x63, 0x65, 0x49, 0x50, 0x12,
	0x1c, 0x0a, 0x09, 0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x49, 0x44, 0x18, 0x03, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x09, 0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x49, 0x44, 0x22, 0x8a, 0x02,
	0x0a, 0x10, 0x53, 0x65, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x53, 0x74, 0x72, 0x65, 0x61, 0x6d, 0x4d,
	0x73, 0x67, 0x12, 0x33, 0x0a, 0x07, 0x6d, 0x73, 0x67, 0x54, 0x79, 0x70, 0x65, 0x18, 0x01, 0x20,
	0x01, 0x28, 0x0e, 0x32, 0x19, 0x2e, 0x53, 0x65, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x53, 0x74, 0x72,
	0x65, 0x61, 0x6d, 0x4d, 0x73, 0x67, 0x2e, 0x4d, 0x73, 0x67, 0x54, 0x79, 0x70, 0x65, 0x52, 0x07,
	0x6d, 0x73, 0x67, 0x54, 0x79, 0x70, 0x65, 0x12, 0x20, 0x0a, 0x0b, 0x6a, 0x73, 0x6f, 0x6e, 0x50,
	0x61, 0x79, 0x6c, 0x6f, 0x61, 0x64, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0b, 0x6a, 0x73,
	0x6f, 0x6e, 0x50, 0x61, 0x79, 0x6c, 0x6f, 0x61, 0x64, 0x22, 0x9e, 0x01, 0x0a, 0x07, 0x4d, 0x73,
	0x67, 0x54, 0x79, 0x70, 0x65, 0x12, 0x13, 0x0a, 0x0f, 0x52, 0x45, 0x46, 0x52, 0x45, 0x53, 0x48,
	0x5f, 0x53, 0x45, 0x53, 0x53, 0x49, 0x4f, 0x4e, 0x10, 0x00, 0x12, 0x0f, 0x0a, 0x0b, 0x45, 0x4e,
	0x44, 0x5f, 0x53, 0x45, 0x53, 0x53, 0x49, 0x4f, 0x4e, 0x10, 0x01, 0x12, 0x13, 0x0a, 0x0f, 0x49,
	0x4e, 0x56, 0x41, 0x4c, 0x49, 0x44, 0x5f, 0x53, 0x45, 0x53, 0x53, 0x49, 0x4f, 0x4e, 0x10, 0x02,
	0x12, 0x11, 0x0a, 0x0d, 0x53, 0x54, 0x52, 0x45, 0x41, 0x4d, 0x5f, 0x53, 0x54, 0x41, 0x54, 0x55,
	0x53, 0x10, 0x03, 0x12, 0x17, 0x0a, 0x13, 0x55, 0x50, 0x44, 0x41, 0x54, 0x45, 0x5f, 0x43, 0x4c,
	0x49, 0x45, 0x4e, 0x54, 0x5f, 0x53, 0x54, 0x41, 0x54, 0x45, 0x10, 0x04, 0x12, 0x15, 0x0a, 0x11,
	0x55, 0x53, 0x45, 0x52, 0x5f, 0x4e, 0x4f, 0x54, 0x49, 0x46, 0x49, 0x43, 0x41, 0x54, 0x49, 0x4f,
	0x4e, 0x10, 0x05, 0x12, 0x15, 0x0a, 0x11, 0x55, 0x53, 0x45, 0x52, 0x5f, 0x55, 0x53, 0x45, 0x52,
	0x5f, 0x4d, 0x45, 0x53, 0x53, 0x41, 0x47, 0x45, 0x10, 0x06, 0x32, 0x4d, 0x0a, 0x0e, 0x53, 0x65,
	0x73, 0x73, 0x69, 0x6f, 0x6e, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x3b, 0x0a, 0x0d,
	0x53, 0x65, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x53, 0x74, 0x72, 0x65, 0x61, 0x6d, 0x12, 0x13, 0x2e,
	0x53, 0x65, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x53, 0x74, 0x72, 0x65, 0x61, 0x6d, 0x53, 0x74, 0x61,
	0x72, 0x74, 0x1a, 0x11, 0x2e, 0x53, 0x65, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x53, 0x74, 0x72, 0x65,
	0x61, 0x6d, 0x4d, 0x73, 0x67, 0x22, 0x00, 0x30, 0x01, 0x42, 0x2b, 0x5a, 0x29, 0x67, 0x69, 0x74,
	0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x74, 0x68, 0x75, 0x6e, 0x64, 0x72, 0x63, 0x6c,
	0x64, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2f, 0x73, 0x65, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x73,
	0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_session_proto_rawDescOnce sync.Once
	file_session_proto_rawDescData = file_session_proto_rawDesc
)

func file_session_proto_rawDescGZIP() []byte {
	file_session_proto_rawDescOnce.Do(func() {
		file_session_proto_rawDescData = protoimpl.X.CompressGZIP(file_session_proto_rawDescData)
	})
	return file_session_proto_rawDescData
}

var file_session_proto_enumTypes = make([]protoimpl.EnumInfo, 1)
var file_session_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_session_proto_goTypes = []interface{}{
	(SessionStreamMsg_MsgType)(0), // 0: SessionStreamMsg.MsgType
	(*SessionStreamStart)(nil),    // 1: SessionStreamStart
	(*SessionStreamMsg)(nil),      // 2: SessionStreamMsg
}
var file_session_proto_depIdxs = []int32{
	0, // 0: SessionStreamMsg.msgType:type_name -> SessionStreamMsg.MsgType
	1, // 1: SessionService.SessionStream:input_type -> SessionStreamStart
	2, // 2: SessionService.SessionStream:output_type -> SessionStreamMsg
	2, // [2:3] is the sub-list for method output_type
	1, // [1:2] is the sub-list for method input_type
	1, // [1:1] is the sub-list for extension type_name
	1, // [1:1] is the sub-list for extension extendee
	0, // [0:1] is the sub-list for field type_name
}

func init() { file_session_proto_init() }
func file_session_proto_init() {
	if File_session_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_session_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*SessionStreamStart); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_session_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*SessionStreamMsg); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_session_proto_rawDesc,
			NumEnums:      1,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_session_proto_goTypes,
		DependencyIndexes: file_session_proto_depIdxs,
		EnumInfos:         file_session_proto_enumTypes,
		MessageInfos:      file_session_proto_msgTypes,
	}.Build()
	File_session_proto = out.File
	file_session_proto_rawDesc = nil
	file_session_proto_goTypes = nil
	file_session_proto_depIdxs = nil
}