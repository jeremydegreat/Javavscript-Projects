document.getElementById('calculatebtn').addEventListener('click', calculateLoan);

function calculateLoan() {

    const loanAmount = parseFloat(document.getElementById('amount').value);
    const interestRate = parseFloat(document.getElementById('rate').value);
    const monthlyTermInput = parseFloat(document.getElementById('monthlyterm').value);
    const yearlyTermInput = parseFloat(document.getElementById('yearlyterm').value);

    if (isNaN(loanAmount) || isNaN(interestRate)) {
        alert("Please enter valid loan amount and interest rate.");
        return;
    }

    if (isNaN(monthlyTermInput) && isNaN(yearlyTermInput)) {
        alert("Please enter either monthly OR yearly loan term.");
        return;
    }

    // Convert term to months
    let totalMonths;
    if(!isNaN(monthlyTermInput))
        totalMonths = monthlyTermInput;
    else if(!isNaN(yearlyTermInput))
        totalMonths = yearlyTermInput * 12;
    else {
        alert("Please enter either monthly OR yearly loan term.");
        return;
    }

    const monthlyInterestRate = (interestRate / 100) / 12;

    // Amortized monthly payment (standard loan formula)
    const monthlyPayment =
        (loanAmount * monthlyInterestRate) /
        (1 - Math.pow(1 + monthlyInterestRate, -totalMonths));

    const totalPayment = monthlyPayment * totalMonths;
    const totalInterest = totalPayment - loanAmount;
    const yearlyPayment = monthlyPayment * 12;

    // Display results
    document.getElementById('monthlypayment').innerText = monthlyPayment.toFixed(2);
    document.getElementById('yearlypayment').innerText = yearlyPayment.toFixed(2);
    document.getElementById('total-payment').innerText = totalPayment.toFixed(2);
    document.getElementById('total-interest').innerText = totalInterest.toFixed(2);
}
