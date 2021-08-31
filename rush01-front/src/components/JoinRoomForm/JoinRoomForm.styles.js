import styled from "styled-components";

const JoinRoomFormStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  height: 80%;
  font-family: "DOSGothic";
  .description {
    text-align: center;
    color: #555;
  }
  h2 {
    margin: 25px 0 50px 0;
    text-align: center;
  }
  label {
    font-size: 20px;
    font-weight: 500;
    background-color: #ddd;
    padding: 5px;
  }
  input {
    margin: 25px 0 15px 0;
    width: 60%;
    font-size: 30px;
    letter-spacing: 0.2em;
    border-bottom: 1px dashed grey;
    text-align: center;
    color: #653184;
  }
  button {
    width: 150px;
    padding: 15px 0;
    margin-top: 45px;
    text-align: center;
    border: 1px solid #ddd;
    border-radius: 25px;
    letter-spacing: 0.09em;
    :hover {
      background-color: #222;
      color: #fff;
  }
`;

export default JoinRoomFormStyled;
