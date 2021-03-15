const renderButton = document.querySelector('[data-action="render"]');
const destroyButton = document.querySelector('[data-action="destroy"]');
const boxes = document.getElementById('boxes')
const input = document.querySelector('#controls input')
console.log(renderButton);
console.log(destroyButton);
console.log(boxes);

renderButton.addEventListener('click', function () {
    createBoxes(input.value)
});
destroyButton.addEventListener('click', destroyBoxes);


function createBoxes(amount) {
    

    for (let i = 1; i <= amount; i += 1) {
        const div = document.createElement('div');
        div.style.width = `${20 + i * 10}px`;
        div.style.height = `${20 + i * 10}px`;
        div.style.backgroundColor = `rgba( ${random()} , ${random()} , ${random()}`;
        boxes.append(div);
    }

 
}


function destroyBoxes() {
    boxes.innerHTML = ''

}

function random() {
  return Math.floor(Math.random() * 256);
}






