'use strict';
class InvalidOperationError extends Error {
  constructor(action) {
    super(`Unsupported operation: ${action}`);
    this.name = 'InvalidOperationError';
  }
}
class CalculationError extends Error {
  constructor(text) {
    super(text);
    this.name = 'CalculationError';
  }
}
const operations = ['add', 'divide', 'power', 'root', 'subtract'];
const num1 = 25;
const num2 = 0;
function calculate(operation, a, b) {
  switch (operation) {
    case 'add':
      return a + b;
    case 'divide':
      if (b === 0) throw new CalculationError('Cannot divide by zero.');
      return a / b;
    case 'power':
      return a ** b;
    case 'root':
      if (a < 0)
        throw new CalculationError(
          'Cannot calculate the real square root of a negative number.',
        );
      return Math.sqrt(a);
    case 'subtract':
      return a - b;
    default:
      throw new InvalidOperationError(operation);
  }
}
console.log('=== Smart Calculator Summary ===');
for (const operation of operations) {
  try {
    const outcome = calculate(operation, num1, num2);
    console.log(`${operation}(${num1}, ${num2}) = ${outcome}`);
  } catch (err) {
    console.log(`${operation}: ${err.name} - ${err.message}`);
  }
}
try {
  console.log('root(-9) =', calculate('root', -9, 0));
} catch (error) {
  console.log(`root test: ${error.name} - ${error.message}`);
}
try {
  console.log('multiply =', calculate('multiply', num1, num2));
} catch (error) {
  console.log(`unknown operation: ${error.name} - ${error.message}`);
}
