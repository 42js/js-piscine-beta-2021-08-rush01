import React from "react";
import { NewRoomFormStyled, FormItemBox, FormItem } from "./NewRoomForm.styles";
import useInput from "../../hooks/useInput";

function NewRoomForm() {
  const turnTime = useInput("10");
  const chips = useInput("30");

  return (
    <NewRoomFormStyled>
      <h2>방 생성</h2>
      <FormItemBox>
        <FormItem>
          <FormItem.Title>턴 시간</FormItem.Title>
          <FormItem.Input
            type="number"
            min="10"
            max="60"
            step="5"
            {...turnTime}
          />
          초
        </FormItem>
        <FormItem>
          <FormItem.Title>플레이어 당 칩 갯수</FormItem.Title>
          <FormItem.Input
            type="number"
            min="10"
            max="100"
            step="5"
            {...chips}
          />
          개
        </FormItem>
      </FormItemBox>
      <div className="description">턴 시간 10~30초, 칩 갯수 30~50개 추천</div>
      <button type="button">방 생성하기</button>
    </NewRoomFormStyled>
  );
}

export default NewRoomForm;
