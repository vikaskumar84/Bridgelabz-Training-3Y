const basePay = 30000;
const yearlyRaiseRate = 8;
let futurePay = basePay;
const forecast = [];
for (let yr = 1; yr <= 5; yr++) {
  futurePay *= 1 + yearlyRaiseRate / 100;
  futurePay = Math.round(futurePay);
  forecast.push({
    Year: yr,
    Salary: `₹${futurePay.toLocaleString('en-IN')}`,
  });
}
console.table(forecast);
