
const input = document.getElementById("font-size-control");
const text = document.getElementById("text");



input.addEventListener('input', onInputChange)

function onInputChange(event) {
text.style.fontSize =  `${event.currentTarget.value}px`;
    
}

