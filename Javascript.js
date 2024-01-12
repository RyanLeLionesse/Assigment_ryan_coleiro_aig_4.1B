$(document).ready(function () {
    // Handle login button click
    $("#login-form button").click(function () {
        validateAndLogin();
    });

    // Handle "Forgot Email/Password" link click
    $("#forgot-link").click(function () {
        alert("Forgot Email/Password functionality goes here");
        // Implement the logic for handling forgot email/password
    });

    // Handle "Not Registered" link click
    $("#not-registered-link").click(function () {
        window.location.href = "Register.html"; // Redirect to the 'Register' screen
    });
});

function validateAndLogin() {
    var username = $("#username").val();
    var password = $("#password").val();

    // Basic validation (you can customize this based on your requirements)
    if (username === "" || password === "") {
        alert("Please enter both username/email and password");
    } else {
        // Validation successful, proceed with login
        login();
    }
}

function login() {
    alert("You are logged in");
    window.location.href = "Games.html"; // Redirect to the 'Games' screen
}


/*The Bellow Is Used For Register:*/

function validateAndRegister() {
    var nameRegex = /^[A-Za-z][A-Za-z ]+$/;
    var phoneRegex = /^[0-9]+$/;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    var name = $("#name").val();
    var surname = $("#surname").val();
    var phone = $("#phone").val();
    var email = $("#email").val();

    // Basic validation
    if (!nameRegex.test(name) || !nameRegex.test(surname) || !phoneRegex.test(phone) || !emailRegex.test(email)) {
        alert("Please enter valid information in all fields.");
    } else {
        // Validation successful, proceed with registration
        registrationSuccessful();
    }
}

function registrationSuccessful() {
    alert("Registration successful!");
    // Additional logic for submitting registration data to the server if needed
}
