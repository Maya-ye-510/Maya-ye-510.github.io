const circle = document.querySelector(".circle");
const CD = document.getElementById('CD');
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
    CD.classList.remove('rotating');
  } else if (!mp3.playing) {
    mp3.play();
    CD.classList.add('rotating');
  } else {
    return false;
  }
};

circle.onclick = audioControl;


function adjustFontSize() {
      // Get the parent div's dimensions
      var container = document.getElementById('frameContainer');
      var text = document.getElementById('Intro');

      // Get the width and height of the parent container
      var containerWidth = container.offsetWidth;
      var containerHeight = container.offsetHeight;

      // Calculate the font size based on the container's width or height
      var fontSize = containerWidth * 0.05; // Set font size to 10% of container's width

      // Optionally, you can also use containerHeight instead of width if you want to scale based on height
      // var fontSize = containerHeight * 0.1;  // Font size scales based on height

      // Limit the font size to a minimum and maximum value
      fontSize = Math.max(fontSize, 3);  // Minimum size of 16px
      fontSize = Math.min(fontSize, 48);  // Maximum size of 48px

      // Set the calculated font size on the text element
      text.style.fontSize = fontSize + 'px';
    }

// Adjust font size when the window is resized
window.addEventListener('resize', adjustFontSize);

// Initial font size adjustment when the page loads
adjustFontSize();
