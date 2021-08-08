import { grpc } from "@improbable-eng/grpc-web";
import { StoreAPIClient } from "../../../../proto/storeapi_pb_service";
import {
  GetBrowseManifestInbound,
  GetBrowseManifestOutbound,
} from "../../../../proto/storeapi_pb";
import { BrowseManifest } from "../../../myTypes";

const host = "http://tanukicloud.com";
const client = new StoreAPIClient(host);

export async function getBrowseManifest() {
  let res = new Promise<BrowseManifest | undefined>((res) => {
    let request = new GetBrowseManifestInbound();
    request.setOriginid("546456");
    request.setUserid("3543456");
    request.setFlagsList(["0"]);

    client.getBrowseManifest(request, (error, resp) => {
      if (error) {
        console.log("get browse manifest error", error);
        res(undefined);
        return;
      } else if (resp) {
        let obj: BrowseManifest = JSON.parse(resp.getManifest());
        if (obj) {
          res(obj);
        } else {
          res(undefined);
        }
        return;
      }
    });
  });
  return res;
  // const getBookRequest = new Get();
  // getBookRequest.setIsbn(60929871);
  // grpc.unary(BookService.GetBook, {
  //   request: getBookRequest,
  //   host: host,
  //   onEnd: (res) => {
  //     const { status, statusMessage, headers, message, trailers } = res;
  //     console.log("getBook.onEnd.status", status, statusMessage);
  //     console.log("getBook.onEnd.headers", headers);
  //     if (status === grpc.Code.OK && message) {
  //       console.log("getBook.onEnd.message", message.toObject());
  //     }
  //     console.log("getBook.onEnd.trailers", trailers);
  //     queryBooks();
  //   },
  // });
}
