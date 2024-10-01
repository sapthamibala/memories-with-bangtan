// Smooth scroll for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();  // Prevent default anchor behavior
        const targetSection = document.querySelector(this.getAttribute('href'));
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Lightbox functionality for gallery images
const galleryItems = document.querySelectorAll('.gallery-item img');
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

galleryItems.forEach(item => {
    item.addEventListener('click', e => {
        lightbox.classList.add('active');
        const img = document.createElement('img');
        img.src = item.src;
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild);
        }
        lightbox.appendChild(img);
    });
});

lightbox.addEventListener('click', e => {
    if (e.target !== e.currentTarget) return;
    lightbox.classList.remove('active');
});

// Form validation
const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    const name = form.querySelector('input[name="name"]').value;
    const email = form.querySelector('input[name="email"]').value;
    const message = form.querySelector('textarea').value;

    if (name === '' || email === '' || message === '') {
        e.preventDefault();
        alert('Please fill in all the fields.');
    } else {
        alert('Message Sent Successfully!');
    }
});

// Get the button and about section element
const exploreButton = document.querySelector('.hero-section button');
const aboutSection = document.querySelector('#about');

// Add a click event listener to the button
exploreButton.addEventListener('click', function () {
    // Smooth scroll to the about section
    aboutSection.scrollIntoView({ behavior: 'smooth' });
});

// new code (27-09-2024)

document.querySelectorAll('.run-moment-item').forEach(function(item) {
    // Mouseover event to create tooltip
    item.addEventListener('mouseover', function() {
        // Get the episode title from the <h5> element
        const episodeTitle = this.querySelector('h5').textContent;

        // Check if tooltip already exists, if not, create it
        if (!this.querySelector('.tooltip')) {
            // Create the tooltip element
            const tooltip = document.createElement('div');
            tooltip.classList.add('tooltip');
            tooltip.textContent = episodeTitle;

            // Style the tooltip
            tooltip.style.top = '-40px'; // Adjust this to position above the image
            tooltip.style.left = '50%';
            tooltip.style.transform = 'translateX(-50%)';
            tooltip.style.display = 'block'; // Make the tooltip visible

            // Append the tooltip to the run-moment-item
            this.appendChild(tooltip);
        } else {
            // If tooltip exists, make sure it's visible
            const tooltip = this.querySelector('.tooltip');
            tooltip.style.display = 'block';
        }
    });

    // Mouseout event to hide the tooltip
    item.addEventListener('mouseout', function() {
        const tooltip = this.querySelector('.tooltip');
        if (tooltip) {
            tooltip.style.display = 'none'; // Hide the tooltip
        }
    });
});

