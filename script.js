const buttons = document.querySelectorAll('.buttons__button');

window.addEventListener('keydown', (e) => {
  const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
  const pushedButton = document.querySelector(`div[data-key='${e.keyCode}']`);

  if (audio && pushedButton) {
    audio.currentTime = 0;
    audio.play();
    pushedButton.classList.add('buttons__button--active');
  }
});

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const pushedButton = e.target.closest('div');
    const { key } = pushedButton.dataset;
    const audio = document.querySelector(`audio[data-key="${key}"`);

    audio.currentTime = 0;
    audio.play();
    pushedButton.classList.add('buttons__button--active');
  });
  button.addEventListener('transitionend', () => {
    button.classList.remove('buttons__button--active');
  });
});
