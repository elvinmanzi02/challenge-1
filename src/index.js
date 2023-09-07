let display = document.querySelector(".counter");
const incrementBtn = document.querySelector(".increment");
const decrementBtn = document.querySelector(".decrement");

let currentInput = 0;

function updateFuct() { 
    display.textContent = currentInput;
}

function incrementFuct() {
    currentInput++;
    updateFuct();
}

function decrementFuct() {
    currentInput--;
    updateFuct();
}

incrementBtn.addEventListener("click", incrementFuct);
decrementBtn.addEventListener("click", decrementFuct);