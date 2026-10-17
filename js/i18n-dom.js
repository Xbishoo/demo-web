import { t } from './data.js';

export function applyText() {
  var els = document.querySelectorAll('[data-t]');
  for (var i = 0; i < els.length; i++) {
    els[i].textContent = t(els[i].getAttribute('data-t'));
  }

  var ph = document.querySelectorAll('[data-ph]');
  for (var j = 0; j < ph.length; j++) {
    ph[j].placeholder = t(ph[j].getAttribute('data-ph'));
  }

  var brand = document.querySelector('.brand-name');
  if (brand) brand.textContent = t('store');

  if (!document.querySelector('[data-keep-title]')) {
    document.title = t('store') + ' - ' + t('tagline');
  }
}
