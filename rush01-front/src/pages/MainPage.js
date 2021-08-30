import React, { useState } from "react";
import styled from "styled-components";
import defaultImg from "../assets/img-default.svg";

const MainPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;

  button {
    width: 100px;
    text-align: center;
    border: 1px solid #343a3f;
    border-radius: 20px;
    padding: 9px 10px;
    font-weight: 600;
    margin-top: 35px;
    :hover {
      background-color: #343a3f;
      color: #fff;
    }
  }
`;

const UserProfile = styled.div``;

function MainPage() {
  return (
    <MainPageStyled>
      <UserProfile>닉네임</UserProfile>
      <button type="button">방 참가</button>
      <button type="button">방 생성</button>
    </MainPageStyled>
  );
}

export default MainPage;
