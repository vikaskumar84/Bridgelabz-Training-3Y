const billTotal = 6500;
let cutRate;
if (billTotal >= 10000) {
  cutRate = 0.25;
} else if (billTotal >= 5000) {
  cutRate = 0.15;
} else if (billTotal >= 2000) {
  cutRate = 0.05;
} else {
  cutRate = 0;
}
const cutAmount = Math.round(billTotal * cutRate);
const payable = Math.round(billTotal - cutAmount);
console.log(`Original total: ₹${billTotal}`);
console.log(`Discount: ${cutRate * 100}%`);
console.log(`Final price after discount: ₹${payable}`);
