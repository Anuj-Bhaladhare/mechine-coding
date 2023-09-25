
// JavaScript to handle form submission
document.getElementById("registrationForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form values
    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Perform form validation (you can add more validation as needed)

    // Create an object to store user data
    var userData = {
        fullName: fullName,
        email: email,
        password: password
    };

    // You can send this data to a server for further processing or store it locally
    console.log(userData);

    // Reset the form
    document.getElementById("registrationForm").reset();
});
