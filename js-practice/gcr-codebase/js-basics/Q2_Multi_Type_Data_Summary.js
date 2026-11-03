const loginName = 'Dev';
const years = 21;
const studentFlag = true;
const courses = ['HTML', 'CSS', 'JavaScript'];
const person = {
  name: 'Dev',
  city: 'Delhi',
};
const midName = null;
let homeAddress;
const records = [
  {
    label: 'userName',
    value: loginName,
    type: typeof loginName,
  },
  {
    label: 'age',
    value: years,
    type: typeof years,
  },
  {
    label: 'isStudent',
    value: studentFlag,
    type: typeof studentFlag,
  },
  {
    label: 'subjects',
    value: courses.join(', '),
    type: Array.isArray(courses) ? 'array' : typeof courses,
  },
  {
    label: 'user',
    value: JSON.stringify(person),
    type: typeof person,
  },
  {
    label: 'middleName',
    value: midName,
    type: 'null',
  },
  {
    label: 'address',
    value: String(homeAddress),
    type: typeof homeAddress,
  },
];
console.table(records);
