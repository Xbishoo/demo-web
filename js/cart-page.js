import { t } from './data.js';
import { initLang, pick, money, num } from './i18n.js';
import { applyText } from './i18n-dom.js';
import { details, subtotal, taxAmount, total, setQty, remove, clear } from './cart.js';
import { setupHeader, toast, paintBadge } from './ui.js';

initLang();
applyText();
setupHeader();

var list = document.querySelector('.cart-items');
var emptyMsg = document.querySelector('.empty-msg');
var wrap = document.querySelector('.cart-wrap');
var clearBtn = document.querySelector('.clear-btn');

draw();

function draw() {
  var items = details();

  if (items.length == 0) {
    if (emptyMsg) emptyMsg.style.display = 'block';
    if (wrap) wrap.style.display = 'none';
    if (clearBtn) clearBtn.style.display = 'none';
    return;
  }

  if (emptyMsg) emptyMsg.style.display = 'none';
  if (wrap) wrap.style.display = 'block';
  if (clearBtn) clearBtn.style.display = 'inline-block';

  list.innerHTML = '';
  for (var i = 0; i < items.length; i++) {
    list.appendChild(row(items[i]));
  }

  document.querySelector('.sum-sub').textContent = money(subtotal());
  document.querySelector('.sum-tax').textContent = money(taxAmount());
  document.querySelector('.sum-total').textContent = money(total());
}

function row(item) {
  var div = document.createElement('div');
  div.className = 'cart-item';

  var img = document.createElement('img');
  img.src = 'assets/' + item.img + '.svg';

  var mid = document.createElement('div');
  mid.className = 'item-details';

  var name = document.createElement('div');
  name.style.fontWeight = 'bold';
  name.textContent = pick(item.name);

  var unit = document.createElement('div');
  unit.style.fontSize = '13px';
  unit.style.color = '#666';
  unit.textContent = money(item.price) + ' x ' + num(item.qty);

  mid.appendChild(name);
  mid.appendChild(unit);

  var right = document.createElement('div');
  right.style.textAlign = 'left';

  var minus = document.createElement('button');
  minus.textContent = '-';
  minus.style.padding = '4px 10px';
  minus.style.margin = '0';
  minus.onclick = function () {
    setQty(item.id, item.qty - 1);
    if (item.qty - 1 < 1) toast(t('removed'));
    draw();
    paintBadge();
  };

  var qty = document.createElement('span');
  qty.textContent = ' ' + item.qty + ' ';
  qty.style.fontWeight = 'bold';

  var plus = document.createElement('button');
  plus.textContent = '+';
  plus.style.padding = '4px 10px';
  plus.style.margin = '0 6px 0 0';
  plus.onclick = function () {
    setQty(item.id, item.qty + 1);
    draw();
    paintBadge();
  };

  var price = document.createElement('div');
  price.className = 'item-price';
  price.textContent = money(item.line);

  var del = document.createElement('button');
  del.className = 'btn btn-red';
  del.style.padding = '4px 10px';
  del.style.margin = '6px 0 0 0';
  del.textContent = t('remove');
  del.onclick = function () {
    remove(item.id);
    toast(t('removed'));
    draw();
    paintBadge();
  };

  right.appendChild(minus);
  right.appendChild(qty);
  right.appendChild(plus);
  right.appendChild(price);
  right.appendChild(del);

  div.appendChild(img);
  div.appendChild(mid);
  div.appendChild(right);
  return div;
}

if (clearBtn) {
  clearBtn.onclick = function () {
    clear();
    toast(t('cleared'));
    draw();
    paintBadge();
  };
}
