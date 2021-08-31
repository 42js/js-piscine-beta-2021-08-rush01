import "../../../style/font.css";
import styled from "styled-components";
import { darken, lighten } from "polished";

export const LoginWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
`;

export const LoginForm = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 50%;
  height: 70%;
  margin-bottom: 100px;
`;

export const LoginImg = styled.div`
  text-align: center;
  width: 700px;
  font-family: "ZCOOL KuaiLe", cursive;
  font-size: 100px;
  color: white;
  text-shadow: 2px 2px 2px gray;
`;
// text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;

export const LoginButton = styled.div`
  padding: 12px;
  border-radius: 16px;
  border: none;
  width: 78%;
  outline: none;
  font-size: 25px;
  text-align: center;
  box-sizing: border-box;
  background: black;
  color: white;
  padding: 10px 0;
  margin: 50px 0;
  font-family: "Noto Sans KR", sans-serif;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.07);
  &:hover {
    background: ${lighten(0.2, "black")};
    cursor: pointer;
  }
  &:active {
    background: ${darken(0.1, "black")};
    cursor: pointer;
  }
`;
