const outcomes = [];
for (let num = 1; num <= 30; num++) {
  let gradeBand;
  if (num % 3 === 0 && num % 5 === 0) {
    gradeBand = 'FizzBuzz';
  } else if (num % 2 === 0) {
    gradeBand = 'Even';
  } else {
    gradeBand = 'Odd';
  }
  outcomes.push({
    number: num,
    classification: gradeBand,
  });
}
console.table(outcomes);
