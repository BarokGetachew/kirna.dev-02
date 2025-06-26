// js/main.js

// Smart Navbar Scroll
let prevScroll = window.scrollY;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;
  if (currentScroll > prevScroll) {
    navbar.style.transform = 'translateY(-100%)';
  } else {
    navbar.style.transform = 'translateY(0)';
  }
  prevScroll = currentScroll;
});
