import { LOAD_ROOMS, LOGIN } from "../_type/socket_type";
import { io } from "socket.io-client";

const socket = io.connect("http://localhost:5000/socket");

export function loadRooms() {
  socket.emit("load rooms");
  socket.on("load rooms", (res) => {
    console.log(`Socket Connected : ${res}`);
  });
  return {
    type: LOAD_ROOMS,
    payload: null,
  };
}

export function socketLogin(requestData) {
  return {
    type: LOGIN,
    payload: null,
  };
}
