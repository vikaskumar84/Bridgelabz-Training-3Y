const spendings = [
  {
    category: 'Food',
    amount: 3500,
  },
  {
    category: 'Travel',
    amount: 1200,
  },
  {
    category: 'Rent',
    amount: 8000,
  },
  {
    category: 'Bills',
    amount: 1500,
  },
  {
    category: 'Leisure',
    amount: 1000,
  },
];
let subtotal = 0;
for (const spend of spendings) {
  subtotal += spend.amount;
}
const meanValue = subtotal / spendings.length;
subtotal += subtotal * 0.1;
console.log(`Total including 10% tax: ₹${subtotal.toFixed(2)}`);
console.log(`Average expense before tax: ₹${meanValue.toFixed(2)}`);
console.log(`Final amount after tax: ₹${subtotal.toFixed(2)}`);
