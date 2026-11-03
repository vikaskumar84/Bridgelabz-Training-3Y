'use strict';
const rawData = [
  '{"user":"Alex","age":25}',
  '{"id":2}',
  '{invalid}',
  '{"user":"Mina","age":"22"}',
];
const cleanData = [];
const problems = [];
const adults = [];
rawData.forEach((raw, pos) => {
  const lineNumber = pos + 1;
  try {
    const parsed = JSON.parse(raw);
    if (
      !Object.prototype.hasOwnProperty.call(parsed, 'user') ||
      !Object.prototype.hasOwnProperty.call(parsed, 'age')
    ) {
      throw new Error('Missing required key: user or age');
    }
    const years = Number(parsed.age);
    if (!Number.isFinite(years)) throw new TypeError('Age is not a valid number');
    const record = {
      ...parsed,
      age: years,
    };
    cleanData.push(record);
    if (years >= 18) adults.push(record);
    console.log(`Line ${lineNumber}: valid JSON record`, record);
  } catch (err) {
    problems.push({
      lineNumber,
      message: err.message,
      raw,
    });
    console.log(`Line ${lineNumber}: ERROR - ${err.message}`);
  }
});
console.log('Clean data:', cleanData);
console.log('Errors:', problems);
console.log(
  'Users under 18:',
  cleanData.filter((person) => person.age < 18),
);
console.log('Adult users:', adults);
