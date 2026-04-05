// Comprehensive refactored JavaScript code

// Lazy loading images and assets
function lazyLoad() {
    const images = document.querySelectorAll('img[data-src]');
    const options = {
        root: null,
        threshold: 0.1,
        rootMargin: '0px'
    };

    const loadImage = (image) => {
        image.src = image.dataset.src;
        image.onload = () => {
            image.classList.add('loaded');
        };
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                loadImage(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, options);

    images.forEach(image => observer.observe(image));
}

// Dynamic ticker loading
function loadTickerData() {
    fetch('https://api.example.com/ticker')
        .then(response => response.json())
        .then(data => {
            const ticker = document.getElementById('dynamic-ticker');
            ticker.innerHTML = data.map(item => `<span>${item}</span>`).join('');
        })
        .catch(error => {
            console.error('Error loading ticker data:', error);
            // Provide user feedback for the error
            const ticker = document.getElementById('dynamic-ticker');
            ticker.innerHTML = '<span>Error loading data</span>';
        });
}

// Keyboard navigation for accessibility
function setupKeyboardNavigation() {
    const focusableElementsString = 'a[href], area[href], input:not([disabled]), select, textarea, button:not([disabled]), [tabindex]';
    const focusableElements = document.querySelectorAll(focusableElementsString);
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    document.addEventListener('keydown', (event) => {
        const isTabPressed = (event.key === 'Tab');

        if (!isTabPressed) return;

        if (event.shiftKey) { // shift + tab
            if (document.activeElement === firstElement) {
                event.preventDefault();
                lastElement.focus();
            }
        } else { // tab
            if (document.activeElement === lastElement) {
                event.preventDefault();
                firstElement.focus();
            }
        }
    });
}

// Error handling
function handleError(message) {
    console.error(message);
    alert('An error occurred: ' + message);
}

// Performance optimizations
const getDataOptimized = async () => {
    try {
        const response = await fetch('https://api.example.com/data');
        if (!response.ok) throw new Error('Network response was not ok');
        return await response.json();
    } catch (error) {
        handleError(error.message);
    }
};

// Initialize all functionalities
document.addEventListener('DOMContentLoaded', () => {
    lazyLoad();
    loadTickerData();
    setupKeyboardNavigation();
});
