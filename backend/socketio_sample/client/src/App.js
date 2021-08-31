import React, { useState, useEffect } from 'react';
import socketIOClient from 'socket.io-client';
import Game from './Game';
import Player from './Player';

const ENDPOINT = 'http://127.0.0.1:4001';
const socket = socketIOClient(ENDPOINT);

function App() {
  const [me, setMyPlayer] = useState(new Player('aaa', 'plaayerOne'));
  const [opponent, setOpponentPlayer] = useState(
    new Player('bbb', 'playerTwo'),
  );
  const [currentGame, setGameStatus] = useState(() => {
    const initialState = new Game(me, opponent, 30);
    initialState.initGame();

    return initialState;
  });
  const [input, setInput] = useState(1);

  const handleGameChange = (e) => {
    e.preventDefault();
    // // if (me.getType() === undefined && opponent.getType() === undefined) {
    // //   setMyPlayer((me.name = 'aaa'), (me.type = 'playerOne'));
    // //   setOpponetPlayer((opponent.name = 'bbb'), (opponent.type = 'playerTwo'));
    // // }
    socket.on('updateGameToClient', (value) => {
      setGameStatus(() => {
        currentGame.potOnTable = value.potOnTable;
      });
    });
    console.log(currentGame.currentTurn);
    return currentGame;
  };

  // useEffect(() => {
  //   socket.on('updateGameToClient', (value) => {
  //     setGameStatus(() => {
  //       currentGame.potOnTable = Number(value.potOnTable);
  //     });
  //   });
  // }, [socket]);

  const handleBetChange = ({ target: { value } }) => {
    setInput(+value);
  };
  const passToServer = { status: '', potOnTable: '', position: '' };
  const handleBetButton = (event) => {
    event.preventDefault();
    if (input >= 1) {
      setInput(1); // input 값 1로 재설정
      setGameStatus(() => {
        currentGame.raiseBet(me, Number(input));
        passToServer.status = 'raise';
        passToServer.potOnTable = currentGame.potOnTable;
        passToServer.position = me.position;
        socket.emit('updateGame', passToServer);
        return currentGame;
      });
    }
  };

  const handleCallButton = (event) => {
    event.preventDefault();
    setInput(input + 1);
    if (!(input === undefined || input.length === 0))
      socket.emit('broadcastTest', input);
    setGameStatus((currentGame.currentTurn = opponent));
  };

  const handleDieButton = (event) => {
    event.preventDefault();
    setInput(input + 1);
    if (!(input === undefined || input.length === 0))
      socket.emit('broadcastTest', input);
  };

  return (
    <>
      <div id="gameInfo" onChange={handleGameChange}>
        {/* current turn name: {currentGame.currentTurn.name} */}
        <br />
        pot: {currentGame.potOnTable}
        <br />
        {currentGame.playerOne.name} <br />
        {currentGame.playerTwo.name}
      </div>
      <div>
        <form>
          <input
            type="number"
            name="input"
            value={input}
            onChange={handleBetChange}
          />
          <br />
          <button type="submit" name="bet" onClick={handleBetButton}>
            베팅
          </button>
          <button type="submit" name="call" onClick={handleCallButton}>
            콜
          </button>
          <button type="submit" name="call" onClick={handleDieButton}>
            다이
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
