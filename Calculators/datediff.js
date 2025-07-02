// Wait for the user to click the "Calculate Difference" button
document.getElementById('dateDiffBtn').addEventListener('click', function () {

    // Get the start and end date inputs
    const startDateInput = document.getElementById('startdate').value;
    const endDateInput = document.getElementById('enddate').value;

    // Validate input: check if both dates are selected
    if (!startDateInput || !endDateInput) {
        document.getElementById('dateDiffResult').textContent = 'Please select both dates.';
        return; // Stop if input is invalid
    }

    // Convert inputs to Date objects
    const startDate = new Date(startDateInput);
    const endDate = new Date(endDateInput);

    // Check if end date is after start date
    if (endDate < startDate) {
        document.getElementById('dateDiffResult').textContent = 'End date must be after start date.';
        return;
    }

    // Calculate the difference in time
    const diffInTime = endDate.getTime() - startDate.getTime();

    // Convert time difference to days
    const diffInDays = Math.ceil(diffInTime / (1000 * 3600 * 24));

    // Display the result
    document.getElementById('dateDiffResult').textContent = `Difference: ${diffInDays} day(s).`;
});
