import styled from "styled-components";

export const DialogStyled = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  outline: 0;
`;

DialogStyled.Box = styled.div`
  width: 40%;
  height: 50%;
  min-width: 500px;
  min-height: 600px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  border-radius: 2rem;
  padding: 7rem 8rem;
  box-sizing: border-box;
`;
