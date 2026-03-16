export const Connect = {
    render() {
        return `
            <section id="connect-section" class="forms-section">
                <h2 id="connect-heading" class="m-0 mt-14 mb-6 border-b border-border pb-2 font-mono font-medium text-heading text-xl before:mr-2 before:font-normal before:text-text-light before:content-['##'] md:text-2xl">
                    Connect
                </h2>
                
                <div id="connect-grid" class="grid grid-cols-1 items-start gap-6 lg:grid-cols-2">
                    <!-- Contact Form -->
                    <div id="contact-form-card" class="rounded-lg border border-border bg-surface p-8">
                        <h3 class="m-0 mb-2 font-mono text-xl font-bold text-accent">Contact Me</h3>
                        <p class="mb-4 text-text-light">Have a question or a project in mind? Let's talk. I'm always open to discussing new ideas and opportunities.</p>
                        
                        <form id="contact-form" action="#" method="POST" class="contact-form">
                            <div class="mb-6">
                                <label for="name" class="mb-2 block text-sm font-medium text-text">Name</label>
                                <input type="text" id="name" name="name" required 
                                       class="box-border w-full rounded-md border border-border bg-surface p-3 font-mono text-base text-text focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/50">
                            </div>
                            <div class="mb-6">
                                <label for="email" class="mb-2 block text-sm font-medium text-text">Email</label>
                                <input type="email" id="email" name="email" required 
                                       class="box-border w-full rounded-md border border-border bg-surface p-3 font-mono text-base text-text focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/50">
                            </div>
                            <div class="mb-6">
                                <label for="message" class="mb-2 block text-sm font-medium text-text">Message</label>
                                <textarea id="message" name="message" rows="5" required 
                                          class="box-border w-full min-h-[7.5rem] resize-y rounded-md border border-border bg-surface p-3 font-mono text-base text-text focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/50"></textarea>
                            </div>
                            <button type="submit" 
                                    class="w-full inline-flex items-center justify-center rounded-md border border-heading bg-heading py-3 px-8 font-mono font-bold text-text no-underline transition-colors duration-200 hover:border-[#D36C52] hover:bg-[#D36C52] hover:text-text">
                                Send Message
                            </button>
                        </form>
                    </div>
                    
                    <!-- Newsletter -->
                    <div id="newsletter-card" class="rounded-lg border border-border bg-surface p-8">
                        <h3 class="m-0 mb-2 font-mono text-xl font-bold text-accent">Join My Newsletter</h3>
                        <p class="mb-6 text-[0.95rem] leading-relaxed text-text-light">
                            Subscribe to receive updates on my latest projects, articles, and design resources directly in your inbox. No spam, ever.
                        </p>
                        
                        <form id="newsletter-form" action="#" method="POST" class="newsletter-form">
                            <div class="mb-6">
                                <label for="newsletter-email" class="mb-2 block text-sm font-medium text-text">Email Address</label>
                                <input type="email" id="newsletter-email" name="email" required 
                                       class="box-border w-full rounded-md border border-border bg-surface p-3 font-mono text-base text-text focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/50">
                            </div>
                            <button type="submit" 
                                    class="w-full inline-flex items-center justify-center rounded-md border border-heading bg-heading py-3 px-8 font-mono font-bold text-text no-underline transition-colors duration-200 hover:border-[#D36C52] hover:bg-[#D36C52] hover:text-text">
                                Subscribe
                            </button>
                        </form>
                        
                        <p class="mt-6 mb-0 text-center text-xs text-text-light/70">
                            Your privacy is important. I'll never share your email.
                        </p>
                    </div>
                </div>
            </section>
        `;
    }
};