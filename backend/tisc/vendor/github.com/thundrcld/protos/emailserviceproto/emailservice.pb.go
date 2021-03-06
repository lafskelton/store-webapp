// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.26.0
// 	protoc        v3.6.1
// source: emailservice.proto

package emailserviceproto

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

// User Login Request
type CreateVerificationRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	AccountID string `protobuf:"bytes,2,opt,name=accountID,proto3" json:"accountID,omitempty"`
}

func (x *CreateVerificationRequest) Reset() {
	*x = CreateVerificationRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_emailservice_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CreateVerificationRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CreateVerificationRequest) ProtoMessage() {}

func (x *CreateVerificationRequest) ProtoReflect() protoreflect.Message {
	mi := &file_emailservice_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CreateVerificationRequest.ProtoReflect.Descriptor instead.
func (*CreateVerificationRequest) Descriptor() ([]byte, []int) {
	return file_emailservice_proto_rawDescGZIP(), []int{0}
}

func (x *CreateVerificationRequest) GetAccountID() string {
	if x != nil {
		return x.AccountID
	}
	return ""
}

// UserLogin responce
type CreateVerificationReply struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Valid bool `protobuf:"varint,1,opt,name=valid,proto3" json:"valid,omitempty"`
}

func (x *CreateVerificationReply) Reset() {
	*x = CreateVerificationReply{}
	if protoimpl.UnsafeEnabled {
		mi := &file_emailservice_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CreateVerificationReply) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CreateVerificationReply) ProtoMessage() {}

func (x *CreateVerificationReply) ProtoReflect() protoreflect.Message {
	mi := &file_emailservice_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CreateVerificationReply.ProtoReflect.Descriptor instead.
func (*CreateVerificationReply) Descriptor() ([]byte, []int) {
	return file_emailservice_proto_rawDescGZIP(), []int{1}
}

func (x *CreateVerificationReply) GetValid() bool {
	if x != nil {
		return x.Valid
	}
	return false
}

type CompleteVerificationRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	AccountID string `protobuf:"bytes,2,opt,name=accountID,proto3" json:"accountID,omitempty"`
	InputCode string `protobuf:"bytes,3,opt,name=inputCode,proto3" json:"inputCode,omitempty"`
}

func (x *CompleteVerificationRequest) Reset() {
	*x = CompleteVerificationRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_emailservice_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CompleteVerificationRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CompleteVerificationRequest) ProtoMessage() {}

func (x *CompleteVerificationRequest) ProtoReflect() protoreflect.Message {
	mi := &file_emailservice_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CompleteVerificationRequest.ProtoReflect.Descriptor instead.
func (*CompleteVerificationRequest) Descriptor() ([]byte, []int) {
	return file_emailservice_proto_rawDescGZIP(), []int{2}
}

func (x *CompleteVerificationRequest) GetAccountID() string {
	if x != nil {
		return x.AccountID
	}
	return ""
}

func (x *CompleteVerificationRequest) GetInputCode() string {
	if x != nil {
		return x.InputCode
	}
	return ""
}

type CompleteVerificationReply struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Valid string `protobuf:"bytes,1,opt,name=valid,proto3" json:"valid,omitempty"`
}

func (x *CompleteVerificationReply) Reset() {
	*x = CompleteVerificationReply{}
	if protoimpl.UnsafeEnabled {
		mi := &file_emailservice_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CompleteVerificationReply) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CompleteVerificationReply) ProtoMessage() {}

