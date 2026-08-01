document.addEventListener('DOMContentLoaded', () => {
    const yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim() || 'Portfolio Contact';
            const message = document.getElementById('message').value.trim();

            const mailtoLink =
                'mailto:srinidhidevraj2267@gmail.com' +
                '?subject=' + encodeURIComponent(subject) +
                '&body=' + encodeURIComponent(
                    'Name: ' + name + '\n' +
                    'Email: ' + email + '\n\n' +
                    message
                );

            window.location.href = mailtoLink;
        });
    }
});
