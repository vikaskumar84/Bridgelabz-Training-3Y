const marksList = Array.from(
  {
    length: 8,
  },
  () => Math.floor(Math.random() * 71) + 30,
);
const topScore = Math.max(...marksList);
const bottomScore = Math.min(...marksList);
const scoreSum = marksList.reduce((addTotal, marksGot) => addTotal + marksGot, 0);
const meanScore = scoreSum / marksList.length;
const cleared = marksList.filter((score) => score >= 50).length;
const curvedScores = marksList.map((score) => score);
console.log(`Scores: ${curvedScores.join(', ')}`);
console.log(`Highest score: ${topScore}`);
console.log(`Lowest score: ${bottomScore}`);
console.log(`Average score: ${meanScore.toFixed(2)}`);
console.log(`Students passed (score >= 50): ${cleared}`);
