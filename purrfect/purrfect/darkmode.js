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