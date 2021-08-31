import Player from './Player.js';
import Game from './Game.js';
// test code
const userOne = new Player('aaa', 'type1');
const userTwo = new Player('bbb', 'type2');
const time = 30; // 초 단위

const gameTest = new Game(userOne, userTwo, time);

let winner;
console.log(gameTest.deck);
gameTest.initGame();
console.log(gameTest.playerOne.getCardOnHand());
console.log(gameTest.playerTwo.getCardOnHand());
console.log(gameTest.deck);
gameTest.setWinner((winner = gameTest.checkWinner()));

if (winner === userOne)
  console.log('===============winner is:aaaaaaaa================');
if (winner === userTwo)
  console.log('===============winner is:bbbbbbbb================');
winner = null;

gameTest.initGame();
console.log(gameTest.playerOne.getCardOnHand());
console.log(gameTest.playerTwo.getCardOnHand());
console.log(gameTest.deck);

// raiseBet 테스트용
if (gameTest.lastWinner === gameTest.playerOne) {
  gameTest.raiseBet(gameTest.playerOne, 10);
} else gameTest.raiseBet(gameTest.playerTwo, 10);
gameTest.setWinner(gameTest.checkWinner());

gameTest.initGame();
console.log(gameTest.playerOne.getCardOnHand());
console.log(gameTest.playerTwo.getCardOnHand());
console.log(gameTest.deck);
gameTest.setWinner(gameTest.checkWinner());

gameTest.initGame();

// test code
