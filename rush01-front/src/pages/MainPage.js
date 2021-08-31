import React, { useState } from "react";
import styled from "styled-components";
import defaultImg from "../assets/img-default.svg";
import { OverlayProvider, OverlayContainer } from "@react-aria/overlays";
import useToggleDialog from "../hooks/useToggleDialog";
import Dialog from "../components/Dialog/Dialog";
import DialogCloseButton from "../components/Dialog/DialogCloseButton";
import NewRoomForm from "../components/NewRoomForm/NewRoomForm";
import JoinRoomForm from "../components/JoinRoomForm/JoinRoomForm";

function MainPage(props) {
  const [type, setType] = useState("");
  const { state, openButtonProps, openButtonRef } = useToggleDialog();
  return (
    <OverlayProvider>
      <MainPageStyled>
        <Profile>
          {/* src = {props.photo} */}
          <img src={defaultImg} alt="profile" />
          환영합니다 {props.nickname}님
        </Profile>
        <button
          type="button"
          {...openButtonProps}
          ref={openButtonRef}
          onClick={() => setType("join")}
        >
          방 참가
        </button>
        <button
          type="button"
          {...openButtonProps}
          ref={openButtonRef}
          onClick={() => setType("create")}
        >
          방 생성
        </button>
      </MainPageStyled>
      {state.isOpen && (
        <OverlayContainer>
          <Dialog isOpen onClose={state.close} isDimissible>
            <DialogCloseButton onCloseButton={state.close} />
            {type === "join" ? <JoinRoomForm /> : <NewRoomForm />}
          </Dialog>
        </OverlayContainer>
      )}
    </OverlayProvider>
  );
}

export const MainPageStyled = styled.div`
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

export const Profile = styled.div`
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

export default MainPage;
