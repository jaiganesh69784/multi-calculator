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
            document.getElementById('loanResult').textContent = `Your EMI is ₹${emi.toFixed(2)}`;
        });
    }

    // Tip Calculator
    const tipForm = document.getElementById('tipForm');
    if (tipForm) {
        tipForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const billAmount = parseFloat(document.getElementById('billAmount').value);
            const tipPercentage = parseFloat(document.getElementById('tipPercentage').value);
            const tipAmount = (billAmount * tipPercentage) / 100;
            const totalAmount = billAmount + tipAmount;
            document.getElementById('tipResult').textContent = `Tip: ₹${tipAmount.toFixed(2)}, Total: ₹${totalAmount.toFixed(2)}`;
        });
    }

    // Discount Calculator
    const discountForm = document.getElementById('discountForm');
    if (discountForm) {
        discountForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const originalPrice = parseFloat(document.getElementById('originalPrice').value);
            const discountPercentage = parseFloat(document.getElementById('discountPercentage').value);
            const discountAmount = (originalPrice * discountPercentage) / 100;
            const finalPrice = originalPrice - discountAmount;
            document.getElementById('discountResult').textContent = `Discount: ₹${discountAmount.toFixed(2)}, Final Price: ₹${finalPrice.toFixed(2)}`;
        });
    }

    // Compound Interest Calculator
    const compoundInterestForm = document.getElementById('compoundInterestForm');
    if (compoundInterestForm) {
        compoundInterestForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const principal = parseFloat(document.getElementById('principalCI').value);
            const rate = parseFloat(document.getElementById('rateCI').value) / 100;
            const time = parseFloat(document.getElementById('timeCI').value);
            const n = parseFloat(document.getElementById('nCI').value);
            const amount = principal * Math.pow((1 + rate / n), n * time);
            const interest = amount - principal;
            document.getElementById('compoundInterestResult').textContent = `Interest: ₹${interest.toFixed(2)}, Total Amount: ₹${amount.toFixed(2)}`;
        });
    }

    // Calorie Calculator
    const calorieForm = document.getElementById('calorieForm');
    if (calorieForm) {
        calorieForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const weight = parseFloat(document.getElementById('weightCal').value);
            const height = parseFloat(document.getElementById('heightCal').value);
            const age = parseFloat(document.getElementById('ageCal').value);
            const gender = document.getElementById('genderCal').value;
            let bmr;
            if (gender === 'male') {
                bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
            } else {
                bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
            }
            document.getElementById('calorieResult').textContent = `Your BMR is ${bmr.toFixed(2)} calories/day`;
        });
    }

    // Time Zone Converter
    const timeZoneForm = document.getElementById('timeZoneForm');
    if (timeZoneForm) {
        timeZoneForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const time = document.getElementById('time').value;
            const fromTimeZone = document.getElementById('fromTimeZone').value;
            const toTimeZone = document.getElementById('toTimeZone').value;
            // Example conversion logic (mocked)
            const convertedTime = `${time} converted from ${fromTimeZone} to ${toTimeZone}`;
            document.getElementById('timeZoneResult').textContent = convertedTime;
        });
    }
});
