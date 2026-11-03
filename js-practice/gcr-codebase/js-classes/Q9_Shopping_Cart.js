class Cart {
  constructor() {
    this.items = [];
  }
  addItem(fullName, cost, qty) {
    if (!fullName.trim() || cost < 0 || !Number.isInteger(qty) || qty < 1) {
      throw new Error(
        'Provide a name, non-negative price, and positive whole-number quantity.',
      );
    }
    this.items.push({
      name: fullName,
      price: cost,
      quantity: qty,
    });
  }
  getTotal() {
    return this.items.reduce(
      (subtotal, entry) => subtotal + entry.price * entry.quantity,
      0,
    );
  }
  applyCoupon(code) {
    const found = /^(SAVE|DISC)(\d{1,2})$/.exec(code.trim().toUpperCase());
    if (!found) {
      return {
        valid: false,
        message: 'Invalid coupon. Use a format such as SAVE20 or DISC10.',
      };
    }
    const cutPercent = Number(found[2]);
    if (cutPercent < 1 || cutPercent > 100) {
      return {
        valid: false,
        message: 'Coupon discount must be between 1 and 100.',
      };
    }
    const total = this.getTotal();
    const grandTotal = total - total * (cutPercent / 100);
    return {
      valid: true,
      discountPercent: cutPercent,
      total,
      finalTotal: grandTotal,
    };
  }
}
const basket = new Cart();
basket.addItem('T-shirt', 500, 2);
basket.addItem('Cap', 250, 1);
console.log('Items:', basket.items);
console.log(`Cart total: ₹${basket.getTotal().toFixed(2)}`);
const outcome = basket.applyCoupon('SAVE20');
if (outcome.valid) {
  console.log(`Coupon discount: ${outcome.discountPercent}%`);
  console.log(`Final total: ₹${outcome.finalTotal.toFixed(2)}`);
} else {
  console.log(outcome.message);
}
