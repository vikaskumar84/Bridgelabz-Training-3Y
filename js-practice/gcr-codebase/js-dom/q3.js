const stepForm = document.querySelector('#wizardForm');
const phases = [...document.querySelectorAll('.step')];
const prevBtn = document.querySelector('#back');
const forwardBtn = document.querySelector('#next');
const doneBtn = document.querySelector('#finish');
const digest = document.querySelector('#summary');
let activeStep = 0;
function isStepValid(pos) {
  const control = phases[pos].querySelector('input');
  const err = phases[pos].querySelector('.error');
  let passes = control.checkValidity() && control.value.trim() !== '';
  if (control.id === 'password' && control.value.length < 6) passes = false;
  err.textContent = passes
    ? ''
    : control.validationMessage || 'Please enter a valid value.';
  if (!control.value.trim()) err.textContent = 'This field is required.';
  return passes;
}
function showStep(index) {
  phases.forEach((phase, idx) => (phase.hidden = idx !== index));
  prevBtn.hidden = index === 0;
  forwardBtn.hidden = index === phases.length - 1;
  doneBtn.hidden = index !== phases.length - 1;
  digest.textContent = '';
}
forwardBtn.addEventListener('click', () => {
  if (!isStepValid(activeStep)) return;
  activeStep++;
  showStep(activeStep);
});
prevBtn.addEventListener('click', () => {
  activeStep = Math.max(0, activeStep - 1);
  showStep(activeStep);
});
stepForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (!isStepValid(activeStep)) return;
  const fullName = document.querySelector('#name').value.trim();
  const mailAddr = document.querySelector('#email').value.trim();
  digest.innerHTML = `<h2>Summary</h2><p><strong>Name:</strong> ${escapeHtml(fullName)}</p><p><strong>Email:</strong> ${escapeHtml(mailAddr)}</p><p><strong>Password:</strong> ••••••</p>`;
  stepForm.hidden = true;
});
function escapeHtml(val) {
  return val.replace(
    /[&<>"']/g,
    (letter) =>
      ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
      })[letter],
  );
}
showStep(activeStep);
