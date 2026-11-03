function Car(maker, variant) {
  this.brand = maker;
  this.model = variant;
}
Car.prototype.getDetails = function () {
  console.log(`Brand: ${this.brand}, Model: ${this.model}`);
};
const firstCar = new Car('Toyota', 'Corolla');
const secondCar = new Car('Honda', 'Civic');
firstCar.getDetails();
secondCar.getDetails();
console.log(firstCar.getDetails === secondCar.getDetails);
