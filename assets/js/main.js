import DATA from './data.js';

document.addEventListener('DOMContentLoaded', () => {
    const heroSlot = document.getElementById('hero-slot');
    const dataSlot = document.getElementById('data-slot');
    
    // Identify which page we are on
    const path = window.location.pathname;
    const page = path.split("/").pop().replace(".html", "") || "index";

    // 1. Inject Hero Content
    if (heroSlot) {
        const heroData = page === "index" ? DATA.profile : DATA.pages[page];
        heroSlot.innerHTML = `
            <h1 class="text-5xl font-bold text-heading md:text-7xl mb-4">${heroData.name || heroData.title}</h1>
            <p class="text-text-light text-xl max-w-2xl">${heroData.bio || heroData.description}</p>
        `;
    }

    // 2. Inject Contextual Data (Skills on Index, Projects on Projects page)
    if (dataSlot) {
        if (page === "index") {
            renderItems(DATA.skills, 'skill');
        } else if (page === "projects") {
            renderItems(DATA.projects, 'project');
        }
    }

    function renderItems(items, type) {
        dataSlot.innerHTML = items.map(item => `
            <div class="fade-in-up border border-border bg-surface p-6 rounded-lg">
                <h3 class="text-heading font-bold mb-2">${item.title || item.name}</h3>
                <p class="text-sm text-text-light">${item.description || ''}</p>
                ${type === 'skill' ? `<div class="w-full bg-border h-1 mt-4"><div class="bg-accent h-full skill-progress" data-progress="${item.progress}"></div></div>` : ''}
            </div>
        `).join('');
        observeElements();
    }

    function observeElements() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    const bar = entry.target.querySelector('.skill-progress');
                    if (bar) bar.style.width = bar.getAttribute('data-progress') + '%';
                }
            });
        }, { threshold: 0.1 });
        document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));
    }
});
