function submitForm() {
    // Get user input
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;

    // Create an object to store user details
    var userDetails = {
        firstName: firstName,
        lastName: lastName
    };

    // Retrieve existing user details from local storage (if any)
    var existingDetails = localStorage.getItem('userDetails');

    // If there are existing details and it's an array, parse them from JSON
    // Otherwise, initialize an empty array
    var userDetailsArray = existingDetails ? JSON.parse(existingDetails) : [];

    // Check if userDetailsArray is an array
    if (!Array.isArray(userDetailsArray)) {
        userDetailsArray = []; // If not, initialize an empty array
    }

    // Add the new user details to the array
    userDetailsArray.push(userDetails);

    // Convert the array to a JSON string
    var userDetailsString = JSON.stringify(userDetailsArray);

    // Store the JSON string in local storage
    localStorage.setItem('userDetails', userDetailsString);

    // Optional: You can also console log the stored data
    console.log('User details stored:', userDetailsArray);

    // Optionally, you can redirect to another page or perform other actions
}
