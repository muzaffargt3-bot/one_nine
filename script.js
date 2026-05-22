// script.js

// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

// Fade in elements on scroll
const fadeElements = document.querySelectorAll('.fade-in-on-scroll');

const fadeOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.2
};

const fadeObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('appear');
      observer.unobserve(entry.target);
    }
  });
}, fadeOptions);

fadeElements.forEach(el => {
  fadeObserver.observe(el);
});

// Setup images dynamically if they exist
document.addEventListener("DOMContentLoaded", () => {
  const heroBg = document.getElementById('heroBg');
  if (heroBg) {
    heroBg.style.backgroundImage = "url('images/portfolio_1.jpg')";
  }
  
  const aboutImg = document.getElementById('aboutImg');
  if (aboutImg) {
    aboutImg.src = "images/portfolio_2.png";
  }
});
