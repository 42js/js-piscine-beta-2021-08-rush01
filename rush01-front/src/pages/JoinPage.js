import React, { useState } from "react";
import styled from "styled-components";
import defaultImg from "../assets/img-default.svg";

const JoinPageStyled = styled.div`
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

const JoinForm = styled.form`
  width: 50vw;
  min-width: 400px;
  max-width: 600px;
  margin-top: 70px;
`;

JoinForm.Item = styled.div`
  display: flex;
  margin-bottom: 20px;
  input {
    width: 100%;
    height: 35px;
    border: 1px solid #888;
    padding-left: 10px;
    box-sizing: border-box;
    border-radius: 5px;
  }
  input[type="file"] {
    display: none;
  }
`;

JoinForm.Item.Title = styled.div`
  width: 130px;
  line-height: 30px;
`;

JoinForm.Item.Field = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: calc(100% - 130px);
  position: relative;
  .textview {
    width: calc(100% - 110px);
  }
  .file_button {
    margin-left: 10px;
    display: inline-block;
    border: 1px solid #ddd;
    width: 100px;
    height: 35px;
    box-sizing: border-box;
    text-align: center;
    line-height: 33px;
    border-radius: 5px;
    cursor: pointer;
  }
`;

JoinForm.Preview = styled.div`
  border: 1px dashed #aaa;
  border-radius: 5px;
  padding: 30px;
  margin: 0 300px 20px 0;
  img {
    top: 60px;
    left: 5px;
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
`;

function JoinPage() {
  const [imgTitle, setImgTitle] = useState("기본 이미지");
  const [imgPreview, setImgPreview] = useState(defaultImg);
  const [imgFile, setImgFile] = useState(null);

  const handleFileInputChange = (e) => {
    setImgTitle(e.target.files[0].name);
    setImgFile(e.target.files[0]);
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onloadend = () => {
      setImgPreview(reader.result);
    };
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
            ></input>
          </JoinForm.Item.Field>
        </JoinForm.Item>
        <JoinForm.Item>
          <JoinForm.Item.Title>
            <label>프로필 이미지</label>
          </JoinForm.Item.Title>
          <JoinForm.Item.Field>
            <JoinForm.Preview>
              <img src={imgPreview} alt="profile" />
            </JoinForm.Preview>
            <input type="text" value={imgTitle} disabled className="textview" />
            <label htmlFor="file" className="file_button">
              파일 찾기
              <input
                type="file"
                id="file"
                name="profile"
                onChange={handleFileInputChange}
              ></input>
            </label>
          </JoinForm.Item.Field>
        </JoinForm.Item>
      </JoinForm>
      <button type="button">회원가입</button>
    </JoinPageStyled>
  );
}

export default JoinPage;
