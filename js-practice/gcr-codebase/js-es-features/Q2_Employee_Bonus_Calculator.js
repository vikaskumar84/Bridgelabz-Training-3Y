'use strict';
const workers = [
  {
    name: 'Amit',
    salary: '45000',
    years: '5',
  },
  {
    name: 'Sara',
    salary: '38000',
    years: '2',
  },
  {
    name: 'Kiran',
    salary: '52000',
    years: '7',
  },
];
console.log('=== Employee Bonus Report ===');
for (const worker of workers) {
  try {
    if (!worker || !('name' in worker) || !('salary' in worker) || !('years' in worker)) {
      throw new Error('Employee record is missing a required property.');
    }
    const wage = Number(worker.salary);
    const years = Number(worker.years);
    if (!Number.isFinite(wage) || !Number.isFinite(years)) {
      throw new TypeError('Salary or years could not be converted to a valid number.');
    }
    const rate = years > 3 ? 0.1 : 0.05;
    const extraPay = wage * rate;
    console.log(
      `${worker.name}: Salary ₹${wage.toFixed(2)}, Experience ${years} years, Bonus rate ${(rate * 100).toFixed(0)}%, Bonus ₹${extraPay.toFixed(2)}`,
    );
  } catch (err) {
    console.log(`Employee error: ${err.name} - ${err.message}`);
  }
}
