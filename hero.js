const heroHTML = `
<section id="hero-section" class="flex min-h-[70vh] flex-col items-center justify-center py-12 text-center">
    <div id="hero-content" class="max-w-4xl px-4">
        <h1 id="typewriter-title" class="mb-6 font-mono text-4xl font-bold leading-tight text-heading md:text-5xl lg:text-7xl min-h-[3em]">
        </h1>
        
        <p id="hero-description" class="mx-auto mb-10 max-w-2xl text-lg text-text-light md:text-xl lg:text-2xl opacity-0 transition-opacity duration-1000">
            Welcome to Echo, the personal portfolio of John Ogletree. I build modern, high-performance web experiences that blend aesthetic design with technical excellence.
        </p>
        
        <div id="hero-cta-container" class="flex flex-col items-center justify-center gap-4 sm:flex-row opacity-0 transition-opacity duration-1000">
            <a href="/projects/index" class="inline-flex w-full items-center justify-center rounded-md bg-accent px-8 py-4 font-mono font-bold text-bg transition-transform hover:scale-105 sm:w-auto">
                Explore Projects
            </a>
            <a href="/#connect-section" class="inline-flex w-full items-center justify-center rounded-md border-2 border-heading px-8 py-4 font-mono font-bold text-heading transition-colors hover:bg-heading hover:text-text sm:w-auto">
                Get in Touch
            </a>
        </div>
    </div>
</section>
`;

// Inject the Hero HTML
document.getElementById('hero-container').innerHTML = heroHTML;

// Typewriter Logic
const titleElement = document.getElementById('typewriter-title');
const subtext = document.getElementById('hero-description');
const cta = document.getElementById('hero-cta-container');
const text = "Crafting Digital Solutions with Precision_";
let i = 0;

function typeWriter() {
    if (i < text.length) {
        titleElement.innerHTML = text.substring(0, i + 1);
        i++;
        setTimeout(typeWriter, Math.random() * 50 + 50);
    } else {
        titleElement.innerHTML = text.replace('_', '<span class="animate-pulse">_</span>');
        subtext.classList.replace('opacity-0', 'opacity-100');
        cta.classList.replace('opacity-0', 'opacity-100');
    }
}

// Start the sequence
setTimeout(typeWriter, 800);
