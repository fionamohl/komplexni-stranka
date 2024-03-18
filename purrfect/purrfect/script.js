// Darkmode

const darkModeSwitch = document.getElementById('darkModeSwitch');
const logo = document.getElementById('logo');

darkModeSwitch.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
    
    // Toggle logo for dark mode
    if (document.body.classList.contains('dark-mode')) {
        // Dark mode is on, switch to dark mode logo
        logo.src = '../purrfect/images/logo_darkmode.png';
    } else {
        // Dark mode is off, switch to light mode logo
        logo.src = '../purrfect/images/purrfect_logo.png';
    }
});



// Arrow
var btn = document.getElementById("back-to-top-btn");

window.onscroll = function() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

btn.onclick = function() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
};


// Form

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

// Menu

document.addEventListener("DOMContentLoaded", function() {
  const menuIcon = document.querySelector(".menu-icon");
  const menuList = document.querySelector("nav ul");

  menuIcon.addEventListener("click", function() {
      menuList.classList.toggle("show");
  });
});