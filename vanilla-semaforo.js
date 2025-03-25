document.addEventListener('DOMContentLoaded', () => {
  // Initialize Feather icons
  feather.replace();
  
  // Animation for revealing elements when they come into view
  const revealElements = document.querySelectorAll('.reveal');
  
  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const revealPoint = 150;
    
    revealElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      
      if (elementTop < windowHeight - revealPoint) {
        element.classList.add('active');
      }
    });
  };
  
  // Initial check on load
  revealOnScroll();
  
  // Check on scroll
  window.addEventListener('scroll', revealOnScroll);
 
  
  
}); 