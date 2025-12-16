document.addEventListener('DOMContentLoaded', function() {
    const bulboff = document.querySelector('#toggle-off');
    const bulbon = document.querySelector('#toggle-on');
    const button = document.getElementById('mode-toggle');

    let ison = false;

    button.addEventListener('click', function () {

        if (ison) {
            bulboff.style.display = "none";
            bulbon.style.display = "block";
        }
        else {
            bulbon.style.display = "none";
            bulboff.style.display = "block";
        }

        ison =!ison;
       
    });
});