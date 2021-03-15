const input = document.getElementById('validation-input');
const inputLength = Number(input.dataset.length);



input.addEventListener('blur', onInputBlur);
input.addEventListener('input', initInput);

function onInputBlur() {
    input.value.length === inputLength ? input.classList.add('valid') : input.classList.add('invalid')
}

function initInput() {
    input.classList.remove('valid', 'invalid');
}

