document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Stop form from submitting to server

    // Reset errors
    document.getElementById('userError').innerText = "";
    document.getElementById('passError').innerText = "";

    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    let isValid = true;

    // --- Username Validation ---
    // Rules: 8+ chars, 1 Block (A-Z), 1 Small (a-z), 1 Special, 1 Number
    const userRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;
    
    if (!userRegex.test(user)) {
        document.getElementById('userError').innerText = "Must be 8+ chars with Upper, Lower, Number, and Special char.";
        isValid = false;
    }

    // --- Password Validation ---
    // Rules: 8+ chars, 1 Block (A-Z), 1 Special
    const passRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;

    if (!passRegex.test(pass)) {
        document.getElementById('passError').innerText = "Must be 8+ chars with at least one Upper and one Special char.";
        isValid = false;
    }

    if (isValid) {
        alert("Validation Successful! Logging in...");
        // this.submit(); 
    }
});