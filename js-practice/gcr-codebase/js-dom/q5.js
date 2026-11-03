const pictures = document.querySelector('#gallery');
const dialog = document.querySelector('#modal');
const dialogBody = document.querySelector('#modalContent');
const thumbnail = document.querySelector('#previewImage');
pictures.addEventListener('click', (evt) => {
  const photo = evt.target.closest('img');
  if (!photo) return;
  thumbnail.src = photo.src;
  thumbnail.alt = photo.alt;
  dialog.classList.add('open');
});
dialog.addEventListener('click', () => dialog.classList.remove('open'));
dialogBody.addEventListener('click', (event) => event.stopPropagation());
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') dialog.classList.remove('open');
});
