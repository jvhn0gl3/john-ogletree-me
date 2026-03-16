export function initAnimations() {
    // Profile stats animation
    const profileCard = document.getElementById('profile-card');
    if (profileCard) {
        const animateStats = () => {
            const statValues = profileCard.querySelectorAll('.stat-value[data-value]');
            statValues.forEach(stat => {
                const finalValue = parseInt(stat.getAttribute('data-value'), 10);
                const duration = 2000;
                const startTime = performance.now();
                
                const animate = (currentTime) => {
                    const elapsedTime = currentTime - startTime;
                    const progress = Math.min(elapsedTime / duration, 1);
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
                const skillPercentage = entry.target.querySelector('.skill-percentage');
                const targetWidth = progressBar.getAttribute('data-progress');
                progressBar.style.width = targetWidth + '%';
                skillPercentage.textContent = targetWidth + '%';
                skillObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    skillItems.forEach(item => {
        skillObserver.observe(item);
    });

    // Form submissions
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
}