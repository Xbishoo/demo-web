import { t } from './data.js';
import { initLang, pick, money, num } from './i18n.js';
import { applyText } from './i18n-dom.js';
import { details, subtotal, taxAmount, total, clear } from './cart.js';
import { loadUser, signedIn, getUser } from './auth.js';
import { setupHeader, toast, paintBadge } from './ui.js';

initLang();
applyText();
setupHeader();
loadUser();

var gate = document.querySelector('.need-login');
var wrap = document.querySelector('.cart-wrap');
var receipt = document.querySelector('.receipt');
var list = document.querySelector('.cart-items');

if (signedIn()) {
  draw();
} else {
  gate.style.display = 'block';
  wrap.style.display = 'none';
}

function draw() {
  var items = details();

  if (items.length == 0) {
    gate.style.display = 'none';
    wrap.style.display = 'none';
    receipt.style.display = 'none';
    var e = document.querySelector('.empty-msg');
    if (e) e.style.display = 'block';
    return;
  }

  gate.style.display = 'none';
  wrap.style.display = 'block';
  receipt.style.display = 'none';
  if (document.querySelector('.empty-msg')) {
    document.querySelector('.empty-msg').style.display = 'none';
  }

  list.innerHTML = '';
  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    var div = document.createElement('div');
    div.className = 'cart-item';

    var img = document.createElement('img');
    img.src = 'assets/' + item.img + '.svg';

    var mid = document.createElement('div');
    mid.className = 'item-details';
    var n = document.createElement('div');
    n.style.fontWeight = 'bold';
    n.textContent = pick(item.name);
    var u = document.createElement('div');
    u.style.fontSize = '13px';
    u.style.color = '#666';
    u.textContent = money(item.price) + ' x ' + num(item.qty);
    mid.appendChild(n);
    mid.appendChild(u);

    var right = document.createElement('div');
    right.style.textAlign = 'left';
    var pr = document.createElement('div');
    pr.className = 'item-price';
    pr.textContent = money(item.line);
    right.appendChild(pr);

    div.appendChild(img);
    div.appendChild(mid);
    div.appendChild(right);
    list.appendChild(div);
  }

  document.querySelector('.sum-sub').textContent = money(subtotal());
  document.querySelector('.sum-tax').textContent = money(taxAmount());
  document.querySelector('.sum-total').textContent = money(total());
}

var placeBtn = document.querySelector('.place-btn');
if (placeBtn) {
  placeBtn.onclick = function () {
    var d = new Date();
    var datePart = d.getFullYear() + '' + (d.getMonth() + 1) + '' + d.getDate();
    var rand = Math.random().toString(36).slice(2, 6).toUpperCase();

    document.querySelector('.ref-num').textContent = 'DD-' + datePart + '-' + rand;

    clear();
    paintBadge();
    toast(t('orderDone'));

    wrap.style.display = 'none';
    receipt.style.display = 'block';
  };
}

var u = getUser();
if (u) {
  document.title = t('checkout') + ' - ' + u.username;
}
