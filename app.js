const input = document.querySelector('.email-input');
const button = document.querySelector('.submit-button');
const form = document.querySelector('form');
const errorMessage = document.createElement('p');
const validateEmail = (email) => {
    return input.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/);
};
const errorInsertion = (message) => {
    errorMessage.textContent = message;
    errorMessage.classList.add('error-message');
    console.log(errorMessage);
    input.after(errorMessage);
};
button.addEventListener('click', (e) => {
    if (input.value === '') {
        e.preventDefault();
        input.classList.add('input-error');
        errorInsertion('Whoops! It looks like you forgot to add your email');
        return;
    }
    if (validateEmail(input)) {
        input.classList.remove('input-error');
        errorInsertion('');
        input.value = '';
        e.preventDefault();
        return;
    } else {
        e.preventDefault();
        input.classList.add('input-error');
        errorInsertion('Please provide a valid email address');
    }
});
