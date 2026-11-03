const basket = [
  {
    item: 'Laptop',
    category: 'electronics',
    price: 45000,
  },
  {
    item: 'Shoes',
    category: 'fashion',
    price: 2500,
  },
  {
    item: 'Book',
    category: 'education',
    price: 600,
  },
];
const basketTotal = basket.reduce((addTotal, goods) => addTotal + goods.price, 0);
let netTotal = 0;
for (const product of basket) {
  let cutRate = 0;
  if (product.category === 'electronics') {
    cutRate = 0.1;
  } else if (product.category === 'fashion') {
    cutRate = 0.05;
  }
  const netPrice = product.price * (1 - cutRate);
  netTotal += netPrice;
  console.log(
    `${product.item}: ₹${product.price.toFixed(2)}; ` +
      `discount ${cutRate * 100}%; after discount ₹${netPrice.toFixed(2)}`,
  );
}
if (basketTotal > 50000) {
  netTotal *= 0.95;
  console.log('Extra 5% cart discount applied.');
}
console.log(`Original cart total: ₹${basketTotal.toFixed(2)}`);
console.log(`Final total: ₹${netTotal.toFixed(2)}`);
