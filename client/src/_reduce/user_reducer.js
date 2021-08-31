import {
  LOGIN_USER,
  REGIST_USER,
  AUTH_USER,
  ROOM_STATE,
  ROOM_INFO,
} from "../_type/user_type";

const userState = {
  userData: {
    nickname: "oohyo",
    username: "nkim",
    profile: null,
    email: "nkim@student.42.kr",
  },
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = userState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loginSuccess: action.payload };
      // eslint-disable-next-line no-unreachable
      break;
    case REGIST_USER:
      return { ...state, register: action.payload };
      // eslint-disable-next-line no-unreachable
      break;
    case AUTH_USER:
      return { ...state, userData: action.payload };
      // eslint-disable-next-line no-unreachable
      break;
    case ROOM_STATE:
      return { ...state, roomState: action.payload };
      // eslint-disable-next-line no-unreachable
      break;
    case ROOM_INFO:
      return { ...state, roomInfo: action.payload };
      // eslint-disable-next-line no-unreachable
      break;
    default:
      return state;
  }
}
