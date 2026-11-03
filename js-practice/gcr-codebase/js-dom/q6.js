const searchBox = document.querySelector('#search');
const learnerRows = [...document.querySelectorAll('#studentRows tr')];
const emptyState = document.querySelector('#noResults');
searchBox.addEventListener('input', () => {
  const term = searchBox.value.trim().toLowerCase();
  let shownCount = 0;
  learnerRows.forEach((line) => {
    const foundAll = line.textContent.toLowerCase().includes(term);
    line.hidden = !foundAll;
    if (foundAll) shownCount++;
  });
  emptyState.hidden = shownCount !== 0;
});
