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
      var titlecontainer = document.getElementById('titleContainer');
   
      // Get the width and height of the parent container
      var containerWidth = container.offsetWidth;
      var titleWidth = titlecontainer.offsetWidth;

      // Get Text
      var text = document.getElementById('Intro');
      var titletext = document.getElementById('Title');
      var dirtext = document.getElementById('Dir');
   
      // Calculate the font size based on the container's width or height
      var fontSize = containerWidth * 0.038;
      var titleFontSize = titleWidth * 0.21; 
      var dirFontSize = titleWidth * 0.05; 

      // Set the calculated font size on the text element
      if (text != null){text.style.fontSize = fontSize + 'px';}
      if (titletext != null) {titletext.style.fontSize = titleFontSize + 'px';}
      if (dirtext !=null) {dirtext.style.fontSize = dirFontSize + 'px';}

      //Special Case -- Matrix Title
      var mTitle = document.getElementById('MatrixTitle');
      var mDir = document.getElementById('MatrixDir');
   
      var mTitleFontSize = titleWidth * 0.17; 
      var mDirFontSize = titleWidth * 0.04; 
     
      if (mTitle != null && mDir != null) 
      {mTitle.style.fontSize = mTitleFontSize + 'px';
      mDir.style.fontSize = mDirFontSize + 'px';}

      //Special Case -- Minion Intro
      var minText = document.getElementById('MinionIntro');
      var minTextFontSize = containerWidth * 0.035;
     
      if (minText != null) {minText.style.fontSize = minTextFontSize + 'px';}

      //Special Case -- Spiderman Title
      var sTitle = document.getElementById('SpidermanTitle');
      var sDir = document.getElementById('SpidermanDir');
   
      var sTitleFontSize = titleWidth * 0.09; 
      var sDirFontSize = titleWidth * 0.031; 

      if (sTitle != null && sDir != null) 
      {sTitle.style.fontSize = sTitleFontSize + 'px';
      sDir.style.fontSize = sDirFontSize + 'px';}
    }

// Adjust font size when the window is resized
window.addEventListener('resize', adjustFontSize);

// Initial font size adjustment when the page loads
adjustFontSize();
