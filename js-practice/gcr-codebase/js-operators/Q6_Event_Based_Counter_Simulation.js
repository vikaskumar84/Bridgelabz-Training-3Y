let tally = 0;
function showCount() {
  function logCount(runningCount) {
    console.log(`Current count: ${runningCount}`);
  }
  logCount(tally);
}
function increment() {
  tally++;
  showCount();
}
function decrement() {
  tally--;
  showCount();
}
increment();
increment();
decrement();
