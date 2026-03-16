export const MobileMenu = {
    init() {
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const closeMobileMenuButton = document.getElementById('close-mobile-menu-button');
        const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileMenuIcon = document.getElementById('mobile-menu-icon');
        const body = document.body;

        const toggleMobileMenu = () => {
            mobileMenuOverlay?.classList.toggle('hidden');
            mobileMenu?.classList.toggle('translate-x-full');
            mobileMenuIcon?.classList.toggle('fa-bars');
            mobileMenuIcon?.classList.toggle('fa-times');
            body?.classList.toggle('overflow-hidden');
        };

        mobileMenuButton?.addEventListener('click', toggleMobileMenu);
        closeMobileMenuButton?.addEventListener('click', toggleMobileMenu);
        mobileMenuOverlay?.addEventListener('click', toggleMobileMenu);
    }
};