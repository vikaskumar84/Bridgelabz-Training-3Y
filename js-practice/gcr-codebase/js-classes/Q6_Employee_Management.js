class Employee {
  constructor(uid, fullName, dept, monthlyPay) {
    this.id = uid;
    this.name = fullName;
    this.department = dept;
    this.monthlySalary = monthlyPay;
  }
  getAnnualSalary() {
    return this.monthlySalary * 12;
  }
  applyBonus(pct) {
    if (pct < 0) throw new Error('Bonus cannot be negative.');
    this.monthlySalary += this.monthlySalary * (pct / 100);
  }
}
const workers = [
  new Employee(1, 'Aarav', 'IT', 50000),
  new Employee(2, 'Meera', 'HR', 42000),
  new Employee(3, 'Kabir', 'Finance', 60000),
  new Employee(4, 'Anaya', 'Marketing', 45000),
  new Employee(5, 'Rohan', 'IT', 55000),
];
workers[0].applyBonus(10);
workers.forEach((worker) => {
  console.log(
    `${worker.name} (${worker.department}) - Annual salary: ₹${worker.getAnnualSalary().toFixed(2)}`,
  );
});
const yearPayout = workers.reduce(
  (subtotal, employee) => subtotal + employee.getAnnualSalary(),
  0,
);
console.log(`Total annual company payout: ₹${yearPayout.toFixed(2)}`);
