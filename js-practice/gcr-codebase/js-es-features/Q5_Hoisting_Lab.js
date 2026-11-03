'use strict';
var marksGot = 50;
let status = 'ready';
function announce() {
  console.log('Game started');
}
function startGame() {
  console.log(status);
}
console.log('Fixed sequence:');
console.log(marksGot);
announce();
startGame();
const announceArrow = () => console.log('Game started (arrow)');
const startGameArrow = () => console.log(status);
console.log('Arrow-function version:');
announceArrow();
startGameArrow();
