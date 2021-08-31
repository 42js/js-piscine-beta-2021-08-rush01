import React from "react";
import styled from "styled-components";
import defaultImg from "../assets/img-default.svg";

const MainPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    width: 180px;
    text-align: center;
    border: 1.5px solid #ddd;
    border-radius: 20px;
    padding: 11px 0;
    font-weight: bold;
    margin-top: 35px;
    :hover {
      background-color: #ddd;
      color: black;
    }
  }
`;

const Profile = styled.div`
  img {
    top: 60px;
    left: 5px;
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
  display: flex;
  flex-align: center;
  justify-content: center;
  align-items: center;
`;

function MainPage(props) {
  return (
    <MainPageStyled>
      <Profile>
        {/* src = {props.photo} */}
        <img src={defaultImg} alt="profile" />
        환영합니다 nickname{props.nickname}님
      </Profile>
      <button type="button">방 참가</button>
      <button type="button">방 생성</button>
    </MainPageStyled>
  );
}

export default MainPage;
