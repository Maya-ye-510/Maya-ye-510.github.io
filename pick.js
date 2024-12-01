// Get the image element and button
const imageElement = document.getElementById('pick-image');
const imageBackground = document.getElementById('pick-image-background');
const rightBtn = document.getElementById('rightBtn');
const leftBtn = document.getElementById('leftBtn');


// Track the current position of the image (in pixels)
let bigCurrentPosition = 0;
let smallCurrentPosition = 0;
let n = 0;

// Button click event
rightBtn.addEventListener('click', () => {
  // Increment the position by 100px (or any other value you like)
  n += 1;
  bigCurrentPosition = n*423;
  smallCurrentPosition = n*200;

  // Slide the image to the right by increasing its translateX value
  imageElement.style.transform = `translateX(${bigCurrentPosition}px)`; // Move the image right by 'currentPosition' pixels
  imageBackground.style.transform = `translateX(${smallCurrentPosition}px)`;
});

leftBtn.addEventListener('click', () => {
  // Increment the position by 100px (or any other value you like)
  n -= 1;
  bigCurrentPosition = n*100;
  smallCurrentPosition = n*200;

  // Slide the image to the right by increasing its translateX value
  imageElement.style.transform = `translateX(${bigCurrentPosition}px)`; // Move the image right by 'currentPosition' pixels
  imageBackground.style.transform = `translateX(${smallCurrentPosition}px)`;
});
