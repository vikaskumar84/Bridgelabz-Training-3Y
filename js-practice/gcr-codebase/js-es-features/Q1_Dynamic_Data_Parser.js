'use strict';
const apiData = [
  '25',
  'true',
  'false',
  'NaN',
  '                     ',
  '100px',
  '3.14',
  null,
  undefined,
];
const validNumbers = [];
const invalidNumbers = [];
console.log('=== Dynamic Data Parser Report ===');
for (let idx = 0; idx < apiData.length; idx++) {
  const val = apiData[idx];
  const numberValue = Number(val);
  const booleanValue = Boolean(val);
  const stringValue = String(val);
  const isBlankString = typeof val === 'string' && val.trim() === '';
  const isInvalid =
    Number.isNaN(numberValue) ||
    isBlankString ||
    (typeof val === 'string' && val.trim() === '100px');
  console.log(
    `Item ${idx + 1}: original=${stringValue}, Number=${numberValue}, Boolean=${booleanValue}, String="${stringValue}"`,
  );
  if (isInvalid) {
    invalidNumbers.push({
      index: idx,
      value: val,
      reason: Number.isNaN(numberValue)
        ? 'Number conversion produced NaN'
        : 'Blank or unsupported numeric text',
    });
    console.log(`  INVALID: ${String(val)}`);
  } else {
    validNumbers.push(numberValue);
    console.log(`  VALID NUMBER: ${numberValue}`);
  }
}
console.log('Valid numeric data:', validNumbers);
console.log('Invalid data:', invalidNumbers);
console.log(`Totals: ${validNumbers.length} valid, ${invalidNumbers.length} invalid`);
