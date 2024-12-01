const circle = document.querySelector(".circle");
/*
var nClicks = 0;

circle.addEventListener('click', function() {
   if (nClicks % 2 == 0){
        circle.classList.add('rotating');
   }
   else{
     circle.classList.remove('rotating');
   }
   nClicks = nClicks + 1;
});
*/
const audioControl = event => {
  const clicked = event.target;
  const mp3 = clicked.previousElementSibling;
  mp3.loop = true;
   
  if (!mp3.paused) {
    mp3.pause();
    circle.classList.remove('rotating');
  } else if (!mp3.playing) {
    mp3.play();
    circle.classList.add('rotating');
  } else {
    return false;
  }
};

circle.onclick = audioControl;

/*EntryPick*/

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