func (x *CompleteVerificationReply) ProtoReflect() protoreflect.Message {
	mi := &file_emailservice_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CompleteVerificationReply.ProtoReflect.Descriptor instead.
func (*CompleteVerificationReply) Descriptor() ([]byte, []int) {
	return file_emailservice_proto_rawDescGZIP(), []int{3}
}

func (x *CompleteVerificationReply) GetValid() string {
	if x != nil {
		return x.Valid
	}
	return ""
}

var File_emailservice_proto protoreflect.FileDescriptor

var file_emailservice_proto_rawDesc = []byte{
	0x0a, 0x12, 0x65, 0x6d, 0x61, 0x69, 0x6c, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x22, 0x39, 0x0a, 0x19, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x56, 0x65,
	0x72, 0x69, 0x66, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73,
	0x74, 0x12, 0x1c, 0x0a, 0x09, 0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x49, 0x44, 0x18, 0x02,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x49, 0x44, 0x22,
	0x2f, 0x0a, 0x17, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x56, 0x65, 0x72, 0x69, 0x66, 0x69, 0x63,
	0x61, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x70, 0x6c, 0x79, 0x12, 0x14, 0x0a, 0x05, 0x76, 0x61,
	0x6c, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x08, 0x52, 0x05, 0x76, 0x61, 0x6c, 0x69, 0x64,
	0x22, 0x59, 0x0a, 0x1b, 0x43, 0x6f, 0x6d, 0x70, 0x6c, 0x65, 0x74, 0x65, 0x56, 0x65, 0x72, 0x69,
	0x66, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12,
	0x1c, 0x0a, 0x09, 0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x49, 0x44, 0x18, 0x02, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x09, 0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x49, 0x44, 0x12, 0x1c, 0x0a,
	0x09, 0x69, 0x6e, 0x70, 0x75, 0x74, 0x43, 0x6f, 0x64, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x09, 0x69, 0x6e, 0x70, 0x75, 0x74, 0x43, 0x6f, 0x64, 0x65, 0x22, 0x31, 0x0a, 0x19, 0x43,
	0x6f, 0x6d, 0x70, 0x6c, 0x65, 0x74, 0x65, 0x56, 0x65, 0x72, 0x69, 0x66, 0x69, 0x63, 0x61, 0x74,
	0x69, 0x6f, 0x6e, 0x52, 0x65, 0x70, 0x6c, 0x79, 0x12, 0x14, 0x0a, 0x05, 0x76, 0x61, 0x6c, 0x69,
	0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x76, 0x61, 0x6c, 0x69, 0x64, 0x32, 0xb0,
	0x01, 0x0a, 0x0c, 0x45, 0x6d, 0x61, 0x69, 0x6c, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12,
	0x4c, 0x0a, 0x12, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x56, 0x65, 0x72, 0x69, 0x66, 0x69, 0x63,
	0x61, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x1a, 0x2e, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x56, 0x65,
	0x72, 0x69, 0x66, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73,
	0x74, 0x1a, 0x18, 0x2e, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x56, 0x65, 0x72, 0x69, 0x66, 0x69,
	0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x70, 0x6c, 0x79, 0x22, 0x00, 0x12, 0x52, 0x0a,
	0x14, 0x43, 0x6f, 0x6d, 0x70, 0x6c, 0x65, 0x74, 0x65, 0x56, 0x65, 0x72, 0x69, 0x66, 0x69, 0x63,
	0x61, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x1c, 0x2e, 0x43, 0x6f, 0x6d, 0x70, 0x6c, 0x65, 0x74, 0x65,
	0x56, 0x65, 0x72, 0x69, 0x66, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x71, 0x75,
	0x65, 0x73, 0x74, 0x1a, 0x1a, 0x2e, 0x43, 0x6f, 0x6d, 0x70, 0x6c, 0x65, 0x74, 0x65, 0x56, 0x65,
	0x72, 0x69, 0x66, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x70, 0x6c, 0x79, 0x22,
	0x00, 0x42, 0x28, 0x5a, 0x26, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f,
	0x74, 0x68, 0x75, 0x6e, 0x64, 0x72, 0x63, 0x6c, 0x64, 0x2f, 0x65, 0x6d, 0x61, 0x69, 0x6c, 0x73,
	0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x06, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x33,
}

var (
	file_emailservice_proto_rawDescOnce sync.Once
	file_emailservice_proto_rawDescData = file_emailservice_proto_rawDesc
)

func file_emailservice_proto_rawDescGZIP() []byte {
	file_emailservice_proto_rawDescOnce.Do(func() {
		file_emailservice_proto_rawDescData = protoimpl.X.CompressGZIP(file_emailservice_proto_rawDescData)
	})
	return file_emailservice_proto_rawDescData
}

var file_emailservice_proto_msgTypes = make([]protoimpl.MessageInfo, 4)
var file_emailservice_proto_goTypes = []interface{}{
	(*CreateVerificationRequest)(nil),   // 0: CreateVerificationRequest
	(*CreateVerificationReply)(nil),     // 1: CreateVerificationReply
	(*CompleteVerificationRequest)(nil), // 2: CompleteVerificationRequest
	(*CompleteVerificationReply)(nil),   // 3: CompleteVerificationReply
}
var file_emailservice_proto_depIdxs = []int32{
	0, // 0: EmailService.CreateVerification:input_type -> CreateVerificationRequest
	2, // 1: EmailService.CompleteVerification:input_type -> CompleteVerificationRequest
	1, // 2: EmailService.CreateVerification:output_type -> CreateVerificationReply
	3, // 3: EmailService.CompleteVerification:output_type -> CompleteVerificationReply
	2, // [2:4] is the sub-list for method output_type
	0, // [0:2] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_emailservice_proto_init() }
func file_emailservice_proto_init() {
	if File_emailservice_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_emailservice_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CreateVerificationRequest); i {
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
		file_emailservice_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CreateVerificationReply); i {
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
		file_emailservice_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CompleteVerificationRequest); i {
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
		file_emailservice_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CompleteVerificationReply); i {
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
			RawDescriptor: file_emailservice_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   4,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_emailservice_proto_goTypes,
		DependencyIndexes: file_emailservice_proto_depIdxs,
		MessageInfos:      file_emailservice_proto_msgTypes,
	}.Build()
	File_emailservice_proto = out.File
	file_emailservice_proto_rawDesc = nil
	file_emailservice_proto_goTypes = nil
	file_emailservice_proto_depIdxs = nil
}
