import { pick, money, toggleLang } from './i18n.js';
import { count, loadCart } from './cart.js';
import { signedIn } from './auth.js';
import { t } from './data.js';

export function toast(msg) {
  var box = document.querySelector('.toast');
  if (!box) {
    box = document.createElement('div');
    box.className = 'toast';
    document.body.appendChild(box);
  }
  box.textContent = msg;
  box.className = 'toast show';
  setTimeout(function () {
    box.className = 'toast';
  }, 2500);
}

export function setupHeader() {
  loadCart();
  paintBadge();
  paintAuth();

  var btn = document.querySelector('.lang-btn');
  if (btn) {
    btn.textContent = document.documentElement.dir == 'rtl' ? 'EN' : 'ع';
    btn.onclick = toggleLang;
  }
}

export function paintBadge() {
  var el = document.querySelector('.badge');
  if (!el) return;
  var n = count();
  el.textContent = n;
  el.style.display = n > 0 ? 'block' : 'none';
}

export function paintAuth() {
  var el = document.querySelector('.auth-link');
  if (!el) return;
  if (signedIn()) {
    el.textContent = t('account');
    el.href = 'account.html';
  } else {
    el.textContent = t('login');
    el.href = 'login.html';
  }
}

export function showProduct(p, onAdd) {
  var bg = document.createElement('div');
  bg.className = 'modal-bg';

  var box = document.createElement('div');
  box.className = 'modal';

  var h = document.createElement('h2');
  h.textContent = pick(p.name);

  var img = document.createElement('img');
  img.src = 'assets/' + p.img + '.svg';
  img.style.width = '100%';
  img.style.borderRadius = '7%';

  var price = document.createElement('p');
  price.style.color = 'orangered';
  price.style.fontWeight = 'bold';
  price.style.fontSize = '18px';
  price.textContent = money(p.price);

  var desc = document.createElement('p');
  desc.textContent = pick(p.desc);

  var addBtn = document.createElement('button');
  addBtn.textContent = t('addToCart');
  addBtn.onclick = function () {
    onAdd(p);
    closeModal();
  };

  var closeBtn = document.createElement('button');
  closeBtn.textContent = t('close');
  closeBtn.style.marginRight = '8px';
  closeBtn.style.backgroundColor = '#add8e6';
  closeBtn.style.color = '#333';
  closeBtn.onclick = closeModal;

  var actions = document.createElement('div');
  actions.appendChild(addBtn);
  actions.appendChild(closeBtn);

  box.appendChild(h);
  box.appendChild(img);
  box.appendChild(price);
  box.appendChild(desc);
  box.appendChild(actions);
  bg.appendChild(box);

  bg.onclick = function (e) {
    if (e.target == bg) closeModal();
  };

  document.addEventListener('keydown', onEsc);
  function onEsc(e) {
    if (e.key == 'Escape') closeModal();
  }

  document.body.appendChild(bg);
  bg.className = 'modal-bg show';
}

export function closeModal() {
  var bg = document.querySelector('.modal-bg');
  if (bg) bg.remove();
}
