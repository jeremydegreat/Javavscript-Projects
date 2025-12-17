document.getElementById('incrementBtn').addEventListener('click', incrementCounter);
document.getElementById('decrementBtn').addEventListener('click', decrementCounter);
document.getElementById('resetBtn').addEventListener('click', resetCounter);


let counterDisplay = document.getElementById('counterDisplay');
let counterValue = 0;


function updateDisplay() {
    counterDisplay.textContent = counterValue;
    updateDisplay();
}

function incrementCounter() {
    counterValue++;
    updateDisplay();
}

function decrementCounter() {
    counterValue--;
    updateDisplay();
}

function resetCounter() {
    counterValue = 0;
    updateDisplay();
}