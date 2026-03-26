// Mobile Menu Logic
(function() {
  const mobileBtn = document.getElementById('mobile-menu-button');
  const closeBtn = document.getElementById('close-mobile-menu-button');
  const overlay = document.getElementById('mobile-menu-overlay');
  const menu = document.getElementById('mobile-menu');
  const icon = document.getElementById('mobile-menu-icon');
  const body = document.body;
  
  function toggleMenu() {
    overlay?.classList.toggle('hidden');
    menu?.classList.toggle('translate-x-full');
    if (icon) {
      if (icon.classList.contains('fa-bars')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
      } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    }
    body?.classList.toggle('overflow-hidden');
  }
  
  if (mobileBtn) mobileBtn.addEventListener('click', toggleMenu);
  if (closeBtn) closeBtn.addEventListener('click', toggleMenu);
  if (overlay) overlay.addEventListener('click', toggleMenu);
})();

// Animations: stats + skill bars
document.addEventListener('DOMContentLoaded', () => {
  // Stats animation for profile card
  const profileCard = document.getElementById('profile-card');
  if (profileCard) {
    const animateStats = () => {
      const statValues = profileCard.querySelectorAll('.stat-value[data-value]');
      statValues.forEach(stat => {
        const finalValue = parseInt(stat.getAttribute('data-value'), 10);
        const duration = 2000;
        const startTime = performance.now();
        const animate = (currentTime) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          stat.textContent = Math.floor(progress * finalValue).toLocaleString();
          if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
      });
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateStats();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    
    observer.observe(profileCard);
  }
  
  // Skill bars animation
  const skillItems = document.querySelectorAll('.skill-item');
  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const progressBar = entry.target.querySelector('.skill-progress');
        const percentageSpan = entry.target.querySelector('.skill-percentage');
        if (progressBar) {
          const target = progressBar.getAttribute('data-progress');
          progressBar.style.width = target + '%';
          if (percentageSpan) percentageSpan.textContent = target + '%';
        }
        skillObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  
  skillItems.forEach(item => skillObserver.observe(item));
  
  // Form handlers (demo mode)
  const contactForm = document.getElementById('contact-form');
  const newsletterForm = document.getElementById('newsletter-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Message sent! (Demo - no actual submission)');
      contactForm.reset();
    });
  }
  
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Subscribed! (Demo - no actual submission)');
      newsletterForm.reset();
    });
  }
});