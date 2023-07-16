const name = document.getElementById('Name');
const email = document.getElementById('Email');
const textBox = document.getElementById('TexBox');
const form = document.querySelector('.contact-form')
const errorElement = document.getElementById('error');

form.addEventListener('submit', (e) => {
    let messages = []
    if (name.value === '' || name.value == null) {
        messages.push('Name is required')
    }

    if(messages.length > 0) {
        e.preventDefault()
        error
    }
});
