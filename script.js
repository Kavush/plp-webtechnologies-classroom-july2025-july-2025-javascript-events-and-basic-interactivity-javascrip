// Part 1: JavaScript Event Handling

// Click event demo
const clickDemo = document.getElementById('clickDemo');
clickDemo.addEventListener('click', function() {
    this.innerHTML = '<p>You clicked! Great job!</p>';
    this.style.backgroundColor = '#e8f5e9';
});

// Mouseover event demo
const mouseoverDemo = document.getElementById('mouseoverDemo');
mouseoverDemo.addEventListener('mouseover', function() {
    this.innerHTML = '<p>Mouse detected! Well done!</p>';
    this.style.backgroundColor = '#fff3e0';
});

mouseoverDemo.addEventListener('mouseout', function() {
    this.innerHTML = '<p>Hover your mouse over this box</p>';
    this.style.backgroundColor = '';
});

// Keypress event demo
const keypressDemo = document.getElementById('keypressDemo');
const lastKey = document.getElementById('lastKey');

document.addEventListener('keydown', function(event) {
    lastKey.textContent = event.key;
    keypressDemo.style.backgroundColor = '#e3f2fd';
    
    // Reset after a short delay
    setTimeout(() => {
        keypressDemo.style.backgroundColor = '';
    }, 300);
});

// Reset events button
const resetEvents = document.getElementById('resetEvents');
resetEvents.addEventListener('click', function() {
    clickDemo.innerHTML = '<p>Click anywhere in this box</p>';
    clickDemo.style.backgroundColor = '';
    
    mouseoverDemo.innerHTML = '<p>Hover your mouse over this box</p>';
    mouseoverDemo.style.backgroundColor = '';
    
    lastKey.textContent = 'None';
    keypressDemo.style.backgroundColor = '';
});

// Part 2: Interactive Elements

// Theme toggle functionality
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        themeToggle.textContent = '☀️ Light Mode';
    } else {
        themeToggle.textContent = '🌙 Dark Mode';
    }
});

// Counter game functionality
const counterValue = document.getElementById('counterValue');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');

let count = 0;

incrementBtn.addEventListener('click', function() {
    count++;
    counterValue.textContent = count;
    
    if (count > 0) {
        counterValue.style.color = '#2ecc71';
    } else if (count < 0) {
        counterValue.style.color = '#e74c3c';
    } else {
        counterValue.style.color = '';
    }
});

decrementBtn.addEventListener('click', function() {
    count--;
    counterValue.textContent = count;
    
    if (count > 0) {
        counterValue.style.color = '#2ecc71';
    } else if (count < 0) {
        counterValue.style.color = '#e74c3c';
    } else {
        counterValue.style.color = '';
    }
});

// FAQ section functionality
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', function() {
        const faqItem = this.parentElement;
        faqItem.classList.toggle('active');
        
        const icon = this.querySelector('span:last-child');
        if (faqItem.classList.contains('active')) {
            icon.textContent = '-';
        } else {
            icon.textContent = '+';
        }
    });
});

// Tab interface functionality
const tabHeaders = document.querySelectorAll('.tab-header');
const tabContents = document.querySelectorAll('.tab-content');

tabHeaders.forEach(header => {
    header.addEventListener('click', function() {
        const tabId = this.getAttribute('data-tab');
        
        // Remove active class from all headers and contents
        tabHeaders.forEach(h => h.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));
        
        // Add active class to clicked header and corresponding content
        this.classList.add('active');
        document.getElementById(tabId).classList.add('active');
    });
});

// Part 3: Form Validation
const form = document.getElementById('validationForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const phoneInput = document.getElementById('phone');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const phoneError = document.getElementById('phoneError');
const formSuccess = document.getElementById('formSuccess');

// Validation functions
function validateName() {
    const nameRegex = /^[a-zA-Z\s]{2,}$/;
    if (!nameRegex.test(nameInput.value.trim())) {
        nameError.style.display = 'block';
        return false;
    } else {
        nameError.style.display = 'none';
        return true;
    }
}

function validateEmail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
        emailError.style.display = 'block';
        return false;
    } else {
        emailError.style.display = 'none';
        return true;
    }
}

function validatePassword() {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(passwordInput.value)) {
        passwordError.style.display = 'block';
        return false;
    } else {
        passwordError.style.display = 'none';
        return true;
    }
}

function validatePhone() {
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phoneInput.value.trim())) {
        phoneError.style.display = 'block';
        return false;
    } else {
        phoneError.style.display = 'none';
        return true;
    }
}

// Real-time validation
nameInput.addEventListener('input', validateName);
emailInput.addEventListener('input', validateEmail);
passwordInput.addEventListener('input', validatePassword);
phoneInput.addEventListener('input', validatePhone);

// Form submission
form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    const isPhoneValid = validatePhone();
    
    if (isNameValid && isEmailValid && isPasswordValid && isPhoneValid) {
        formSuccess.style.display = 'block';
        
        // Reset form after success
        setTimeout(() => {
            form.reset();
            formSuccess.style.display = 'none';
        }, 3000);
    }
});