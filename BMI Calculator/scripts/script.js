document.getElementById('bmi-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const gender = document.getElementById('gender').value;
    const age = parseInt(document.getElementById('age').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const feet = parseInt(document.getElementById('f-height').value);
    const inches = parseInt(document.getElementById('i-height').value);

    if (age && gender && weight && (feet || inches)) {

        // Convert height to meters
        const heightInMeters = ((feet * 12) + inches) * 0.0254;
        const bmi = weight / (heightInMeters * heightInMeters);
        const resultBMI = document.querySelector('#bmiValue');
        
        let category = '';
        if (bmi < 18.5) {
            category = 'Underweight';
        }else if (bmi >= 18.5 && bmi < 24.9) {
            category = 'Normal weight';
        }else if (bmi >= 25 && bmi < 29.9) {
            category = 'Obese';
        }
        
        resultBMI.textContent = bmi.toFixed(2);
        document.getElementById('bmiCategory').textContent = category;
        
    }
})