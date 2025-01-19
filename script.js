// JavaScript for Shoeroom by Asap

// Counter Functionality
const counters = document.querySelectorAll('.stat h3');

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = Math.max(target / 100, 1); // increment is at least 1

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, 20); // for smoother animation
        } else {
            counter.innerText = target;
        }
    };

    updateCount();
});


// WhatsApp Redirect for Order Buttons
const orderButtons = document.querySelectorAll('.product button');

const incrementCounters = () => {
    const shoesOrderedCounter = document.getElementById('shoesOrdered');
    const shoesHandcraftedCounter = document.getElementById('shoesHandcrafted');
    const shoesSoldCounter = document.getElementById('shoesSold');
    const customersCounter = document.getElementById('customers');

    [shoesOrderedCounter, shoesHandcraftedCounter, shoesSoldCounter, customersCounter].forEach(counter => {
        if (counter) {
            let currentCount = +counter.innerText;
            counter.innerText = currentCount + 1;
        }
    });
};

const redirectToWhatsApp = (productName, productImage) => { // Redirect to WhatsApp with product details for order placement

    // WhatsApp URL with prefilled message
    const whatsappURL = `https://wa.me/+2347040333638?text=Hello!%20I%20am%20interested%20in%20ordering%20your%20handcrafted%20${encodeURIComponent(productName)}.%0A%0AHere%20is%20the%20product%20image%20URL:%20${encodeURIComponent(productImage)}.%0A%0ACan%20we%20discuss%20further%20details?`;

    // Increment all counters
    incrementCounters();

    // Redirect customer to WhatsApp in a new tab with prefilled message
    window.open(whatsappURL, '_blank');
};

// Add click event listener to all order buttons
orderButtons.forEach(button => {
    button.addEventListener('click', () => {
        const productName = button.parentElement.querySelector('h3').innerText;
        const productImage = button.parentElement.querySelector('img').src;
        redirectToWhatsApp(productName, productImage);
    });
});


// Testimonial Slider For Enhanced Functionality
const slider = document.querySelector('.testimonials-slider');
let isDragging = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDragging = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
    isDragging = false;
    slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
    isDragging = false;
    slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2; // scroll speed
    slider.scrollLeft = scrollLeft - walk;
});


