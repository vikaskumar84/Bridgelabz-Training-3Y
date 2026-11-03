'use strict';
const transactions = [
  {
    id: 1,
    amount: 2000,
  },
  {
    id: 2,
    amount: -500,
  },
  {
    id: 3,
  },
  null,
];
const validTransactions = [];
const invalidTransactions = [];
transactions.forEach((transaction, pos) => {
  try {
    if (transaction === null) throw new TypeError('Null transaction entry');
    if (transaction.id === undefined || transaction.amount === undefined) {
      throw new ReferenceError('Missing transaction id or amount');
    }
    if (transaction.amount < 0) throw new RangeError('Negative transaction amount');
    validTransactions.push(transaction);
    console.log(`Transaction ${pos + 1}: VALID`, transaction);
  } catch (err) {
    invalidTransactions.push({
      index: pos + 1,
      transaction,
      category: err.name,
      message: err.message,
    });
    console.log(`Transaction ${pos + 1}: INVALID [${err.name}] ${err.message}`);
  }
});
console.log('Valid transactions:', validTransactions);
console.log('Invalid transactions:', invalidTransactions);
console.log(
  `Summary: ${validTransactions.length} successful, ${invalidTransactions.length} failed`,
);
