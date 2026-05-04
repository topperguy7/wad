// Populate Days (1-31) and Years (1950-2026)
const daySelect = document.getElementById('day');
const yearSelect = document.getElementById('year');

for (let i = 1; i <= 31; i++) {
    let opt = document.createElement('option');
    opt.value = i; opt.innerHTML = i;
    daySelect.appendChild(opt);
}

for (let i = 2026; i >= 1950; i--) {
    let opt = document.createElement('option');
    opt.value = i; opt.innerHTML = i;
    yearSelect.appendChild(opt);
}

// Form Validation Logic
document.getElementById('registrationForm').addEventListener('submit', function(e) {
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    
    // Email Regex Pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Mobile Number Validation (Exactly 10 digits)
    const phonePattern = /^[0-9]{10}$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        e.preventDefault();
    } else if (!phonePattern.test(phone)) {
        alert("Mobile number must be exactly 10 digits.");
        e.preventDefault();
    } else {
        alert("Registration Successful!");
    }
});