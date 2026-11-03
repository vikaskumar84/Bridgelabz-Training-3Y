'use strict';
function outer() {
  console.log('outer count before declaration:', tally);
  var tally = 5;
  function inner() {
    console.log('inner count before declaration:', count);
    var count = 10;
    console.log('inner count after declaration:', count);
  }
  inner();
  console.log('outer count after inner:', tally);
}
outer();
function outerArrowDemo() {
  var count = 5;
  const inner = () => {
    console.log('arrow inner sees outer count:', count);
  };
  inner();
}
outerArrowDemo();
