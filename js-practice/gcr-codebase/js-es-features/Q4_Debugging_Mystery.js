'use strict';
function showBrokenMessage() {
  try {
    greeting = 'Welcome';
    console.log(greeting);
  } catch (err) {
    console.log(`Expected error: ${err.name} - ${err.message}`);
  }
}
showBrokenMessage();
function showMessage() {
  const greeting = 'Welcome';
  console.log(greeting);
}
showMessage();
