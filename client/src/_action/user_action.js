import { LOGIN_USER, REGIST_USER, AUTH_USER } from "../_type/user_type";
import axios from "axios";

export function loginUser() {
  const res = axios("/login", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "http://localhost:5000",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",
      "Access-Control-Allow-Headers": "X-Requested-With,content-type",
      "Access-Control-Allow-Credentials": true,
    },
    withCredentials: true,
    data: undefined,
  }).then((res) => res.data);

  return {
    type: LOGIN_USER,
    payload: res,
  };
}

export function registUser(requestData) {
  const res = axios
    .post("/register", requestData)
    .then((res) => res.data)
    .catch((err) => console.log(err));

  return {
    type: REGIST_USER,
    payload: res,
  };
}

export function auth() {
  const res = axios.get("/login/authResult").then((res) => res.data);
  return {
    type: AUTH_USER,
    payload: res,
  };
}
