import { t } from './data.js';

var lang = 'ar';

export function getLang() {
  return lang;
}

export function initLang() {
  var saved = localStorage.getItem('dd-lang');
  lang = saved == 'en' || saved == 'ar' ? saved : 'ar';
  applyLang();
}

export function toggleLang() {
  lang = lang == 'ar' ? 'en' : 'ar';
  localStorage.setItem('dd-lang', lang);
  applyLang();
  location.reload();
}

function applyLang() {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang == 'ar' ? 'rtl' : 'ltr';
}

export function money(n) {
  return new Intl.NumberFormat(lang == 'ar' ? 'ar-LY' : 'en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(n);
}

export function num(n) {
  return new Intl.NumberFormat(lang == 'ar' ? 'ar-LY' : 'en-US').format(n);
}

export function pick(field) {
  return field[lang];
}

export { t };
