document.addEventListener('DOMContentLoaded', function() {
    // 1. Stats Counter Logic
    const statItems = document.querySelectorAll('.stat-value[data-value]');
    if (statItems.length > 0) {
        const statObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = entry.target;
                    const finalVal = parseInt(target.getAttribute('data-value'));
                    let current = 0;
                    const duration = 2000; // 2 seconds
                    const stepTime = Math.abs(Math.floor(duration / finalVal));
                    
                    const timer = setInterval(() => {
                        current += Math.ceil(finalVal / 50); 
                        if (current >= finalVal) {
                            target.innerText = finalVal.toLocaleString();
                            clearInterval(timer);
                        } else {
                            target.innerText = current.toLocaleString();
                        }
                    }, 30);
                    statObserver.unobserve(target);
                }
            });
        }, { threshold: 0.5 });
        statItems.forEach(item => statObserver.observe(item));
    }

    // 2. Skill Bar Progress Logic
    const skillBars = document.querySelectorAll('.skill-progress');
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const progress = bar.getAttribute('data-progress');
                bar.style.width = progress + '%';
                skillObserver.unobserve(bar);
            }
        });
    }, { threshold: 0.2 });
    skillBars.forEach(bar => skillObserver.observe(bar));
});
