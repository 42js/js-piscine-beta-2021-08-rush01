import React from "react";
import { NewRoomFormStyled, FormItemBox, FormItem } from "./NewRoomForm.styles";

function NewRoomForm() {
  return (
    <NewRoomFormStyled>
      <h2>방 생성</h2>
      <FormItemBox>
        <FormItem>
          <FormItem.Title>턴 시간</FormItem.Title>
          <FormItem.Input type="number" />초
        </FormItem>
        <FormItem>
          <FormItem.Title>플레이어 당 칩 갯수</FormItem.Title>
          <FormItem.Input type="number" />개
        </FormItem>
      </FormItemBox>
      <div className="description">턴 시간 10~30초, 칩 갯수 30~50개 추천</div>
      <button type="button">방 생성하기</button>
    </NewRoomFormStyled>
  );
}

export default NewRoomForm;
