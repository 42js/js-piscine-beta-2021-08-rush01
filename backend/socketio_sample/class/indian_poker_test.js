import Player from './Player.js';
import Game from './Game.js';
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
