const redSlider = document.getElementById("redSlider");
const greenSlider = document.getElementById("greenSlider");
const blueSlider = document.getElementById("blueSlider");

const redValueSpan = document.getElementById("redValue");
const greenValueSpan = document.getElementById("greenValue");
const blueValueSpan = document.getElementById("blueValue");

const colorBox = document.getElementById("colorBox");
const inputType = document.getElementById("inputType");
const copyBtn = document.getElementById("copyBtn");


redSlider.addEventListener('input', updateColor);
greenSlider.addEventListener('input', updateColor);
blueSlider.addEventListener('input', updateColor);
copyBtn.addEventListener('click', copyToClipboard);

function updateColor() {
    const r = redSlider.value;
    const g = greenSlider.value;
    const b = blueSlider.value;

    const rgbColor = `rgb(${r}, ${g}, ${b})`;

    colorBox.style.backgroundColor = rgbColor;
    redValueSpan.textContent = r;
    greenValueSpan.textContent = g;
    blueValueSpan.textContent = b;

    inputType.textContent = rgbColor;
}


function copyToClipboard() {

    const r = redSlider.value;
    const g = greenSlider.value;
    const b = blueSlider.value;

    const rgbColor = `rgb(${r}, ${g}, ${b})`;

   navigator.clipboard.writeText(rgbColor)
    .then(() => {
        alert("Copied successfully to the clipboard: " + rgbColor);
    })
    .catch((error) => {
        console.error("Failed to copy: ", error);
    });
}

updateColor();
