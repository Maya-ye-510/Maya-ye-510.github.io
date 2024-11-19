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
