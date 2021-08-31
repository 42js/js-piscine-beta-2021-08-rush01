import { combineReducers } from "redux";
import user from "./user_reducer";
import socket from "./socket_reducer";

const rootReducer = combineReducers({
  user,
  socket,
});

export default rootReducer;
