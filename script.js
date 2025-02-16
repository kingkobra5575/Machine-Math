// Mobile menu functionality
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close menu when clicking a nav link
document.querySelectorAll('.nav-links a').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
}));

// Navigation shadow on scroll
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.style.boxShadow = '0 2px 15px rgba(0,0,0,0.1)';
    } else {
        nav.style.boxShadow = 'none';
    }
});



document.querySelectorAll('.see-more-btn').forEach(button => {
            button.addEventListener('click', () => {
                const item = button.closest('.product-item, .solution-item');
                const details = item.querySelector('.product-details, .solution-details');
                
                if (item.classList.contains('expanded')) {
                    item.classList.remove('expanded');
                    button.textContent = 'See More';
                    details.style.maxHeight = '0';
                    details.style.opacity = '0';
                } else {
                    item.classList.add('expanded');
                    button.textContent = 'See Less';
                    details.style.maxHeight = details.scrollHeight + 'px';
                    details.style.opacity = '1';
                }
            });
        });