// Wait for the user to click the "Calculate Compound Interest" button
document.getElementById('compoundBtn').addEventListener('click', function() {

    // Get user input values
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value);
    const time = parseFloat(document.getElementById('time').value);
    const frequency = parseFloat(document.getElementById('frequency').value);

    // Validate input: check if all inputs are positive numbers
    if (isNaN(principal) || isNaN(rate) || isNaN(time) || isNaN(frequency) ||
        principal <= 0 || rate <= 0 || time <= 0 || frequency <= 0) {
        document.getElementById('compoundResult').textContent = 'Please enter valid positive numbers in all fields.';
        return; // Stop if input is invalid
    }

    // Calculate compound interest using the formula: A = P (1 + r/n)^(nt)
    const r = rate / 100; // Convert rate to decimal
    const amount = principal * Math.pow((1 + r / frequency), frequency * time);
    const compoundInterest = (amount - principal).toFixed(2); // Calculate interest earned

    // Display the result
    document.getElementById('compoundResult').textContent = `Compound Interest: $${compoundInterest}`;
});
