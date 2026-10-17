import { PRODUCTS, TAX } from './data.js';

var cart = [];

export function loadCart() {
  try {
    var raw = JSON.parse(localStorage.getItem('dd-cart') || '[]');
    if (raw instanceof Array == false) raw = [];
    cart = [];
    for (var i = 0; i < raw.length; i++) {
      var found = getProduct(raw[i].id);
      if (found) {
        cart.push({ id: raw[i].id, qty: capQty(raw[i].qty) });
      }
    }
  } catch (e) {
    cart = [];
  }
  return cart;
}

function save() {
  localStorage.setItem('dd-cart', JSON.stringify(cart));
}

function getProduct(id) {
  for (var i = 0; i < PRODUCTS.length; i++) {
    if (PRODUCTS[i].id == id) return PRODUCTS[i];
  }
  return null;
}

function capQty(n) {
  n = Math.floor(Number(n) || 1);
  if (n < 1) n = 1;
  if (n > 99) n = 99;
  return n;
}

export function getCart() {
  return cart;
}

export function count() {
  var n = 0;
  for (var i = 0; i < cart.length; i++) n = n + cart[i].qty;
  return n;
}

export function details() {
  var out = [];
  for (var i = 0; i < cart.length; i++) {
    var p = getProduct(cart[i].id);
    if (p) {
      out.push({
        id: p.id,
        name: p.name,
        desc: p.desc,
        price: p.price,
        cat: p.cat,
        img: p.img,
        qty: cart[i].qty,
        line: p.price * cart[i].qty
      });
    }
  }
  return out;
}

export function subtotal() {
  var d = details();
  var s = 0;
  for (var i = 0; i < d.length; i++) s = s + d[i].line;
  return s;
}

export function taxAmount() {
  return subtotal() * TAX;
}

export function total() {
  return subtotal() + taxAmount();
}

export function add(id, qty) {
  if (!getProduct(id)) return;
  if (qty == undefined) qty = 1;
  var item = find(id);
  if (item) {
    item.qty = capQty(item.qty + qty);
  } else {
    cart.push({ id: id, qty: capQty(qty) });
  }
  save();
}

function find(id) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].id == id) return cart[i];
  }
  return null;
}

export function setQty(id, qty) {
  var item = find(id);
  if (!item) return;
  if (qty < 1) {
    remove(id);
    return;
  }
  item.qty = capQty(qty);
  save();
}

export function remove(id) {
  var next = [];
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].id != id) next.push(cart[i]);
  }
  cart = next;
  save();
}

export function clear() {
  cart = [];
  save();
}

export function inCart(id) {
  return find(id) != null;
}
