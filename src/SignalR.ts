import { HubConnectionBuilder } from "@microsoft/signalr";
import { HttpTransportType } from "@microsoft/signalr";
import {ApiPath} from "./router/PathAPI"

class SignalRConnection {
  connect() {
    return new HubConnectionBuilder()
      .withUrl(`${ApiPath}avatar`, {
        skipNegotiation: true,
        transport: HttpTransportType.WebSockets,
      })
      .build();
  }
}
export default new SignalRConnection();