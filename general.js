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
   
      var titlecontainer = document.getElementById('titleContainer');
      var titletext = document.getElementById('Title');
      var dirtext = document.getElementById('Dir');
   
      // Get the width and height of the parent container
      var containerWidth = container.offsetWidth;
      var titleWidth = titlecontainer.offsetWidth;

      // Calculate the font size based on the container's width or height
      var fontSize = containerWidth * 0.040;
      var titleFontSize = titleWidth * 0.4; 
      var dirFontSize = titleWidth * 0.15; 

      // Limit the font size to a minimum and maximum value
      //fontSize = Math.max(fontSize, 3);  // Minimum size of 16px
      //fontSize = Math.min(fontSize, 48);  // Maximum size of 48px

      // Set the calculated font size on the text element
      text.style.fontSize = fontSize + 'px';
      titletext.style.fontSize = titleFontSize + 'px';
      dirtext.style.fontSize = dirFontSize + 'px';
    }

// Adjust font size when the window is resized
window.addEventListener('resize', adjustFontSize);

// Initial font size adjustment when the page loads
adjustFontSize();
