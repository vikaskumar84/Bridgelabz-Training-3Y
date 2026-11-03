const allPoints = [88, 91, 79, 86, 90];
const markSum = allPoints.reduce((addTotal, points) => addTotal + points, 0);
const meanValue = markSum / allPoints.length;
const share = (markSum / (allPoints.length * 100)) * 100;
const anyFailed = allPoints.some((mark) => mark < 35);
console.log(`Average: ${meanValue.toFixed(2)}`);
console.log(`Percentage: ${share.toFixed(2)}%`);
if (anyFailed) {
  console.log('Detained');
} else if (share >= 85) {
  console.log('Promoted with Distinction');
} else if (share >= 50) {
  console.log('Promoted');
} else {
  console.log('Detained');
}
