export const FAQ = {
    render() {
        return `
            <section class="faq-section">
                <h2 class="m-0 mt-14 mb-6 border-b border-border pb-2 font-mono font-medium text-heading text-xl before:mr-2 before:font-normal before:text-text-light before:content-['##'] md:text-2xl">
                    Frequently Asked Questions
                </h2>
                
                <div>
                    ${this.faqs.map((faq, index) => `
                        <details class="mb-4 rounded-lg border border-border bg-surface p-6 group">
                            <summary class="flex cursor-pointer list-none items-center justify-between text-lg font-bold text-accent hover:text-heading after:text-2xl after:font-normal after:transition-transform after:duration-200 after:ease-out after:content-['+'] open:after:rotate-45">
                                ${faq.question}
                            </summary>
                            <div class="pt-4 leading-relaxed text-text-light">
                                <p class="mb-4">${faq.answer}</p>
                            </div>
                        </details>
                    `).join('')}
                </div>
            </section>
        `;
    },

    faqs: [
        {
            question: 'What is your current availability for new projects?',
            answer: 'I am currently available for new freelance projects and contract roles. If you have an interesting challenge, feel free to reach out via the contact form above.'
        },
        {
            question: 'What technologies are you most excited about right now?',
            answer: "I'm particularly excited about the evolution of edge computing and frameworks like Astro. On the design front, I'm closely following advancements in generative AI tools."
        },
        {
            question: 'Where are you located?',
            answer: 'I am based in Martinez, Georgia, and am available for remote work globally. I am also open to hybrid opportunities in the Augusta metropolitan area.'
        },
        {
            question: 'Can we see more of your work?',
            answer: 'Absolutely! You can view a more extensive collection of my work on the dedicated <a href="/projects/index" class="text-accent underline hover:text-heading transition-colors">creations page</a>.'
        }
    ]
};