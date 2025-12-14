
function calculateLove() {
    const name1 = document.getElementById('name1').value.trim().toLowerCase();
    const name2 = document.getElementById('name2').value.trim().toLowerCase();
    
    
    if (name1 === "" || name2 === "") {
        alert("Please enter both names.");
    }
    else {
        const Lovepercentage = Math.floor(Math.random() * 101);
        const result = document.getElementById('result');

        result.innerHTML = `Love percentage between <strong>${name1}</strong> and <strong>${name2}</strong> is ${Lovepercentage}%`;

            if (Lovepercentage < 30) {
                result.innerHTML += "<br> They are not Compatible. Try Again! 💔";
            }
            else if (Lovepercentage >= 30 && Lovepercentage < 70) {
                result.innerHTML += "<br> They have a Moderate Compatibility. 💛";
            }
            else {
                result.innerHTML += "<br> They are Highly Compatible! 💚";
            }

        }
}