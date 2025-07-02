// Wait for the user to click the "Calculate BMI" button
document.getElementById('calculateBtn').addEventListener('click', function() {

    // Get the user input values for weight and height
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    // Input validation: check if values are valid positive numbers
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        document.getElementById('result').textContent = 'Please enter valid positive numbers for weight and height.';
        return; // Stop further calculation if inputs are invalid
    }

    // Convert height from cm to meters for BMI formula
    const heightInMeters = height / 100;

    // Calculate BMI using the formula: BMI = weight / (height in meters squared)
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2); // Round to 2 decimal places

    let category = '';

    // Determine BMI category based on BMI value
    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 25) {
        category = 'Normal weight';
    } else if (bmi >= 25 && bmi < 30) {
        category = 'Overweight';
    } else {
        category = 'Obese';
    }

    // Display the result message in the result section
    document.getElementById('result').textContent = `Your BMI is ${bmi} (${category})`;
});
