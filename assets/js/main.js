document.addEventListener('DOMContentLoaded', function() {
    // 1. Mobile Menu Elements
    const btn = document.getElementById('mobile-menu-button');
    const closeBtn = document.getElementById('close-mobile-menu');
    const menu = document.getElementById('mobile-menu');
    const overlay = document.getElementById('mobile-menu-overlay');
    const icon = document.getElementById('mobile-menu-icon');

    function toggleMenu() {
        if (!menu || !overlay) return;
        
        const isOpening = menu.classList.contains('translate-x-full');
        
        if (isOpening) {
            menu.classList.remove('translate-x-full', 'opacity-0');
            overlay.classList.remove('hidden');
            if (icon) icon.className = 'fa-solid fa-times h-6 w-6';
            document.body.style.overflow = 'hidden';
        } else {
            menu.classList.add('translate-x-full', 'opacity-0');
            overlay.classList.add('hidden');
            if (icon) icon.className = 'fa-solid fa-bars h-6 w-6';
            document.body.style.overflow = '';
        }
    }

    // Attach listeners with null-checks
    btn?.addEventListener('click', toggleMenu);
    closeBtn?.addEventListener('click', toggleMenu);
    overlay?.addEventListener('click', toggleMenu);

    // 2. Stats & Animations Logic (from previous version)
    const statItems = document.querySelectorAll('.stat-value[data-value]');
    if (statItems.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = entry.target;
                    const val = parseInt(target.getAttribute('data-value'));
                    // Simple count up
                    let count = 0;
                    const interval = setInterval(() => {
                        count += Math.ceil(val / 20);
                        if (count >= val) {
                            target.innerText = val;
                            clearInterval(interval);
                        } else {
                            target.innerText = count;
                        }
                    }, 50);
                    observer.unobserve(target);
                }
            });
        }, { threshold: 0.5 });
        statItems.forEach(item => observer.observe(item));
    }
});
