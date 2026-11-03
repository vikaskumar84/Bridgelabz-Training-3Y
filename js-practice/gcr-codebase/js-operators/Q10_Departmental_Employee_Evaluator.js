const depts = [
  ['HR', 72],
  ['Finance', 88],
  ['Tech', 95],
  ['Support', 63],
];
for (const dept of depts) {
  const fullName = dept[0];
  const marksGot = dept[1];
  let perfNow;
  if (marksGot >= 90) {
    perfNow = 'Excellent';
  } else if (marksGot >= 75) {
    perfNow = 'Good';
  } else if (marksGot >= 60) {
    perfNow = 'Average';
  } else {
    perfNow = 'Needs Improvement';
  }
  console.log(`${fullName}: ${marksGot} — ${perfNow}`);
}
