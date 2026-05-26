// IFMOSA – smooth scroll, external link tracking, console greeting
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for internal anchor links (if any)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Optional: log clicks to ifmosawork.com (for future analytics)
    document.querySelectorAll('a[href^="https://ifmosawork.com"]').forEach(link => {
        link.addEventListener('click', () => {
            console.log('🔗 Navigate to IFMOSA Work jobs portal');
        });
    });

    // Small fade-in effect for cards (optional)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.region-card, .benefit, .articles article, .faq-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(15px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });

    console.log('IFMOSA | Your global visa‑sponsored job hub');
});
