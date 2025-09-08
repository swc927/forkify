// src/js/svgSprite.js
import sprite from 'bundle-text:../img/icons.svg';

// Inject the raw SVG sprite into the page once
export function injectSpriteOnce() {
  if (document.getElementById('svg-sprite')) return;

  const wrap = document.createElement('div');
  wrap.id = 'svg-sprite';
  wrap.style.position = 'absolute';
  wrap.style.width = '0';
  wrap.style.height = '0';
  wrap.style.overflow = 'hidden';

  // Important: keep the sprite exactly as-is (contains <symbol> ids)
  wrap.innerHTML = sprite;
  document.body.prepend(wrap);
}
