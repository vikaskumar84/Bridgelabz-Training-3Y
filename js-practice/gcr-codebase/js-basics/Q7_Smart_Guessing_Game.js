const hiddenNumber = Math.floor(Math.random() * 50) + 1;
const guessInput = 25;
console.log(`Your guess: ${guessInput}`);
console.log(`Secret number (for testing): ${hiddenNumber}`);
if (guessInput === hiddenNumber) {
  console.log('Correct guess!');
} else {
  const gap = Math.abs(guessInput - hiddenNumber);
  if (gap <= 3) {
    console.log('Very close!');
  } else if (guessInput > hiddenNumber) {
    console.log('Too high');
  } else {
    console.log('Too low');
  }
}
