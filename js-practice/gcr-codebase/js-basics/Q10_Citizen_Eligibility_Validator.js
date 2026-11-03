const years = 22;
const citizenFlag = true;
if (citizenFlag) {
  if (years >= 21) {
    console.log('Eligible for all services.');
  } else if (years >= 18) {
    console.log('Eligible to vote only.');
  } else {
    console.log('Not eligible yet.');
  }
} else {
  if (years >= 18) {
    console.log('Only age criteria met.');
  } else {
    console.log('Not eligible yet.');
  }
}
