const nome = document.getElementById('Name');
const email = document.getElementById('Email');
const textBox = document.getElementById('TextBox');
const form = document.querySelector('.contact-form');

nome.addEventListener('input', () => {
    nome.classList.remove('invalid');
    nome.nextElementSibling.classList.add('hidden');
});
  
email.addEventListener('input', () => {
    email.classList.remove('invalid');
    email.nextElementSibling.classList.add('hidden');
});
  
textBox.addEventListener('input', () => {
    textBox.classList.remove('invalid');
    textBox.nextElementSibling.classList.add('hidden');
});

form.addEventListener('submit', (e) => {

    if(!nome.value.match(/^[a-zA-ZÀ-ÿ]+(\s{1}[a-zA-ZÀ-ÿ]+)*$/)) {
        e.preventDefault();
        nome.classList.add('invalid');
        nome.nextElementSibling.classList.remove('hidden');
    }

    if (!email.value.match(/^[a-zA-Z0-9]+([._-][a-zA-Z0-9]+)*@[a-zA-Z0-9]+([.-][a-zA-Z0-9]+)*\.[a-zA-Z]{2,}$/)) {
        e.preventDefault();
        email.classList.add('invalid');
        email.nextElementSibling.classList.remove('hidden');
    }

    if (textBox.value == '' || textBox.value == null) {
        e.preventDefault();
        textBox.classList.add('invalid');
        textBox.nextElementSibling.classList.remove('hidden');
    }     
});