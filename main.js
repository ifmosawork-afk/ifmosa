// IFMOSA – main.js (static site enhancements)
document.addEventListener('DOMContentLoaded', function() {
    // Enable smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Track external clicks (optional, for privacy-friendly analytics)
    document.querySelectorAll('a[href^="https://ifmosawork.com"]').forEach(link => {
        link.addEventListener('click', function() {
            console.log('User clicked through to ifmosawork.com');
            // You could replace this with a real analytics event if needed
        });
    });
});
