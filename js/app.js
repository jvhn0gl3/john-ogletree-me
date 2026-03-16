// Main app controller
import { Header } from './components/header.js';
import { Hero } from './components/hero.js';
import { Profile } from './components/profile.js';
import { Services } from './components/services.js';
import { Projects } from './components/projects.js';
import { Connect } from './components/connect.js';
import { Blog } from './components/blog.js';
import { Resume } from './components/resume.js';
import { FAQ } from './components/faq.js';
import { Footer } from './components/footer.js';
import { MobileMenu } from './utils/mobile-menu.js';
import { initAnimations } from './utils/animations.js';

class App {
    constructor() {
        this.root = document.getElementById('app-root');
        this.components = [
            Header,
            Hero,
            Profile,
            Services,
            Projects,
            Connect,
            Blog,
            Resume,
            FAQ,
            Footer
        ];
    }

    init() {
        this.render();
        this.attachGlobalScripts();
        MobileMenu.init();
        initAnimations();
    }

    render() {
        this.root.innerHTML = this.components.map(Component => Component.render()).join('');
    }

    attachGlobalScripts() {
        // Google Analytics
        const gtagScript = document.createElement('script');
        gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-FY6WZRNX8M';
        gtagScript.async = true;
        document.head.appendChild(gtagScript);

        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-FY6WZRNX8M');

        // Service Worker
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/service-worker.js')
                .then(reg => console.log('SW registered:', reg))
                .catch(err => console.error('SW failed:', err));
        }
    }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const app = new App();
    app.init();
});