
function isPallindrome(str) {
    const cleanedStr = str.toLowerCase().replace(/[^A-Za-z0-9]/g, '');
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}

function pallindromeChecker() {

    const inputText = document.getElementById('inputText').value;
    const resultDiv = document.getElementById('result');

    // Clear previous result
    resultDiv.textContent = "";
    resultDiv.classList.remove("is-palindrome", "not-palindrome");
    resultDiv.style.display = "fadeIn 0.3s ease-in-out";


    if (isPallindrome(inputText)) {
        resultDiv.textContent = `"${inputText}" is a palindrome.`;
        resultDiv.classList.add('is-palindrome');
    }
    else {
        resultDiv.textContent = `"${inputText}" is not a palindrome.`;
        resultDiv.classList.add('not-palindrome');
    }

}


document.getElementById('checkButton').addEventListener('click', pallindromeChecker);