function submitOrder() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.5) {
        reject(new Error('Temporary order submission failure'));
      } else {
        resolve('Order submitted successfully');
      }
    }, 500);
  });
}
async function processOrder() {
  for (let tryNo = 1; tryNo <= 3; tryNo++) {
    try {
      const outcome = await submitOrder();
      console.log(`Attempt ${tryNo}: Success`);
      console.log(outcome);
      return;
    } catch (err) {
      console.log(`Attempt ${tryNo}: Failed`);
    }
  }
  throw new Error('Order could not be processed');
}
processOrder().catch((error) => {
  console.error(error.message);
});
