function validateForm() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var usernameErrorElement = document.getElementById("username-error");
    var emailErrorElement = document.getElementById("email-error");
    var passwordErrorElement = document.getElementById("password-error");

    // Reset error messages
    usernameErrorElement.innerHTML = "";
    emailErrorElement.innerHTML = "";
    passwordErrorElement.innerHTML = "";

    // Define validation rules
    var usernamePattern = /^[a-zA-Z0-9_@]+$/; // Alphanumeric characters, underscores, and @ symbol allowed
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email format

    // Check username
    if (!usernamePattern.test(username)) {
        usernameErrorElement.innerHTML = "Username must contain only letters, numbers, underscores, and @ symbol.";
        return false;
    }

    // Check email
    if (!emailPattern.test(email)) {
        emailErrorElement.innerHTML = "Please enter a valid email address.";
        return false;
    }

    // Check password length
    if (password.length < 8) {
        passwordErrorElement.innerHTML = "Password must be at least 8 characters long.";
        return false;
    }

    return true;
}
