const operandA = Math.floor(Math.random() * 20) + 1;
const operandB = Math.floor(Math.random() * 20) + 1;
const signs = ['+', '-', '*', '/'];
const sign = signs[Math.floor(Math.random() * signs.length)];
let reply;
switch (sign) {
  case '+':
    reply = operandA + operandB;
    break;
  case '-':
    reply = operandA - operandB;
    break;
  case '*':
    reply = operandA * operandB;
    break;
  case '/':
    reply = operandA / operandB;
    break;
}
console.log(`Question: ${operandA} ${sign} ${operandB} = ?`);
console.log(`Correct answer: ${sign === '/' ? reply.toFixed(2) : reply}`);
