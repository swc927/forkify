// src/js/svgSprite.js
import sprite from 'bundle-text:../img/icons.svg'; // NOTE: one level up from /js to /img

let injected = false;

export function injectSpriteOnce() {
  if (injected) return;

  // Parse the SVG string into a DOM node
  const temp = document.createElement('div');
  temp.innerHTML = sprite.trim();

  const svg = temp.firstElementChild;
  if (!svg || svg.tagName.toLowerCase() !== 'svg') {
    console.error('SVG sprite did not parse as an <svg>');
    return;
  }

  // Ensure an id and hidden style
  svg.id = 'svg-sprite';
  svg.setAttribute('aria-hidden', 'true');
  svg.style.position = 'absolute';
  svg.style.width = '0';
  svg.style.height = '0';
  svg.style.overflow = 'hidden';

  // Prepend to body so <use href="#…"> can find it
  document.body.prepend(svg);
  injected = true;
}
