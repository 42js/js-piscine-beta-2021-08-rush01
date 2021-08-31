import { LOAD_ROOMS, LOGIN } from "../_type/socket_type";

const roomState = {
  rooms: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = roomState, action) {
  switch (action.type) {
    case LOAD_ROOMS:
      return { ...state, loadRooms: action.payload };
      // eslint-disable-next-line no-unreachable
      break;
    case LOGIN:
      return { ...state, register: action.payload };
      // eslint-disable-next-line no-unreachable
      break;
    default:
      return state;
  }
}
