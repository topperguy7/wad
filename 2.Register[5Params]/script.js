document.getElementById('registrationForm').addEventListener('submit', function(event) {
    // Prevent the form from actually submitting so we can validate
    event.preventDefault();

    // Clear previous errors
    const errorMessages = document.querySelectorAll('.error-msg');
    errorMessages.forEach(msg => msg.style.display = 'none');
    
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => input.classList.remove('error'));

    let isValid = true;

    // 1. First Name Validation (Alphabets only, min 6 chars)
    const firstName = document.getElementById('firstName');
    const nameRegex = /^[A-Za-z]+$/;
    if (firstName.value.length < 6 || !nameRegex.test(firstName.value)) {
        showError(firstName, "Must be alphabets only and at least 6 characters long.");
        isValid = false;
    }

    // 2. Password Validation (min 6 chars)
    const password = document.getElementById('password');
    if (password.value.length < 6) {
        showError(password, "Password must be at least 6 characters.");
        isValid = false;
    }

    // 3. Email Validation (name@domain.com pattern)
    const email = document.getElementById('email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        showError(email, "Please enter a valid email (e.g., name@domain.com).");
        isValid = false;
    }

    // 4. Mobile Number (Exactly 10 digits)
    const mobile = document.getElementById('mobile');
    const mobileRegex = /^[0-9]{10}$/;
    if (!mobileRegex.test(mobile.value)) {
        showError(mobile, "Mobile number must be exactly 10 digits.");
        isValid = false;
    }

    // 5. Last Name and Address (Should not be empty)
    const lastName = document.getElementById('lastName');
    if (lastName.value.trim() === "") {
        showError(lastName, "Last Name cannot be empty.");
        isValid = false;
    }

    const address = document.getElementById('address');
    if (address.value.trim() === "") {
        showError(address, "Address cannot be empty.");
        isValid = false;
    }

    // If all checks pass
    if (isValid) {
        alert("Registration Successful!");
        // this.submit(); // Uncomment to actually send the data
    }
});

// Helper function to show errors
function showError(input, message) {
    const container = input.parentElement;
    const errorDisplay = container.querySelector('.error-msg');
    errorDisplay.innerText = message;
    errorDisplay.style.display = 'block';
    input.classList.add('error');
}