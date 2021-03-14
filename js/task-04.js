const counter = document.querySelector("#counter")
const incrimentButton = counter.querySelector("[data-action='increment']")
const decrimentButton = counter.querySelector("[data-action='decrement']")
const value = counter.querySelector("#value")
console.log(counter);
console.log(incrimentButton);
console.log(decrimentButton);
console.log(value);
let counterValue = 0;

function increment () {
    counterValue += 1;
    value.innerHTML = counterValue;
}

function decrement() {
    counterValue > 0 ? counterValue -= 1 : 0;   
    value.innerHTML = counterValue;
}


  
incrimentButton.addEventListener("click", increment);
decrimentButton.addEventListener("click", decrement);

