document.addEventListener('keydown', e => {
  const key = document.querySelector(`.keys .key[data-key="${e.keyCode}"]`);
  let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if (!key || !audio) {
    return;
  }
  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
  audio.onended = () => {
    key.classList.remove('playing');
  };
});
