const input = document.getElementById('validation-input');
const inputLength = input.getAttribute('data-length');



input.addEventListener('blur', onInputBlur);

function onInputBlur() {
    if (input.value.length === 0) {
        input.classList.remove('invalid');
        input.classList.remove('valid');
    }
    else if (input.value.length > inputLength) {
        input.classList.remove('valid');
        input.classList.add('invalid');
    }
    else if (input.value.length <= inputLength){
        input.classList.remove('invalid');
        input.classList.add('valid');
    }

}


