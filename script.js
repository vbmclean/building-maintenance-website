// script.js

// Smooth Scrolling Navigation
const smoothScroll = (target) => {
    document.querySelector(target).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
};

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        smoothScroll(this.getAttribute('href'));
    });
});

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Form Validation
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    let valid = true;
    const email = form.querySelector('input[type="email"]').value;
    const name = form.querySelector('input[name="name"]').value;
    
    if (name === '') {
        valid = false;
        alert('Name is required.');
    }
    if (email === '') {
        valid = false;
        alert('Email is required.');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        valid = false;
        alert('Email is invalid.');
    }
    
    if (!valid) {
        e.preventDefault();
    }
});
