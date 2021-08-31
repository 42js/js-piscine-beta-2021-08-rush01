import styled from "styled-components";

export const GamePageStyled = styled.div`
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

export const PlayerCards = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0 30px;
`;

PlayerCards.Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

PlayerCards.Card = styled.div`
  min-width: 200px;
  min-height: 300px;
  justify-content: center;
  align-items: center;
  background: #eee;
  border-radius: 20px;
`;
