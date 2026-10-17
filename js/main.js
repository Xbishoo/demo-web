import { PRODUCTS, CATEGORIES, t } from './data.js';
import { initLang, pick, money, num } from './i18n.js';
import { applyText } from './i18n-dom.js';
import { add, count } from './cart.js';
import { setupHeader, toast, paintBadge, showProduct } from './ui.js';

var query = '';
var category = 'all';

initLang();
applyText();
setupHeader();

var grid = document.querySelector('.grid');
var filters = document.querySelector('.filters');
var emptyMsg = document.querySelector('.empty-msg');
var resultCount = document.querySelector('.result-count');
var searchInput = document.querySelector('.search-bar');

function matching() {
  var q = query.trim().toLowerCase();
  var out = [];
  for (var i = 0; i < PRODUCTS.length; i++) {
    var p = PRODUCTS[i];
    if (category != 'all' && p.cat != category) continue;
    if (q != '') {
      var hay = (p.name.ar + ' ' + p.name.en + ' ' + p.desc.ar + ' ' + p.desc.en).toLowerCase();
      if (hay.indexOf(q) == -1) continue;
    }
    out.push(p);
  }
  return out;
}

function drawFilters() {
  filters.innerHTML = '';
  for (var i = 0; i < CATEGORIES.length; i++) {
    var c = CATEGORIES[i];
    var b = document.createElement('button');
    b.textContent = pick(c.name);
    if (category == c.id) b.className = 'active';
    b.onclick = function (id) {
      return function () {
        category = id;
        drawFilters();
        drawProducts();
      };
    }(c.id);
    filters.appendChild(b);
  }
}

function drawProducts() {
  var list = matching();
  grid.innerHTML = '';

  if (resultCount) {
    resultCount.textContent = list.length > 0 ? num(list.length) + ' ' + t('results') : '';
  }

  if (list.length == 0) {
    grid.style.display = 'none';
    if (emptyMsg) emptyMsg.style.display = 'block';
    return;
  }

  grid.style.display = 'grid';
  if (emptyMsg) emptyMsg.style.display = 'none';

  for (var i = 0; i < list.length; i++) {
    grid.appendChild(card(list[i]));
  }
}

function card(p) {
  var div = document.createElement('div');
  div.className = 'product';

  var img = document.createElement('img');
  img.src = 'assets/' + p.img + '.svg';
  img.alt = pick(p.name);

  var info = document.createElement('div');
  info.className = 'product-info';

  var h = document.createElement('h3');
  h.textContent = pick(p.name);

  var d = document.createElement('p');
  d.textContent = pick(p.desc);

  var price = document.createElement('div');
  price.className = 'price';
  price.textContent = money(p.price);

  var addBtn = document.createElement('button');
  addBtn.className = 'btn';
  addBtn.textContent = t('addToCart');
  addBtn.onclick = function () {
    addToCart(p);
  };

  var detBtn = document.createElement('button');
  detBtn.className = 'btn btn-grey';
  detBtn.style.marginRight = '8px';
  detBtn.textContent = t('details');
  detBtn.onclick = function () {
    showProduct(p, addToCart);
  };

  var row = document.createElement('div');
  row.appendChild(addBtn);
  row.appendChild(detBtn);

  info.appendChild(h);
  info.appendChild(d);
  info.appendChild(price);
  info.appendChild(row);

  div.appendChild(img);
  div.appendChild(info);
  return div;
}

function addToCart(p) {
  add(p.id, 1);
  paintBadge();
  toast(t('added'));
}

if (searchInput) {
  searchInput.oninput = function (e) {
    query = e.target.value;
    drawProducts();
  };
}

drawFilters();
drawProducts();
