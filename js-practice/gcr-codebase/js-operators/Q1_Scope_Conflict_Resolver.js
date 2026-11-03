let extraPay = 5000;
function calculateSalary() {
  const wage = 40000;
  const permanentFlag = true;
  let payTotal = wage;
  if (permanentFlag) {
    payTotal += extraPay;
  }
  console.log(`Permanent employee: ${permanentFlag}`);
  console.log(`Total salary: ₹${payTotal}`);
}
calculateSalary();
console.log(`Global bonus remains: ₹${extraPay}`);
