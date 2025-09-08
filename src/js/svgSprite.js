// src/js/svgSprite.js
import spriteMarkup from 'bundle-text:../img/icons.svg';

let injected = false;

export function injectSpriteOnce() {
  if (injected) return;
  injected = true;

  const div = document.createElement('div');
  div.innerHTML = spriteMarkup.trim();

  const sprite = div.querySelector('svg');
  if (!sprite) return;

  sprite.id = 'svg-sprite';
  sprite.setAttribute('aria-hidden', 'true');
  sprite.style.position = 'absolute';
  sprite.style.width = 0;
  sprite.style.height = 0;
  sprite.style.overflow = 'hidden';

  document.body.prepend(sprite);
}

export function setUseHref(el, fragment) {
  el.setAttribute('href', fragment); // modern
  // Safari/WebKit fallback
  el.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', fragment);
}
