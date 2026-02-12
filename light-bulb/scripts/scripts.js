document.addEventListener('DOMContentLoaded', function() {
    const bulboff = document.querySelector('#toggle-off');
    const bulbon = document.querySelector('#toggle-on');
    const buttonOn = document.getElementById('toggle-on-btn');
    const buttonOff = document.getElementById('toggle-off-btn');

    let ison = false;

    buttonOn.addEventListener('click', function () {
        bulbon.style.display = "block";
        bulboff.style.display = "none"; 
        ison = true;
       
    });

    buttonOff.addEventListener('click', function () {
        bulbon.style.display = "none";
        bulboff.style.display = "block";
        ison = false;
    });
});