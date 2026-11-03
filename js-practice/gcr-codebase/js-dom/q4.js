const skinButtons = document.querySelectorAll('button[data-theme-choice]');
const skinStatus = document.querySelector('#themeStatus');
document.body.setAttribute('data-current-theme', 'light');
skinButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const skin = btn.getAttribute('data-theme-choice');
    document.body.setAttribute('data-theme', skin);
    document.body.setAttribute('data-current-theme', skin);
    skinStatus.textContent = `Current theme: ${document.body.getAttribute('data-current-theme')}`;
  });
});
