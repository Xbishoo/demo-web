export const CATEGORIES = [
  { id: 'all', name: { ar: 'الكل', en: 'All' } },
  { id: 'writing', name: { ar: 'أدوات الكتابة', en: 'Writing' } },
  { id: 'measuring', name: { ar: 'أدوات القياس', en: 'Measuring' } },
  { id: 'paper', name: { ar: 'الورق', en: 'Paper' } }
];

export const PRODUCTS = [
  {
    id: 'ruler',
    name: { ar: 'مسطرة زجاجية 15 سم', en: 'Glass Ruler 15 cm' },
    desc: { ar: 'مسطرة شفافة من البلاستيك المقوى، بعلامات قياس دقيقة.', en: 'Transparent ruler with precise metric markings.' },
    price: 1.0,
    cat: 'measuring',
    img: 'ruler'
  },
  {
    id: 'sharpener',
    name: { ar: 'مبراة بلاستيكية', en: 'Plastic Sharpener' },
    desc: { ar: 'مبراة بجودة عالية مع حوض تجميع للشظايا.', en: 'Sharpener with an integrated shavings tray.' },
    price: 2.0,
    cat: 'writing',
    img: 'sharpener'
  },
  {
    id: 'pen-blue',
    name: { ar: 'قلم حبر أزرق', en: 'Blue Ballpoint Pen' },
    desc: { ar: 'قلم جل ناعم 0.7 مم، حبر سريع الجفاف.', en: 'Smooth 0.7 mm gel ballpoint, fast-drying ink.' },
    price: 0.8,
    cat: 'writing',
    img: 'pen'
  },
  {
    id: 'pencil',
    name: { ar: 'قلم رصاص HB', en: 'HB Graphite Pencil' },
    desc: { ar: 'قلم رصاص برصاص عالي النقاء.', en: 'Pencil with a high-purity graphite core.' },
    price: 0.5,
    cat: 'writing',
    img: 'pencil'
  },
  {
    id: 'paper-a4',
    name: { ar: 'ورق A4 أبيض', en: 'A4 White Paper' },
    desc: { ar: 'ورق أبيض 80 جم، 500 ورقة.', en: '80 gsm white paper, 500 sheets.' },
    price: 4.5,
    cat: 'paper',
    img: 'paper'
  },
  {
    id: 'notebook',
    name: { ar: 'دفتر مساطر 100 ورقة', en: 'Ruled Notebook, 100 Sheets' },
    desc: { ar: 'دفتر سميك بـ 100 ورقة مسطرة.', en: 'Hardbound notebook, 100 ruled sheets.' },
    price: 3.25,
    cat: 'paper',
    img: 'notebook'
  },
  {
    id: 'eraser',
    name: { ar: 'ممحاة بيضاء', en: 'White Eraser' },
    desc: { ar: 'ممحاة ناعمة لا تترك أثراً.', en: 'Soft eraser that leaves no residue.' },
    price: 0.35,
    cat: 'writing',
    img: 'eraser'
  },
  {
    id: 'set-pens',
    name: { ar: 'طقم أقلام ملونة (12)', en: 'Coloured Pen Set (12)' },
    desc: { ar: 'طقم 12 قلم رصاص ملون.', en: 'Twelve coloured pencils.' },
    price: 6.0,
    cat: 'writing',
    img: 'pens'
  },
  {
    id: 'calculator',
    name: { ar: 'آلة حاسبة علمية', en: 'Scientific Calculator' },
    desc: { ar: 'آلة حاسبة بـ 240 وظيفة.', en: '240-function calculator.' },
    price: 7.5,
    cat: 'measuring',
    img: 'calculator'
  },
  {
    id: 'scissors',
    name: { ar: 'مقص ورق', en: 'Paper Scissors' },
    desc: { ar: 'مقص بشفرات فولاذ مقاومة للصدأ.', en: 'Rust-resistant steel scissors.' },
    price: 1.75,
    cat: 'writing',
    img: 'scissors'
  },
  {
    id: 'folder',
    name: { ar: 'ملف أوراق A4', en: 'A4 Document Folder' },
    desc: { ar: 'ملف من 20 ورقة بمشبك معدني.', en: '20-sheet folder with a metal clip.' },
    price: 2.4,
    cat: 'paper',
    img: 'folder'
  },
  {
    id: 'globe',
    name: { ar: 'كرة أرضية', en: 'Desktop Globe' },
    desc: { ar: 'كرة أرضية قطر 25 سم.', en: '25 cm globe on a rotating base.' },
    price: 12.0,
    cat: 'measuring',
    img: 'globe'
  }
];

