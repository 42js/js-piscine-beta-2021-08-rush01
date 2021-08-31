import styled from "styled-components";

export const GamePageStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  align-items: center;
  .vs {
    font-size: 100px;
    color: #9073ba;
  }
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
  width: 80%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

PlayerCards.Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  label {
    font-size: 20px;
  }
`;

PlayerCards.Card = styled.div`
  width: 150px;
  height: 200px;
  justify-content: center;
  align-items: center;
  background: #eee;
  border-radius: 20px;
`;

export const DealingSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  width: 80%;
  height: 220px;
  margin: 60px 0 0 0;
  border: 1px dotted #aaa;
  border-radius: 20px;
  padding: 30px;
  padding-top: 40px;
  box-sizing: border-box;
  button {
    width: 100px;
  }
`;

DealingSection.Item = styled.div`
  button {
    margin-right: 15px;
  }
  margin-bottom: 15px;
`;
