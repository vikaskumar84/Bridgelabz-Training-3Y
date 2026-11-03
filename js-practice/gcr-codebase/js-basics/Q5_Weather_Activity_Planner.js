const degrees = 24;
const rainy = false;
const gust = 10;
if (rainy) {
  console.log('Stay indoors with hot coffee.');
} else if (degrees > 35) {
  console.log('Go swimming.');
} else if (degrees < 15 && gust > 20) {
  console.log('Too cold and windy — stay home.');
} else if ((!rainy && degrees >= 15) || gust <= 20) {
  console.log('Perfect day for a walk.');
} else {
  console.log('Check the weather before going out.');
}
