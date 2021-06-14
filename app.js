const input = document.querySelector('input');
const btn = document.querySelector('button');
const errorMessage = document.querySelector('.error-message');

const showValid = (test) => {
    if (test) {
        input.classList.remove('error');
        errorMessage.style.display = 'none';
    } else {
        input.classList.add('error');
        errorMessage.style.display = 'block';
    }
}

btn.addEventListener('click', (e) => {
    e.preventDefault();

    const regex = new RegExp(/\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi);
    const test = regex.test(input.value);
    showValid(test);
});