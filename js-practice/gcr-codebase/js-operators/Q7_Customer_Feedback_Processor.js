const remark = 'Great product! Fast delivery and amazing sound quality!';
const wordsTotal = remark.trim().split(/\s+/).length;
const cleanRemark = remark.toLowerCase();
const containsNegativeWords = cleanRemark.includes('bad') || cleanRemark.includes('poor');
console.log(`Feedback: ${remark}`);
console.log(`Word count: ${wordsTotal}`);
if (containsNegativeWords) {
  console.log('Needs Improvement');
} else {
  console.log('Positive Feedback');
}
