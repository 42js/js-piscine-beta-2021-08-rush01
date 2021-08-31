import React from "react";
import {
  ButtonBox,
  InputBox,
  RegisterContainer,
  RegisterForm,
} from "./RegisterComponents";

const RegisterPage = () => {
  const logoStyle = {
    fontFamily: "ZCOOL KuaiLe, cursive",
    fontSize: "50px",
    textShadow: "2px 2px 2px black",
    color: "#742020",
  };
  return (
    <RegisterContainer>
      <RegisterForm>
        <div style={{ textAlign: "center" }}>
          <h1 style={logoStyle}>Indian Pocker</h1>
          <h1>추가 정보 입력</h1>
        </div>

        <InputBox placeholder="닉네임을 입력해주세요" />
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h3 style={{ width: "78%" }}>프로필 이미지를 선택해주세요</h3>
          <InputBox type="file" placeholder="프로필 이미지를 선택해주세요" />
        </div>
        <ButtonBox>Register</ButtonBox>
      </RegisterForm>
    </RegisterContainer>
  );
};

export default RegisterPage;
