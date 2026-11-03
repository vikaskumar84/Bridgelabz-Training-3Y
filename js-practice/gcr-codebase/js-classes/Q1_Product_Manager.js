class Product {
  constructor(uid, fullName, cost, group) {
    this.id = uid;
    this.name = fullName;
    this.price = cost;
    this.category = group;
  }
  applyDiscount(pct) {
    if (pct < 0 || pct > 100) {
      throw new Error('Discount must be between 0 and 100.');
    }
    this.price -= this.price * (pct / 100);
  }
  getDetails() {
    return `ID: ${this.id} | Name: ${this.name} | Price: ₹${this.price.toFixed(2)} | Category: ${this.category}`;
  }
}
const catalog = [
  new Product(1, 'Keyboard', 1500, 'Electronics'),
  new Product(2, 'Notebook', 120, 'Stationery'),
  new Product(3, 'Headphones', 2200, 'Electronics'),
  new Product(4, 'Bottle', 450, 'Accessories'),
];
catalog[0].applyDiscount(10);
console.log('All products:');
catalog.forEach((goods) => console.log(goods.getDetails()));
console.log('\\nProducts with price greater than ₹1000:');
catalog
  .filter((product) => product.price > 1000)
  .forEach((product) => console.log(product.getDetails()));
