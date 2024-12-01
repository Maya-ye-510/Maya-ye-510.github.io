// Get the image element and button
const imageElement = document.getElementById('pick-image');
const slideBtn = document.getElementById('rightBtn');
const leftBtn = document.getElementById('leftBtn');


// Track the current position of the image (in pixels)
let currentPosition = 0;

// Button click event
rightBtn.addEventListener('click', () => {
  // Increment the position by 100px (or any other value you like)
  currentPosition += 100;

  // Slide the image to the right by increasing its translateX value
  imageElement.style.transform = `translateX(${currentPosition}px)`; // Move the image right by 'currentPosition' pixels
});

leftBtn.addEventListener('click', () => {
  // Increment the position by 100px (or any other value you like)
  currentPosition -= 100;

  // Slide the image to the right by increasing its translateX value
  imageElement.style.transform = `translateX(${currentPosition}px)`; // Move the image right by 'currentPosition' pixels
});
