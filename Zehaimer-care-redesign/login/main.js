const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const togglePassword = document.getElementById('togglePassword');

function showError(element, message) {
  element.textContent = message;
  element.style.display = message ? 'block' : 'none';
}

loginForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const email = emailInput.value.trim().toLowerCase();
  const password = passwordInput.value;
  showError(emailError, '');
  showError(passwordError, '');

  // Demo-only client-side validation. Do not use this as real authentication.
  const allowedEmails = [
    'elrobyadam8@gmail.com',
    'adamelroby2011@gmail.com',
    'elramah06@gmail.com'
  ];
  const allowedPasswords = ['adam1992011', '1992011', 'Bamoo2042011'];
  let valid = true;

  if (!allowedEmails.includes(email)) {
    showError(emailError, 'Email is incorrect');
    valid = false;
  }
  if (!allowedPasswords.includes(password.trim())) {
    showError(passwordError, 'Password is incorrect');
    valid = false;
  }
  if (valid) {
    window.location.href = 'main%20page/main.html';
  }
});

togglePassword.addEventListener('click', function () {
  const show = passwordInput.type === 'password';
  passwordInput.type = show ? 'text' : 'password';
  const icon = this.querySelector('i');
  icon.classList.toggle('fa-eye', !show);
  icon.classList.toggle('fa-eye-slash', show);
  this.setAttribute('aria-label', show ? 'Hide password' : 'Show password');
});
