function serverResponse(nodeName, waitMs) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.2) {
        reject(new Error(`${nodeName} deployment failed`));
      } else {
        resolve(`${nodeName} responded successfully`);
      }
    }, waitMs);
  });
}
const nodeA = serverResponse('Server A', 2000);
const nodeB = serverResponse('Server B', 3000);
Promise.all([nodeA, nodeB])
  .then(() => console.log('Deployment completed for all servers'))
  .catch((err) => console.error('Deployment error:', err.message));
Promise.race([serverResponse('Server A', 2000), serverResponse('Server B', 3000)])
  .then((response) => console.log('Fastest response:', response))
  .catch((error) => console.error('Fastest response failed:', error.message));
