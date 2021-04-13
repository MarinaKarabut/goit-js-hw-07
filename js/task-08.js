const renderButton = document.querySelector('[data-action="render"]')
const destroyButton = document.querySelector('[data-action="destroy"]')
const boxes = document.getElementById('boxes')
const input = document.querySelector('#controls input')
console.log(renderButton)
console.log(destroyButton)
console.log(boxes)

renderButton.addEventListener('click', getAmount)

destroyButton.addEventListener('click', destroyBoxes)

function getAmount() {
    const inputValue = Number(input.value)
    createBoxes(inputValue)
}
function createBoxes(amount) {
  let basicWidth = 30
  let basicHeight = 30
  const arrayDiv = []
  for (let i = 1; i <= amount; i += 1) {
    const div = document.createElement('div')
    div.style.width = `${basicWidth}px`
    div.style.height = `${basicHeight}px`
    basicWidth += 10
    basicHeight += 10

    div.style.backgroundColor = `rgba( ${random()} , ${random()} , ${random()})`
    arrayDiv.push(div)
  }
  boxes.append(...arrayDiv)
}

function destroyBoxes() {
  boxes.innerHTML = ''
}

function random() {
  return Math.floor(Math.random() * 256)
}
