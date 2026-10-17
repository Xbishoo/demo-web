# Demo Disc

متجر قرطاسية بسيط مبني بـ HTML و CSS و JavaScript بدون أي مكتبات خارجية.

University graduation project. Arabic with an English toggle.

## تشغيل

```bash
python3 -m http.server 8000
```

ثم افتح http://localhost:8000

## المزايا

- 12 منتج مع صور SVG
- بحث بالاسم
- فلترة حسب الفئة
- سلة مع تعديل الكمية
- السلة تنحفظ في localStorage
- صفحة تسجيل دخول مع تحقق من المدخلات
- صفحة الدفع
- تبديل اللغة بين العربية والانجليزية مع دعم RTL و LTR

## الملفات

```
index.html      صفحة المنتجات
cart.html       السلة
login.html      تسجيل الدخول
checkout.html   الدفع
account.html    الحساب
css/style.css
js/data.js      المنتجات والنصوص
js/cart.js      السلة
js/auth.js      تسجيل الدخول
js/i18n.js      اللغة
js/ui.js        الهيدر والتنبيهات
js/main.js      صفحة المنتجات
js/cart-page.js
js/login.js
js/checkout.js
js/account.js
assets/         الصور
```

## ملاحظات

هذا مشروع بدون backend. تسجيل الدخول يحفظ الاسم في sessionStorage فقط ولا يوجد تحقق حقيقي، ولا يوجد دفع فعلي. عند تأكيد الطلب يتم توليد رقم طلب عشوائي فقط.

الأسعار لا تحفظ في السلة، تحسب من المنتجات عند العرض.

## الرخصة

MIT
