// Get the image element and button
const imageElement = document.getElementById('pick-image');
const imageBackground = document.getElementById('pick-image-background');
const rightBtn = document.getElementById('rightBtn');
const leftBtn = document.getElementById('leftBtn');


// Variables
let bigCurrentPosition = 0;
let smallCurrentPosition = 0;
let n = 0;

//Consts
const bigWidth = 422.86115 //px
const smallWidth = 280.60345 //px

// Button click event
rightBtn.addEventListener('click', () => {
  n += 1;
 
  //Loops the Image
  if (n == 15) {
    n = 0;
  }

  bigCurrentPosition = n*bigWidth;
  smallCurrentPosition = (n+2)*smallWidth;
  
  // Slide the image to the right by increasing its translateX value
  imageElement.style.transform = `translateX(${bigCurrentPosition}px)`; // Move the image right by 'currentPosition' pixels
  imageBackground.style.transform = `translateX(${smallCurrentPosition}px)`;
});

leftBtn.addEventListener('click', () => {
  n -= 1;
  
  //Loops the Image
  if (n == -1) {
    n = 14;
  }
  
  bigCurrentPosition = n*bigWidth;
  smallCurrentPosition = (n+2)*smallWidth;

  // Slide the image to the left by decreasing its translateX value
  imageElement.style.transform = `translateX(${bigCurrentPosition}px)`;
  imageBackground.style.transform = `translateX(${smallCurrentPosition}px)`;
});
