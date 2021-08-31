import React from "react";
import { GamePageStyled, PlayerCards, DealingSection } from "./GamePage.styles";

function GamePage(props) {
  return (
    <GamePageStyled>
      <PlayerCards>
        <PlayerCards.Box>
          <label> My </label>
          <PlayerCards.Card></PlayerCards.Card>
        </PlayerCards.Box>
        <div className="vs"> VS </div>
        <PlayerCards.Box>
          <label> Yours </label>
          <PlayerCards.Card></PlayerCards.Card>
        </PlayerCards.Box>
      </PlayerCards>
      <DealingSection>
        <DealingSection.Item>현재 칩 갯수: </DealingSection.Item>
        <DealingSection.Item>남은 턴 시간: </DealingSection.Item>
        <DealingSection.Item>
          <button type="button">+1</button>
          <button type="button">-1</button>
        </DealingSection.Item>
      </DealingSection>
    </GamePageStyled>
  );
}

export default GamePage;
