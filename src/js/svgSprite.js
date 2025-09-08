import spriteUrl from 'url:../img/icons.svg';

let injected = false;

export function injectSpriteOnce() {
  if (injected) return;
  injected = true;

  fetch(spriteUrl)
    .then(res => res.text())
    .then(svgText => {
      const div = document.createElement('div');
      div.style.display = 'none';
      div.innerHTML = svgText;
      div.querySelector('svg').id = 'svg-sprite';
      document.body.prepend(div.firstElementChild);
    });
}
