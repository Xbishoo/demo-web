import { t } from './data.js';
import { initLang } from './i18n.js';
import { applyText } from './i18n-dom.js';
import { loadUser, signedIn, getUser, signOut } from './auth.js';
import { setupHeader, toast, paintAuth } from './ui.js';

initLang();
applyText();
setupHeader();
loadUser();

var signedOutBox = document.querySelector('.signed-out');
var accountBox = document.querySelector('.account-box');

if (signedIn()) {
  signedOutBox.style.display = 'none';
  accountBox.style.display = 'block';

  var u = getUser();
  document.querySelector('.hello').textContent = t('welcome') + ', ' + u.username;

  var d = new Date(u.since);
  document.querySelector('.since').textContent = d.toLocaleString();
} else {
  signedOutBox.style.display = 'block';
  accountBox.style.display = 'none';
}

var outBtn = document.querySelector('.signout-btn');
if (outBtn) {
  outBtn.onclick = function () {
    signOut();
    toast(t('signedOut'));
    paintAuth();
    signedOutBox.style.display = 'block';
    accountBox.style.display = 'none';
  };
}
