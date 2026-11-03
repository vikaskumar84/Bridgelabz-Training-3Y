function applyOperation(numbers, action) {
  return numbers.map(action);
}
const nums = [1, 2, 3, 4];
const twiceValues = applyOperation(nums, (num) => num * 2);
const squares = applyOperation(nums, (number) => number * number);
console.log('Doubled:', twiceValues);
console.log('Squared:', squares);
