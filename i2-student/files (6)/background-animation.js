/**
 * BACKGROUND ANIMATION - Pre-written
 * Students don't need to modify this file
 * This creates the twinkling stars effect automatically
 */

// Twinkling Stars Animation
function twinkleStars() {
    const stars = document.querySelectorAll('.star');
    
    stars.forEach((star, index) => {
        // Each star twinkles at different intervals
        setInterval(() => {
            // Random opacity between 0.3 and 1
            const opacity = Math.random() * 0.7 + 0.3;
            star.style.opacity = opacity;
        }, 1000 + (index * 300)); // Different timing for each star
    });
}

// Start the twinkling effect when page loads
window.addEventListener('load', () => {
    twinkleStars();
    console.log('✨ Background animations loaded!');
});
