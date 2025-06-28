// main.js

// Example micro-interactions and scroll-triggered effects

document.addEventListener('DOMContentLoaded', () => {
  
  // Button click feedback
  document.querySelectorAll('button').forEach(button => {
    button.addEventListener('mousedown', () => {
      button.style.transform = 'scale(0.97)';
    });
    button.addEventListener('mouseup', () => {
      button.style.transform = 'scale(1)';
    });
    button.addEventListener('mouseleave', () => {
      button.style.transform = 'scale(1)';
    });
  });

  // Lazy load images (example)
  const lazyImages = document.querySelectorAll('img[data-src]');
  const config = {
    rootMargin: '0px 0px 50px 0px',
    threshold: 0.01
  };

  let imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        observer.unobserve(img);
      }
    });
  }, config);

  lazyImages.forEach(img => {
    imageObserver.observe(img);
  });

  // Optional: Any other micro animations or event listeners can be added here
  
});
