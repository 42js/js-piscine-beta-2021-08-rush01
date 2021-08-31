import styled from "styled-components";

export const NewRoomFormStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 70%;
  height: 80%;
  font-family: 'DOSGothic';
  .description {
      text-align: center;
      color: #555;
  }
  h2 {
    margin: 0 0 25px 0;
    text-align: center;
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
      background-color: #653184;
      color: #fff;
  }
`;

export const FormItemBox = styled.div`
  margin: 30px 0 10px 0;
`;

export const FormItem = styled.div`
  margin-bottom: 15px;
  border: 1px solid grey;
  border-radius: 5px;
  padding: 10px;
  input {
    width: 50px;
    border-bottom: 1px dotted #555;
    margin-right: 10px;
    font-size: 18px;
    color: #653184;
    letter-spacing: 0.05em;
  }
`;

FormItem.Title = styled.label`
  display: inline-block;
  width: 160px;
  margin-right: 20px;
`;
FormItem.Input = styled.input``;
