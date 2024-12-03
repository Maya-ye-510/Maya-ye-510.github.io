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
      var fontSize = containerWidth * 0.038;
      var titleFontSize = titleWidth * 0.21; 
      var dirFontSize = titleWidth * 0.05; 

      // Limit the font size to a minimum and maximum value
      //fontSize = Math.max(fontSize, 3);  // Minimum size of 16px
      //fontSize = Math.min(fontSize, 48);  // Maximum size of 48px

      // Set the calculated font size on the text element
      text.style.fontSize = fontSize + 'px';
      titletext.style.fontSize = titleFontSize + 'px';
      dirtext.style.fontSize = dirFontSize + 'px';

      //Special Case -- Matrix Title
      var mTitle = document.getElementById('MatrixTitle');
      var mDir = document.getElementById('MatrixDir');
   
      var mTitleFontSize = titleWidth * 0.16; 
      var mDirFontSize = titleWidth * 0.045; 

      mTitle.style.fontSize = mTitleFontSize + 'px';
      mDir.style.fontSize = mDirFontSize + 'px';

      //Special Case -- Minion Intro
      var minText = document.getElementById('MinionIntro');
      var minTextFontSize = containerWidth * 0.028;
      minText.style.fontSize = minTextFontSize + 'px';

      //Special Case -- Spiderman Title
      var sTitle = document.getElementById('SpidermanTitle');
      var sDir = document.getElementById('SpidermanDir');
   
      var sTitleFontSize = titleWidth * 0.09; 
      var sDirFontSize = titleWidth * 0.030; 

      sTitle.style.fontSize = sTitleFontSize + 'px';
      sDir.style.fontSize = sDirFontSize + 'px';
    }

// Adjust font size when the window is resized
window.addEventListener('resize', adjustFontSize);

// Initial font size adjustment when the page loads
adjustFontSize();
