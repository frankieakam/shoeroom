// Select the hamburger menu and mobile navigation elements
const hamburgerMenu = document.querySelector('.hamburger-menu');
const mobileNav = document.querySelector('.mobile-nav');

// Add click event listener to the hamburger menu
hamburgerMenu.addEventListener('click', () => {
    // Toggle the "active" class on the mobile navigation menu
    mobileNav.classList.toggle('active');
    
    // Optionally, change the hamburger icon to a close icon when active
    hamburgerMenu.classList.toggle('open');
});

// Close the menu when clicking outside (optional)
document.addEventListener('click', (event) => {
    if (!hamburgerMenu.contains(event.target) && !mobileNav.contains(event.target)) {
        mobileNav.classList.remove('active');
        hamburgerMenu.classList.remove('open');
    }
});



