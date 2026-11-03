const text = document.querySelector('#message');
const ticker = document.querySelector('#counter');
const clearBtn = document.querySelector('#reset');
const charLimit = 100;
function updateCounter() {
  const left = charLimit - text.value.length;
  ticker.textContent = `${left} characters remaining`;
  ticker.style.color = left === 0 ? 'red' : left <= 20 ? '#ca8a04' : '#202333';
}
text.addEventListener('input', updateCounter);
text.addEventListener('keydown', (evt) => {
  if (
    text.value.length >= charLimit &&
    !['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab', 'Home', 'End'].includes(
      evt.key,
    ) &&
    !(evt.ctrlKey || evt.metaKey)
  ) {
    evt.preventDefault();
  }
});
text.addEventListener('paste', (event) => {
  const clipboardText = event.clipboardData.getData('text');
  if (text.value.length + clipboardText.length > charLimit) {
    event.preventDefault();
    text.value += clipboardText.slice(0, charLimit - text.value.length);
    updateCounter();
  }
});
clearBtn.addEventListener('click', () => {
  text.value = '';
  updateCounter();
  text.focus();
});
updateCounter();
