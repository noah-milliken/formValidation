import './style.css';

// const form = document.getElementById('form');
// const email = document.getElementById('email');
// const emailSpan = email.nextElementSibling;
// const country = document.getElementById('country');
const zip = document.getElementById('zipcode');
const zipSpan = zip.nextElementSibling;
const password = document.getElementById('password');
const passwordSpan = password.nextElementSibling;
const confirmPassword = document.getElementById('confirm_password');
const confirmPasswordSpan = confirmPassword.nextElementSibling;

const showError = () => {
  if (zip.validity.patternMismatch) {
    zipSpan.textContent = 'your zipcode does not match a proper zipcode format';
  } else {
    zip.className = 'error active';
  }
  if (password.validity.tooShort) {
    passwordSpan.textContent = `Your Password should be ${password.minLength} long; Your password is ${password.value.length}`;
  } else if (password.validity.patternMismatch) {
    passwordSpan.textContent = 'Your password must contain one Uppercase';
  }
  if (password.value !== confirmPassword.value) {
    confirmPasswordSpan.textContent = 'Boats and Hoeså';
  }
};

zip.addEventListener('input', (e) => {
  if (zip.validity.valid) {
    zipSpan.textContent = '';
    zipSpan.className = 'error';
  } else {
    showError();
  }
});

password.addEventListener('input', (e) => {
  if (password.validity.valid) {
    passwordSpan.textContent = '';
    passwordSpan.className = 'error';
  } else {
    showError();
  }
});

confirmPassword.addEventListener('input', (e) => {
  if (confirmPassword.validity.valid) {
    confirmPasswordSpan.textContent = '';
    confirmPasswordSpan.className = 'error';
  } else {
    showError();
  }
});
