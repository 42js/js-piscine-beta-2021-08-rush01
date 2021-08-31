import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../_action/user_action";
import {
  LoginImg,
  LoginButton,
  LoginWrapper,
  LoginForm,
} from "./LoginComponents";

const LoginPage = () => {
  const dispatch = useDispatch();

  const onLogin = useCallback(
    (e) => {
      e.preventDefault();
      console.log("login");
      dispatch(loginUser()).then((res) => {
        console.log(res);
      });
    },
    [dispatch]
  );
  return (
    <LoginWrapper>
      <LoginForm>
        <LoginImg>Indian Pocker</LoginImg>
        <LoginButton onClick={onLogin}>LOGIN</LoginButton>
      </LoginForm>
    </LoginWrapper>
  );
};

export default LoginPage;
