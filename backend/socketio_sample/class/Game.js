import Player from './Player.js';

function getCompareValue(cardValue) {
  if (cardValue >= 1 && cardValue <= 10) {
    return cardValue;
  }
  return cardValue % 10 === 0 ? 10 : cardValue % 10;
}

class Game {
  constructor(pOne, pTwo) {
    this.deck = Array.from({ length: 40 }, (v, i) => i + 1);
    this.playerOne = pOne;
    this.playerTwo = pTwo;
    this.lastWinner = '';
    this.potOnTable = 0;
    this.currentTurn = '';
    this.wasDrawGame = false;
  }

  // todo: initGame 만들기

  setPlayerTurn() {
    if (this.lastWinner === '') {
      if (Math.random() < 0.5) {
        this.currentTurn = this.playerOne;
      } else {
        this.currentTurn = this.playerTwo;
      }
    } else if (this.lastWinner === this.playerOne) {
      this.currentTurn = this.playerOne;
    } else {
      this.currentTurn = this.playerTwo;
    }
  }

  shuffleDeck() {
    for (let i = 0; i < this.deck.length; i += 1) {
      const j = Math.floor(Math.random() * (i + 1));
      const x = this.deck[i];
      this.deck[i] = this.deck[j];
      this.deck[j] = x;
    }
  }

  setWinner(winner) {
    if (winner === undefined) {
      this.lastWinner = '';
      console.log('Draw Game');
    } else {
      this.lastWinner = winner;
      this.lastWinner.addToken(this.potOnTable);
      this.potOnTable = 0;
      console.log(`Winner is ${this.lastWinner.name}`);
      console.log(
        `${this.lastWinner.name} current token: ${this.lastWinner.getToken()}`,
      );
    }
  }

  handCard() {
    let cardToGive;
    cardToGive = this.deck.pop();
    this.playerOne.setCardOnHand(cardToGive);
    cardToGive = this.deck.pop();
    this.playerTwo.setCardOnHand(cardToGive);
  }

  initGame() {
    if (this.deck.length === 0)
      this.deck = Array.from({ length: 40 }, (v, i) => i + 1);
    this.setPlayerTurn();
    this.shuffleDeck();
    this.handCard();

    if (this.lastWinner === '') {
      this.playerOne.setToken(30);
      this.playerTwo.setToken(30);
    }

    if (this.wasDrawGame === false) {
      this.potOnTable += 2;
      this.playerOne.subtractToken(1);
      this.playerTwo.subtractToken(1);
    }

    if (this.currentTurn === this.playerOne) {
      console.log('Player 1 goes first');
    } else console.log('Player 2 goes first');

    console.log(`Player 1 current token: ${this.playerOne.getToken()}`);
    console.log(`Player 2 current token: ${this.playerTwo.getToken()}`);
  }

  checkWinner() {
    const playerOneValue = getCompareValue(this.playerOne.getCardOnHand());
    const playerTwoValue = getCompareValue(this.playerTwo.getCardOnHand());

    console.log(`player one value [${playerOneValue}]`);
    console.log(`player two value [${playerTwoValue}]`);

    if (playerOneValue > playerTwoValue) return this.playerOne;
    if (playerOneValue < playerTwoValue) return this.playerTwo;
    return undefined;
  }

  raiseBet(player, token) {
    player.subtractToken(token);
    this.potOnTable += token;
  }
}

// test code
const userOne = new Player('aaa', 'type1');
const userTwo = new Player('bbb', 'type2');
const gameTest = new Game(userOne, userTwo);

let winner;
console.log(gameTest.deck);
gameTest.initGame();
console.log(gameTest.playerOne.getCardOnHand());
console.log(gameTest.playerTwo.getCardOnHand());
console.log(gameTest.deck);
gameTest.setWinner(gameTest.checkWinner());

if (winner === userOne) console.log('===============aaaaaaaa================');
if (winner === userTwo) console.log('===============bbbbbbbb================');
gameTest.initGame();
console.log(gameTest.playerOne.getCardOnHand());
console.log(gameTest.playerTwo.getCardOnHand());
console.log(gameTest.deck);

gameTest.setWinner(gameTest.checkWinner());

gameTest.initGame();
console.log(gameTest.playerOne.getCardOnHand());
console.log(gameTest.playerTwo.getCardOnHand());
console.log(gameTest.deck);
gameTest.setWinner(gameTest.checkWinner());

gameTest.initGame();

// test code
