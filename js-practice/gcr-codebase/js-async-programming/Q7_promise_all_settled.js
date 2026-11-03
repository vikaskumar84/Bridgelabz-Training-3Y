function loadProfile() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() < 0.25
        ? reject(new Error('Profile failed'))
        : resolve('Profile Loaded');
    }, 2000);
  });
}
function loadPosts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() < 0.25 ? reject(new Error('Posts failed')) : resolve('Posts Loaded');
    }, 1500);
  });
}
function loadMessages() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() < 0.25
        ? reject(new Error('Messages failed'))
        : resolve('Messages Loaded');
    }, 1000);
  });
}
async function loadDashboardModules() {
  const began = Date.now();
  const outcomes = await Promise.allSettled([loadProfile(), loadPosts(), loadMessages()]);
  const moduleList = ['Profile', 'Posts', 'Messages'];
  outcomes.forEach((outcome, pos) => {
    if (outcome.status === 'fulfilled') {
      console.log(`${moduleList[pos]} succeeded: ${outcome.value}`);
    } else {
      console.error(`${moduleList[pos]} failed: ${outcome.reason.message}`);
    }
  });
  console.log(`Total time taken: ${Date.now() - began} ms`);
}
loadDashboardModules();
