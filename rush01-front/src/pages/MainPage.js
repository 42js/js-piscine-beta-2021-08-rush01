import React, { useState } from "react";
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

const UserProfile = styled.div``;

const Profile = styled.div`
  display: flex;
  img {
    top: 60px;
    left: 5px;
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
`;

const Nickname = styled.div`
  display: flex;
`;

function MainPage() {
  const [imgPreview, setImgPreview] = useState(defaultImg);

  return (
    <MainPageStyled>
      <UserProfile>
        <Profile>
          <img src={imgPreview} alt="profile" />
          <Nickname> 환영합니다 </Nickname>
        </Profile>
      </UserProfile>
      <button type="button">방 참가</button>
      <button type="button">방 생성</button>
    </MainPageStyled>
  );
}

export default MainPage;
