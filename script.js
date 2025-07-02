// ============================
// Show the selected calculator instantly (no loader)
// ============================
function showCalculator(calculator) {
    const calculators = document.querySelectorAll('.calculator');

    // Hide all calculators
    calculators.forEach(section => section.classList.add('hidden'));

    // Show the selected calculator
    const selectedSection = document.getElementById(`${calculator}-calculator`);
    if (selectedSection) {
        selectedSection.classList.remove('hidden');
    }

    // Highlight the Active Button
    const buttons = document.querySelectorAll('.nav-scroll button');
    buttons.forEach(button => button.classList.remove('active'));

    const activeButton = document.querySelector(`button[onclick="showCalculator('${calculator}')"]`);
    if (activeButton) {
        activeButton.classList.add('active');
    }
}

// ============================
// Show BMI calculator by default on page load
// ============================
window.addEventListener('DOMContentLoaded', () => {
    showCalculator('bmi');
});
