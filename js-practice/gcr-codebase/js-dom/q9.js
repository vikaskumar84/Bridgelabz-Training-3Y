const joinForm = document.querySelector('#signupForm');
const controls = [
  {
    input: document.querySelector('#fullName'),
    error: document.querySelector('#fullNameError'),
    validate: (val) => (val.trim() ? '' : 'Name is required.'),
  },
  {
    input: document.querySelector('#emailAddress'),
    error: document.querySelector('#emailAddressError'),
    validate: (value) =>
      !value.trim()
        ? 'Email is required.'
        : !value.includes('@')
          ? 'Email must contain @.'
          : '',
  },
  {
    input: document.querySelector('#userPassword'),
    error: document.querySelector('#userPasswordError'),
    validate: (value) =>
      value.length < 6 ? 'Password must be at least 6 characters.' : '',
  },
];
const okText = document.querySelector('#successMessage');
function validateField(control) {
  const text = control.validate(control.input.value);
  control.error.textContent = text;
  return !text;
}
controls.forEach((field) => {
  field.input.addEventListener('input', () => {
    validateField(field);
    okText.textContent = '';
  });
});
joinForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const passes = controls.map(validateField).every(Boolean);
  if (!passes) {
    okText.textContent = '';
    return;
  }
  okText.textContent = 'Form Submitted Successfully';
  joinForm.reset();
  controls.forEach((field) => (field.error.textContent = ''));
});
