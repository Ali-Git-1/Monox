# 🛍️ Monox

> یک فروشگاه اینترنتی مدرن برای پوشاک مردانه، ساخته‌شده با Vue.js

Monox یک پروژه فروشگاهی و نمونه‌کار Front-End است که با هدف تمرین و پیاده‌سازی یک رابط کاربری واقعی برای فروشگاه آنلاین پوشاک مردانه توسعه داده شده است.

این پروژه شامل صفحات فروشگاه، دسته‌بندی محصولات، جستجو، فیلتر و مرتب‌سازی محصولات، جزئیات محصول، سبد خرید، علاقه‌مندی‌ها، ورود و ثبت‌نام و بخش حساب کاربری است.

---

## ✨ Features

- 🏠 صفحه اصلی فروشگاه
- 🛍️ نمایش محصولات پوشاک مردانه
- 🔎 جستجوی محصولات
- 🎯 فیلتر محصولات بر اساس:
  - دسته‌بندی
  - برند
  - رنگ
  - سایز
  - محدوده قیمت
- ↕️ مرتب‌سازی محصولات
  - جدیدترین
  - ارزان‌ترین
  - گران‌ترین
  - محبوب‌ترین
- 🏷️ نمایش محصولات دارای تخفیف
- ❤️ سیستم علاقه‌مندی‌ها
- 🛒 سبد خرید
- 📦 مدیریت سفارش‌ها
- 👤 سیستم ورود و ثبت‌نام
- 👨‍💼 صفحه حساب کاربری
- 💳 کیف پول
- 📱 طراحی Responsive
- 🧭 مسیریابی با Vue Router
- 💾 مدیریت State با Pinia
- 🎨 رابط کاربری ساخته‌شده با Bootstrap
- 🔤 استفاده از فونت فارسی Shabnam
- 🌙 طراحی مدرن و مینیمال
- 📱 منوی مخصوص موبایل
- 🔍 جستجوی سریع محصولات

---

## 🛠️ Technologies

این پروژه با استفاده از تکنولوژی‌های زیر توسعه داده شده است:

| Technology | Usage |
|---|---|
| Vue.js | ساخت رابط کاربری |
| Vue Router | مدیریت مسیرها |
| Pinia | مدیریت State |
| Bootstrap | طراحی و Responsive Layout |
| Bootstrap Icons | آیکون‌های رابط کاربری |
| JavaScript | منطق برنامه |
| HTML5 | ساختار صفحات |
| CSS3 | استایل و طراحی |
| Vite | ابزار Build و Development |

---

## 📁 Project Structure

ساختار اصلی پروژه:

```text
vue-shop/
│
├── public/
│
├── src/
│   │
│   ├── assets/
│   │   ├── fonts/
│   │   ├── images/
│   │   ├── Images Products/
│   │   └── styles/
│   │
│   ├── components/
│   │   ├── Categories.vue
│   │   ├── Features.vue
│   │   ├── Footer.vue
│   │   ├── Newsletter.vue
│   │   ├── Slider.vue
│   │   └── SupportButton.vue
│   │
│   ├── data/
│   │   └── products.js
│   │
│   ├── router/
│   │   └── router.js
│   │
│   ├── store/
│   │   ├── favoritesStore.js
│   │   ├── userStore.js
│   │   ├── cartStore.js
│   │   ├── ordersStore.js
│   │   └── walletStore.js
│   │
│   ├── views/
│   │   ├── AccountPage.vue
│   │   ├── CartPage.vue
│   │   ├── FavoritesPage.vue
│   │   ├── HomePage.vue
│   │   ├── LoginPage.vue
│   │   ├── OrdersPage.vue
│   │   ├── ProductDetail.vue
│   │   ├── ProductsPage.vue
│   │   ├── SignupPage.vue
│   │   └── UpperBodyPage.vue
│   │
│   ├── App.vue
│   ├── Header.vue
│   └── main.js
│
├── index.html
├── package.json
├── vite.config.js
└── README.md
🚀 Installation

ابتدا Repository را Clone کنید:

git clone YOUR_REPOSITORY_URL

و وارد پوشه پروژه شوید:

cd vue-shop

سپس Dependencies را نصب کنید:

npm install

برای اجرای پروژه در محیط Development:

npm run dev

بعد از اجرا، Vite آدرس Local پروژه را در Terminal نمایش می‌دهد.

🧭 Main Routes

برخی از مسیرهای اصلی پروژه:

/

صفحه اصلی

/products/upper-body

محصولات بالا تنه

/products/bottom-body

محصولات پایین تنه

/products/simple

لباس‌های ساده

/products/formal

لباس‌های شیک و مجلسی

/products/sport

لباس‌های ورزشی

/favorites

علاقه‌مندی‌ها

/cart

سبد خرید

/login

ورود

/signup

ثبت‌نام

/account

حساب کاربری

/orders

سفارش‌ها

🎨 UI & Responsive Design

رابط کاربری Monox با تمرکز روی یک تجربه ساده، مدرن و مناسب فروشگاه‌های آنلاین طراحی شده است.

این پروژه برای نمایش صحیح در اندازه‌های مختلف صفحه طراحی شده و شامل:

Desktop Navigation
Mobile Navigation
Product Grid
Responsive Filters
Mobile Filter Menu
Responsive Header
Responsive Footer

است.

🛒 Product System

اطلاعات محصولات در فایل:

src/data/products.js

مدیریت می‌شوند.

هر محصول شامل اطلاعاتی مانند:

نام محصول
دسته‌بندی
زیردسته‌بندی
برند
رنگ
سایز
قیمت
تخفیف
تصویر

است.

سیستم محصولات امکان جستجو، فیلتر، مرتب‌سازی و نمایش قیمت نهایی محصولات تخفیف‌دار را فراهم می‌کند.

📦 State Management

برای مدیریت State بخش‌های مختلف فروشگاه از Pinia استفاده شده است.

Storeهای اصلی پروژه:

favoritesStore
userStore
cartStore
ordersStore
walletStore

هر Store مسئول مدیریت بخش مشخصی از اطلاعات برنامه است.

🔐 Authentication

پروژه دارای سیستم ورود و ثبت‌نام است.

همچنین برای مسیرهایی که نیاز به ورود کاربر دارند، از Route Guard استفاده شده است تا کاربران بدون احراز هویت به صفحات محافظت‌شده دسترسی نداشته باشند.

📸 Screenshots

تصاویر پروژه در این بخش قرار خواهند گرفت.

برای مثال:

docs/
└── screenshots/
    ├── home.png
    ├── products.png
    ├── product-detail.png
    └── cart.png
📌 Project Status

🚧 Portfolio Project

Monox یک پروژه Front-End برای نمایش مهارت‌ها در طراحی و توسعه رابط کاربری فروشگاه اینترنتی است.

👨‍💻 Developer

Developed by Ali Arabpour

Front-End Developer