export const TAX = 0.15;

export const STRINGS = {
  ar: {
    store: 'ديمو ديسك',
    tagline: 'متجر القرطاسية',
    search: 'ابحث عن منتج...',
    cart: 'السلة',
    login: 'تسجيل الدخول',
    logout: 'تسجيل الخروج',
    account: 'حسابي',
    emptyCart: 'سلتك فارغة',
    emptyCartHint: 'اضف بعض المنتجات للمتابعة',
    continue: 'متابعة التسوق',
    subtotal: 'المجموع الفرعي',
    tax: 'الضريبة',
    total: 'الإجمالي',
    addToCart: 'اضف للسلة',
    added: 'تمت الإضافة',
    removed: 'تم الحذف',
    cleared: 'تم إفراغ السلة',
    remove: 'حذف',
    clear: 'إفراغ',
    close: 'إغلاق',
    details: 'التفاصيل',
    results: 'منتج',
    noResults: 'لا توجد نتائج',
    username: 'اسم المستخدم',
    password: 'كلمة المرور',
    loginTitle: 'تسجيل الدخول',
    loginHint: 'الدخول مطلوب لإتمام الطلب',
    loginBtn: 'دخول',
    loggingIn: 'جاري الدخول...',
    errRequired: 'هذا الحقل مطلوب',
    errUsername: 'اقل من 3 احرف',
    errPassword: 'اقل من 4 احرف',
    welcome: 'مرحبا',
    signedOut: 'تم تسجيل الخروج',
    checkout: 'إتمام الطلب',
    orderSummary: 'ملخص الطلب',
    placeOrder: 'تأكيد الطلب',
    orderDone: 'تم استلام طلبك',
    thanks: 'شكرا لتسوقك معنا',
    ref: 'رقم الطلب',
    needLogin: 'سجل الدخول للمتابعة',
    footer: 'مشروع تخرج جامعي',
    demo: 'متجر تجريبي - بدون دفع حقيقي'
  },
  en: {
    store: 'Demo Disc',
    tagline: 'Stationery Store',
    search: 'Search products...',
    cart: 'Cart',
    login: 'Sign in',
    logout: 'Sign out',
    account: 'Account',
    emptyCart: 'Your cart is empty',
    emptyCartHint: 'Add a few products to continue',
    continue: 'Continue shopping',
    subtotal: 'Subtotal',
    tax: 'Tax',
    total: 'Total',
    addToCart: 'Add to cart',
    added: 'Added to cart',
    removed: 'Removed',
    cleared: 'Cart cleared',
    remove: 'Remove',
    clear: 'Clear',
    close: 'Close',
    details: 'Details',
    results: 'items',
    noResults: 'No results',
    username: 'Username',
    password: 'Password',
    loginTitle: 'Sign in',
    loginHint: 'Sign in to checkout',
    loginBtn: 'Sign in',
    loggingIn: 'Signing in...',
    errRequired: 'This field is required',
    errUsername: 'At least 3 characters',
    errPassword: 'At least 4 characters',
    welcome: 'Welcome',
    signedOut: 'Signed out',
    checkout: 'Checkout',
    orderSummary: 'Order summary',
    placeOrder: 'Place order',
    orderDone: 'Order received',
    thanks: 'Thank you for shopping with us',
    ref: 'Order reference',
    needLogin: 'Please sign in to continue',
    footer: 'University graduation project',
    demo: 'Demo store - no real payment'
  }
};

export function t(key) {
  var lang = document.documentElement.lang == 'ar' ? 'ar' : 'en';
  return STRINGS[lang][key] || STRINGS.en[key] || key;
}
