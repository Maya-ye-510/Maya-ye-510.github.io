function playAudio(url) {
  new Audio(url).play();
}

document.querySelector(".circle").addEventListener('click', function() {
   document.querySelector(".circle").classList.add('rotating')
});
