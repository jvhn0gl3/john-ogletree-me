document.addEventListener('DOMContentLoaded', function() {
    
    // --- Mobile Menu Logic ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const closeMobileMenuButton = document.getElementById('close-mobile-menu-button');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuIcon = document.getElementById('mobile-menu-icon');
    const body = document.body;

    const toggleMobileMenu = () => {
        mobileMenuOverlay?.classList.toggle('hidden');
        mobileMenu?.classList.toggle('translate-x-full');
        mobileMenu?.classList.toggle('opacity-0');
        mobileMenuIcon?.classList.toggle('fa-bars');
        mobileMenuIcon?.classList.toggle('fa-times');
        body.classList.toggle('overflow-hidden');
    };

    [mobileMenuButton, closeMobileMenuButton, mobileMenuOverlay].forEach(btn => {
        btn?.addEventListener('click', toggleMobileMenu);
    });

    // --- Profile Stats Counter ---
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
            if (entries[0].isIntersecting) {
                animateStats();
                observer.unobserve(entries[0].target);
            }
        }, { threshold: 0.5 });
        observer.observe(profileCard);
    }

    // --- Animated Skill Bars ---
    const skillItems = document.querySelectorAll('.skill-item');
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target.querySelector('.skill-progress');
                const skillPercentage = entry.target.querySelector('.skill-percentage');
                const targetWidth = progressBar.getAttribute('data-progress');
                entry.target.classList.add('visible');
                progressBar.style.width = targetWidth + '%';
                if(skillPercentage) skillPercentage.textContent = targetWidth + '%';
                skillObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    skillItems.forEach(item => skillObserver.observe(item));
});
