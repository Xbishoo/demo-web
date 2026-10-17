import { t } from './data.js';
import { initLang } from './i18n.js';
import { applyText } from './i18n-dom.js';
import { loadUser, signIn, signedIn, check } from './auth.js';
import { setupHeader, toast } from './ui.js';

initLang();
applyText();
setupHeader();
loadUser();

var form = document.querySelector('.login-form');

if (signedIn()) {
  location.href = 'account.html';
}

form.onsubmit = function (e) {
  e.preventDefault();

  var u = form.username.value;
  var p = form.password.value;
  var errs = check(u, p);

  showErrors(errs);

  if (errs.username || errs.password) {
    return;
  }

  var btn = form.querySelector('button');
  btn.disabled = true;
  btn.textContent = t('loggingIn');

  setTimeout(function () {
    signIn(u);
    toast(t('welcome') + ' ' + u.trim());
    location.href = 'account.html';
  }, 400);
};

function showErrors(errs) {
  var uBox = document.querySelector('.err-username');
  var pBox = document.querySelector('.err-password');

  if (errs.username) {
    uBox.textContent = t(errs.username);
    uBox.classList.add('show');
    form.username.classList.add('bad');
  } else {
    uBox.textContent = '';
    uBox.classList.remove('show');
    form.username.classList.remove('bad');
  }

  if (errs.password) {
    pBox.textContent = t(errs.password);
    pBox.classList.add('show');
    form.password.classList.add('bad');
  } else {
    pBox.textContent = '';
    pBox.classList.remove('show');
    form.password.classList.remove('bad');
  }
}

form.username.oninput = function () {
  form.username.classList.remove('bad');
  document.querySelector('.err-username').classList.remove('show');
};

form.password.oninput = function () {
  form.password.classList.remove('bad');
  document.querySelector('.err-password').classList.remove('show');
};
