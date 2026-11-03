function runWithNestedCallbacks() {
  console.log('Nested callback pipeline started');
  setTimeout(() => {
    console.log('design');
    setTimeout(() => {
      console.log('build');
      setTimeout(() => {
        console.log('test');
        setTimeout(() => {
          console.log('deploy');
          setTimeout(() => {
            console.log('celebrate');
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}
function stage(fullName) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(fullName);
      resolve();
    }, 1000);
  });
}
async function runWithAsyncAwait() {
  console.log('Async/await pipeline started');
  await stage('design');
  await stage('build');
  await stage('test');
  await stage('deploy');
  await stage('celebrate');
}
runWithNestedCallbacks();
