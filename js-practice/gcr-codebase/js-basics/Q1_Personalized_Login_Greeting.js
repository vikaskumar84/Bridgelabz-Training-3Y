const loginName = 'Dev';
const hourNow = new Date().getHours();
if (hourNow < 12) {
  console.log(`Good Morning ${loginName}!`);
} else if (hourNow <= 17) {
  console.log(`Good Afternoon ${loginName}!`);
} else {
  console.log(`Good Evening ${loginName}!`);
}
