const ex = 16.75;
const rounded = Math.round(ex);
const rootValue = Math.sqrt(ex);
const cube = Math.pow(ex, 3);
const dice = Math.floor(Math.random() * 41) + 10;
console.log(`Math Utility Dashboard
Input: ${ex}
Rounded value: ${rounded}
Square root: ${rootValue.toFixed(2)}
Power (x³): ${cube.toFixed(2)}
Random number (10–50): ${dice}`);
