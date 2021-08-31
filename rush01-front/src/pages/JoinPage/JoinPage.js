import React from "react";
import { JoinPageStyled, JoinForm } from "./JoinPage.styles";
import useInput from "../../hooks/useInput";
import useImage from "../../hooks/useImage";

function JoinPage({ handleJoinButtonClick }) {
  const nickname = useInput("");
  const profile = useImage();

  const handleClick = () => {
    handleJoinButtonClick(nickname.value);
  };

  return (
    <JoinPageStyled>
      <JoinForm>
        <JoinForm.Item>
          <JoinForm.Item.Title>
            <label htmlFor="nickname">닉네임</label>
          </JoinForm.Item.Title>
          <JoinForm.Item.Field>
            <input
              type="text"
              name="nickname"
              placeholder="닉네임을 입력해주세요. (2글자 이상)"
              {...nickname}
            ></input>
          </JoinForm.Item.Field>
        </JoinForm.Item>
        <JoinForm.Item>
          <JoinForm.Item.Title>
            <label>프로필 이미지</label>
          </JoinForm.Item.Title>
          <JoinForm.Item.Field>
            <JoinForm.Preview>
              <img src={profile.imgPreview} alt="profile" />
            </JoinForm.Preview>
            <input
              type="text"
              value={profile.imgTitle}
              disabled
              className="textview"
            />
            <label htmlFor="file" className="file_button">
              파일 찾기
              <input
                type="file"
                id="file"
                name="profile"
                onChange={profile.onChange}
              ></input>
            </label>
          </JoinForm.Item.Field>
        </JoinForm.Item>
      </JoinForm>
      <button type="button" onClick={handleClick}>
        회원가입
      </button>
    </JoinPageStyled>
  );
}

export default JoinPage;
