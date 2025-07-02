// Wait for the user to click the "Calculate Age" button
document.getElementById('ageBtn').addEventListener('click', function () {

    // Get user's birthdate input
    const birthdateInput = document.getElementById('birthdate').value;

    // Validate input: check if a date is selected
    if (!birthdateInput) {
        document.getElementById('ageResult').textContent = 'Please select your birthdate.';
        return; // Stop if input is invalid
    }

    // Convert input to Date object
    const birthdate = new Date(birthdateInput);
    const today = new Date();

    // Calculate age by comparing years
    let age = today.getFullYear() - birthdate.getFullYear();
    const monthDifference = today.getMonth() - birthdate.getMonth();

    // Adjust age if birthday hasn’t occurred yet this year
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthdate.getDate())) {
        age--;
    }

    // Display the result
    document.getElementById('ageResult').textContent = `Your age is ${age} years.`;
});
