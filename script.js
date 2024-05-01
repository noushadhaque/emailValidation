function validateEmail() {
    const emailInput = document.getElementById('email');
    const email = emailInput.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const resultDiv = document.getElementById('result');

    if (emailPattern.test(email)) {
        resultDiv.textContent = 'Your email is correct';
        resultDiv.classList.remove('invalid');
        resultDiv.classList.add('valid');
    } else {
        resultDiv.textContent = 'Email is not correct';
        resultDiv.classList.remove('valid');
        resultDiv.classList.add('invalid');
    }
}