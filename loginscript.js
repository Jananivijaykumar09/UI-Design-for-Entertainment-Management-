function validateForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const usernameError = document.getElementById('username-error');
    const passwordError = document.getElementById('password-error');

    // Reset any previous error messages
    usernameError.textContent = '';
    passwordError.textContent = '';

    // Check if username contains '@'
    if (!username.includes('@')) {
        usernameError.textContent = 'Username must contain "@" symbol';
        return false;
    }

    // Check if password is at least 8 characters long
    if (password.length < 8) {
        passwordError.textContent = 'Password must be at least 8 characters long';
        return false;
    }

    // If all validations pass, form submission proceeds
    return true;
}