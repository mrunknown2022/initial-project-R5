const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnLoginPopup = document.querySelector('.btnLogin-popup');

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

btnLoginPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

function togglePassword(inputId) {
    const passwordInput = document.getElementById(inputId);
    const passwordToggle = document.querySelector(`#${inputId} + .password-toggle ion-icon`);

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        passwordToggle.setAttribute('name', 'eye-off');
    } else {
        passwordInput.type = 'password';
        passwordToggle.setAttribute('name', 'eye');
    }
}
function closePopup() {
    const wrapper = document.querySelector('.wrapper');
    wrapper.classList.remove('active-popup');
}