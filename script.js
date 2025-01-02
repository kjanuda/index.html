// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Example: Alert user when the form is submitted
    const form = document.querySelector('form');
    
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form submission for demo
        alert('Thank you for your message!');
    });

    // Example: Smooth scroll to section when a nav link is clicked
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default anchor behavior
            const targetId = link.getAttribute('href').substring(1); // Get the ID (without #)
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
