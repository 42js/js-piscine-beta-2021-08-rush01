import React from "react";
import { GamePageStyled, PlayerCards } from "./GamePage.styles";

function GamePage(props) {
  return (
    <GamePageStyled>
      <PlayerCards>
        <PlayerCards.Box>
          <label> My </label>
          <PlayerCards.Card></PlayerCards.Card>
        </PlayerCards.Box>
        <div> VS </div>
        <PlayerCards.Box>
          <label> Yours </label>
          <PlayerCards.Card></PlayerCards.Card>
        </PlayerCards.Box>
      </PlayerCards>
    </GamePageStyled>
  );
}

export default GamePage;
