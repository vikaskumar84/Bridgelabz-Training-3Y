function showEndMessage() {
  console.log('Welcome to the course!');
}
function greetUser(fullName, callback) {
  console.log(`Hello ${fullName}`);
  callback();
}
greetUser('Dev', showEndMessage);
