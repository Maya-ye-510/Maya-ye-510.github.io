// Accessing the image and container
const movingImage1 = document.getElementById("mask1");
const movingImage2 = document.getElementById("mask2");

window.addEventListener('scroll', () => {
    // Get the scroll amount
    const scrollAmount = window.scrollY;

    // Move the image to the right based on scroll position
    movingImage1.style.transform = `translateY(${scrollAmount * -0.65}px)`;
    movingImage2.style.transform = `translateY(${scrollAmount * -0.65}px)`;
});

/*
let lastScrollY = 0;
let allowScroll = true; // Control whether scroll locking is active

window.addEventListener('scroll', () => {
    if (!allowScroll) return; // Temporarily allow free scrolling

    const currentScrollY = window.scrollY;
    if (currentScrollY < lastScrollY) {
        window.scrollTo(0, lastScrollY);
    } else {
        lastScrollY = currentScrollY;
    }
});

function scrollToTop() {
    allowScroll = false; // Disable scroll lock
    window.scrollTo({ top: 0, behavior: "smooth" });
    
    // Re-enable scroll lock after scrolling completes
    setTimeout(() => {
        lastScrollY = 0; // Reset scroll position tracking
        allowScroll = true;
    }, 1000); // Adjust delay based on scroll speed
}
*/