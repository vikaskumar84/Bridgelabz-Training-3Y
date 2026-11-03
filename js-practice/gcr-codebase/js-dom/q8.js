const picker = document.querySelector('#dropdown');
const flip = document.querySelector('#dropdownToggle');
const choices = document.querySelector('#options');
const picked = document.querySelector('#selection');
function setDropdownOpen(opened) {
  choices.classList.toggle('open', opened);
  flip.setAttribute('aria-expanded', String(opened));
}
flip.addEventListener('click', (evt) => {
  evt.stopPropagation();
  setDropdownOpen(!choices.classList.contains('open'));
});
choices.addEventListener('click', (event) => {
  const choice = event.target.closest('button[role="option"]');
  if (!choice) return;
  flip.textContent = `${choice.textContent} ▾`;
  picked.textContent = `Selected course: ${choice.textContent}`;
  setDropdownOpen(false);
});
document.addEventListener(
  'click',
  (event) => {
    if (!picker.contains(event.target)) setDropdownOpen(false);
  },
  true,
);
