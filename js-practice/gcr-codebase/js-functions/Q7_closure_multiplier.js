function makeMultiplier(factor) {
  return function (num) {
    return num * factor;
  };
}
const thrice = makeMultiplier(3);
console.log(thrice(5));
