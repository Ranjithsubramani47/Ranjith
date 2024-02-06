// You can add JavaScript code here for any interactivity

// Example: Add smooth scrolling functionality to navigation links
   // Smooth scrolling functionality
    // Smooth scrolling functionality
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();

          const target = document.querySelector(this.getAttribute('href'));

          window.scrollTo({
              top: target.offsetTop,
              behavior: 'smooth'
          });
      });
  });