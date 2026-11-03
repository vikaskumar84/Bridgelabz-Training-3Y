function waitRandomTime() {
  const waitMs = 1000 + Math.floor(Math.random() * 1001);
  return new Promise((resolve) => setTimeout(resolve, waitMs));
}
function boilWater() {
  return waitRandomTime().then(() => {
    if (Math.random() < 0.15) throw new Error('Water could not be boiled.');
    console.log('Water boiled.');
    return 'Boiled water';
  });
}
function brewCoffee() {
  return waitRandomTime().then(() => {
    if (Math.random() < 0.15) throw new Error('Coffee brewing failed.');
    console.log('Coffee brewed.');
    return 'Brewed coffee';
  });
}
function pourCoffee() {
  return waitRandomTime().then(() => {
    if (Math.random() < 0.15) throw new Error('Could not pour coffee.');
    console.log('Coffee poured into the cup.');
    return 'Coffee in cup';
  });
}
boilWater()
  .then(() => brewCoffee())
  .then(() => pourCoffee())
  .then(() => console.log('Coffee ready for the team!'))
  .catch((err) => console.error('Coffee process failed:', err.message));
