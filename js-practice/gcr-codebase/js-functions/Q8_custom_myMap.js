Array.prototype.myMap = function (callback, thisArg) {
  if (this == null) {
    throw new TypeError('myMap called on null or undefined');
  }
  if (typeof callback !== 'function') {
    throw new TypeError('callback must be a function');
  }
  const list = Object(this);
  const outcome = new Array(list.length);
  for (let pos = 0; pos < list.length; pos++) {
    if (pos in list) {
      outcome[pos] = callback.call(thisArg, list[pos], pos, list);
    }
  }
  return outcome;
};
console.log([1, 2, 3].myMap((num) => num * 2));
