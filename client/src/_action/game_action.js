import { ROOM_STATE, ROOM_INFO } from "../_type/user_type";
const io = require("socket.io-client");

const socket = io.connect("http://localhost:5000");

export function roomInfo() {
  socket.emit("room_info");
  socket.on("room_info", (data) => {
    return {
      type: ROOM_INFO,
      payload: data,
    };
  });
}

export function roomState() {
  const ret = {};

  return {
    type: ROOM_STATE,
    payload: ret,
  };
}
