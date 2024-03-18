// Formulář

const registrationForm = document.getElementById('registrationForm');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const messageDiv = document.getElementById('message');

registrationForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  if (password !== confirmPassword) {
    showMessage('Passwords do not match', 'error');
  } else if (password.length < 6) {
    showMessage('Password must be at least 6 characters long', 'error');
  } else {
    showMessage('Registration successful', 'success');
    // Here you can submit the form or perform other actions
  }

});

function showMessage(message, messageType) {
  messageDiv.textContent = message;
  messageDiv.className = messageType;
}