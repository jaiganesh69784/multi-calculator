document.addEventListener('DOMContentLoaded', function() {
    // BMI Calculator
    const bmiForm = document.getElementById('bmiForm');
    if (bmiForm) {
        bmiForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const weight = parseFloat(document.getElementById('weight').value);
            const height = parseFloat(document.getElementById('height').value) / 100;
            const bmi = weight / (height * height);
            document.getElementById('bmiResult').textContent = `Your BMI is ${bmi.toFixed(2)}`;
        });
    }

    // Currency Converter
    const currencyForm = document.getElementById('currencyForm');
    if (currencyForm) {
        currencyForm.addEventListener('submit', function(event) {
            event.preventDefault();
            // Mock conversion logic for demonstration
            const amount = parseFloat(document.getElementById('amount').value);
            const result = amount; // Simplified for demonstration
            document.getElementById('currencyResult').textContent = `Converted Amount: ${result.toFixed(2)}`;
        });
    }

    // Date Difference Calculator
    const dateForm = document.getElementById('dateForm');
    if (dateForm) {
        dateForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const date1 = new Date(document.getElementById('date1').value);
            const date2 = new Date(document.getElementById('date2').value);
            const diffTime = Math.abs(date2 - date1);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            document.getElementById('dateResult').textContent = `The difference is ${diffDays} day(s)`;
        });
    }

    // Loan EMI Calculator
    const loanForm = document.getElementById('loanForm');
    if (loanForm) {
        loanForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const principal = parseFloat(document.getElementById('principal').value);
            const rate = parseFloat(document.getElementById('rate').value) / 100 / 12;
            const time = parseFloat(document.getElementById('time').value) * 12;
            const emi = (principal * rate * Math.pow(1 + rate, time)) / (Math.pow(1 + rate, time) - 1);
            document.getElementById('loanResult').textContent = `Your EMI is ${emi.toFixed(2)}`;
        });
    }

    // Tip Calculator
    const tipForm = document.getElementById('tipForm');
    if (tipForm) {
        tipForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const billAmount = parseFloat(document.getElementById('billAmount').value);
            const tipPercent = parseFloat(document.getElementById('tipPercent').value) / 100;
            const tipAmount = billAmount * tipPercent;
            document.getElementById('tipResult').textContent = `Tip Amount: ${tipAmount.toFixed(2)}`;
        });
    }

    // Discount Calculator
    const discountForm = document.getElementById('discountForm');
    if (discountForm) {
        discountForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const originalPrice = parseFloat(document.getElementById('originalPrice').value);
            const discountPercent = parseFloat(document.getElementById('discountPercent').value) / 100;
            const discountAmount = originalPrice * discountPercent;
            const finalPrice = originalPrice - discountAmount;
            document.getElementById('discountResult').textContent = `Final Price: ${finalPrice.toFixed(2)}`;
        });
    }

    // Compound Interest Calculator
    const compoundForm = document.getElementById('compoundForm');
    if (compoundForm) {
        compoundForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const principal = parseFloat(document.getElementById('compoundPrincipal').value);
            const rate = parseFloat(document.getElementById('compoundRate').value) / 100;
            const time = parseFloat(document.getElementById('compoundTime').value);
            const n = parseFloat(document.getElementById('compoundN').value);
            const amount = principal * Math.pow(1 + rate / n, n * time);
            const interest = amount - principal;
            document.getElementById('compoundResult').textContent = `Compound Interest: ${interest.toFixed(2)}`;
        });
    }

    // Calorie Calculator
    const calorieForm = document.getElementById('calorieForm');
    if (calorieForm) {
        calorieForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const weight = parseFloat(document.getElementById('calorieWeight').value);
            const height = parseFloat(document.getElementById('calorieHeight').value);
            const age = parseFloat(document.getElementById('calorieAge').value);
            const gender = document.querySelector('input[name="gender"]:checked').value;
            let bmr;
            if (gender === 'male') {
                bmr = 88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age);
            } else {
                bmr = 447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age);
            }
            document.getElementById('calorieResult').textContent = `Your daily calorie needs are ${bmr.toFixed(2)} calories.`;
        });
    }

    // Time Zone Converter
    const timeForm = document.getElementById('timeForm');
    if (timeForm) {
        timeForm.addEventListener('submit', function(event) {
            event.preventDefault();
            // Mock timezone conversion logic for demonstration
            const localTime = document.getElementById('localTime').value;
            const timezone = document.getElementById('timezone').value;
            document.getElementById('timeResult').textContent = `Converted Time: ${localTime} in ${timezone}`;
        });
    }
});
