const renderButton = document.querySelector('[data-action="render"]');
const destroyButton = document.querySelector('[data-action="destroy"]');
const boxes = document.getElementById('boxes')
console.log(renderButton);
console.log(destroyButton);
console.log(boxes);

renderButton.addEventListener('click', createBoxes);
destroyButton.addEventListener('click', destroyBoxes);


function createBoxes(amount) {
    
    const div = document.createElement('div');
    div.style.width = '30px';
    div.style.height = '30px';
    div.style.backgroundColor = 'red';
    // for (let i = 0; i < amount; i += 1) {
    
    //     const width = '30px' + i * 10;
    //     const height = '30px' + i * 10;
    // }


    boxes.appendChild(div);
    console.log(boxes);
}


function destroyBoxes() {
    boxes.innerHTML = ''

}






