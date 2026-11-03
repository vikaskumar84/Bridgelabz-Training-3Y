function getBugs() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const apiFailed = Math.random() < 0.3;
      if (apiFailed) {
        reject(new Error('Bug tracker API request failed.'));
        return;
      }
      resolve(['UI glitch', 'API timeout', 'Login failure']);
    }, 1000);
  });
}
getBugs()
  .then((issues) => {
    console.log('Bugs retrieved successfully:');
    console.table(
      issues.map((issue, pos) => ({
        Number: pos + 1,
        Bug: issue,
      })),
    );
  })
  .catch((err) => {
    console.error('Unable to fetch bugs:', err.message);
  });
