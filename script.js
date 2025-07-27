const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

const colorOptions = document.querySelectorAll('.color-option');

document.querySelector('[data-theme="default"]').classList.add('active');

colorOptions.forEach(option => {
    option.addEventListener('click', () => {
        colorOptions.forEach(opt => opt.classList.remove('active'));

        option.classList.add('active');

        const theme = option.getAttribute('data-theme');

        document.body.classList.remove('theme-ocean', 'theme-sunset', 'theme-forest', 'theme-purple', 'theme-gold');

        if (theme !== 'default') {
            document.body.classList.add(`theme-${theme}`);
        }

        localStorage.setItem('selectedTheme', theme);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('selectedTheme');
    if (savedTheme && savedTheme !== 'default') {
        colorOptions.forEach(opt => opt.classList.remove('active'));

        const savedOption = document.querySelector(`[data-theme="${savedTheme}"]`);
        if (savedOption) {
            savedOption.classList.add('active');
            document.body.classList.add(`theme-${savedTheme}`);
        }
    }
});