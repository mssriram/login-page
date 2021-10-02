// const username = document.registerForm.username.value;
// const password = document.registerForm.password.value;
// const reenterPassword = document.registerForm.reenterPassword.value;

const username = document.querySelector('#username');
const password = document.querySelector('#password');
const reenterPassword = document.querySelector('#reenter-password');
const usernameSpan = document.querySelector('#check-username');
const passwordSpan = document.querySelector('#check-password');

const submitButton = document.registerForm.submitButton

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (password.value != reenterPassword.value) {
        console.log('not matching');
        passwordSpan.style.display = 'block';
    }
})

username.addEventListener('input', (e) => {
    console.log(username.value);
})

username.addEventListener('change', (e) => {
    if (username.value.length <= 8 || username.value.length >= 22){
        usernameSpan.style.display = 'block';
    }
    else{
        usernameSpan.style.display = 'none';
    }
    console.log();
})