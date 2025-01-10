// JavaScript to handle loader for index.html and specific link

// Show loader on page load (index.html)
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    if (loader) {
        // Hide the loader once the page is fully loaded
        setTimeout(() => {
            loader.style.display = 'none';
        }, 2000); // 2 seconds to load
    }
});

// Handle specific link (terms-policies.html) with loader
const termsLink = document.querySelector('a[href="terms-policies.html"]');
if (termsLink) {
    termsLink.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default link navigation

        const loader = document.getElementById('loader');
        if (loader) {
            loader.style.display = 'flex'; // Show loader
        }

        // Simulate loading effect
        setTimeout(() => {
            window.open(termsLink.href, '_blank'); // Open the link in a new tab
            loader.style.display = 'none'; // Hide the loader after opening
        }, 2000); // 2 seconds to load
    });
}
