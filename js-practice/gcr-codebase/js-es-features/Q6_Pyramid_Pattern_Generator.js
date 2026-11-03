'use strict';
const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question('Number of pyramid rows (default 5): ', (reply) => {
  const parsed = Number(reply);
  const rows = reply.trim() === '' ? 5 : parsed;
  if (!Number.isInteger(rows) || rows < 1 || rows > 50) {
    console.log('Please enter a whole number from 1 to 50.');
  } else {
    console.log('=== Pyramid ===');
    for (let idx = 1; idx <= rows; idx++) {
      let line = '';
      for (let j = 1; j <= idx; j++) line += '* ';
      console.log(line.trimEnd());
    }
  }
  rl.close();
});
