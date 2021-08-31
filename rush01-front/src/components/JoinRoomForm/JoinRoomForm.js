import React from "react";
import JoinRoomFormStyled from "./JoinRoomForm.styles";

function JoinRoomForm() {
  return (
    <JoinRoomFormStyled>
      <h2>방 참가하기</h2>
      <label>방 코드 입력</label>
      <input type="text" maxLength="4" placeholder="0000"></input>
      <div className="description">4자리 숫자를 입력하세요. </div>
      <button>방 참가하기</button>
    </JoinRoomFormStyled>
  );
}

export default JoinRoomForm;
