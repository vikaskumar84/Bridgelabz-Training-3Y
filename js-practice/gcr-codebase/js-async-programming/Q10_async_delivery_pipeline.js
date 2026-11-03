function deliveryStep(phaseName, okText) {
  return new Promise((resolve, reject) => {
    const waitMs = 1000 + Math.floor(Math.random() * 1001);
    setTimeout(() => {
      if (Math.random() < 0.15) {
        reject(new Error(`${phaseName} failed`));
      } else {
        resolve(okText);
      }
    }, waitMs);
  });
}
async function runPipeline() {
  console.log('Start Pipeline');
  try {
    console.log('Step 1: Order taken');
    await deliveryStep('takeOrder', 'Order accepted');
    console.log('Step 2: Food prepared');
    await deliveryStep('prepare', 'Food prepared');
    console.log('Step 3: Package ready');
    await deliveryStep('pack', 'Package ready');
    console.log('Step 4: Out for delivery');
    await deliveryStep('dispatch', 'Out for delivery');
    await deliveryStep('deliver', 'Delivered');
    console.log('Delivery completed!');
  } catch (err) {
    console.error('Pipeline failed!', err.message);
  }
}
runPipeline();
