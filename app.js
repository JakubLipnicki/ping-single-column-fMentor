const input = document.querySelector('.email-input');
const button = document.querySelector('.submit-button');

const validateEmail = (email) => {
    return input.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/);
};
button.addEventListener('click', (e) => {
    if (input.value === '') {
        console.log('Whoops! It looks like you forgot to add your email');
        e.preventDefault();
        return;
    }
    if (validateEmail(input)) {
        console.log('match');
        e.preventDefault();
        return;
    } else {
        console.log('error');
        e.preventDefault();
    }
});
