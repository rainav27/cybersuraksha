// Improved script.js for CyberSuraksha

// Accessibility features
function makeAccessible(element) {
    element.setAttribute('tabindex', '0'); // Make elements focusable
    element.setAttribute('role', 'button'); // Specify role for assistive technologies
}

// Keyboard navigation
document.addEventListener('keydown', function(event) {
    if (event.key === 'Tab') {
        // Custom navigation logic can go here
    }
});

// Lazy loading feature for images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const config = {
        rootMargin: '0px 0px 200px 0px',
        threshold: 0.01
    };
    let observer;

    if ('IntersectionObserver' in window) {
        observer = new IntersectionObserver(function(entries, self) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.onload = () => img.removeAttribute('data-src');
                    self.unobserve(img);
                }
            });
        }, config);

        images.forEach(image => {
            observer.observe(image);
        });
    } else {
        // Fallback for browsers that don't support IntersectionObserver
        images.forEach(image => {
            image.src = image.dataset.src;
            image.onload = () => image.removeAttribute('data-src');
        });
    }
}

// Dynamic ticker loading
function loadTickerData() {
    fetch('https://api.example.com/ticker')
        .then(response => response.json())
        .then(data => {
            // Process and display ticker data
            displayTicker(data);
        })
        .catch(error => {
            console.error('Error loading ticker data:', error);
        });
}

function displayTicker(data) {
    // Code to display the ticker data
}

// Error handling
window.onerror = function(message, source, lineno, colno, error) {
    console.error('Error occurred:', message, 'at', source + ':' + lineno + ':' + colno);
};

// Initialize features
document.addEventListener('DOMContentLoaded', function() {
    lazyLoadImages();
    loadTickerData();
});