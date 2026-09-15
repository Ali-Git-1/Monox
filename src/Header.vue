<template>
  <header class="header">
    <!-- Top Bar -->
    <div class="top-bar bg-dark text-white text-center py-2">
      ارسال رایگان برای سفارش‌های بالای ۲ میلیون تومان
    </div>

    <!-- ========================= -->
    <!-- Desktop / Main Header -->
    <!-- ========================= -->

    <div class="header-main">
      <div class="header-logo">
        <router-link to="/" class="logo"> MONOX </router-link>
      </div>

      <!-- Search -->
      <div class="search-box">
        <i class="bi bi-search"></i>

        <input
          v-model="searchText"
          type="text"
          placeholder="لباس مورد نظر را سرچ کن و Enter رو بزن..."
          @keyup.enter="handleSearch"
        />
      </div>

      <!-- Actions -->
      <div class="header-actions">
        <!-- Favorites -->
        <router-link to="/favorites" class="header-icon" title="علاقه‌مندی‌ها">
          <i :class="favoritesStore.favorites.length > 0 ? 'bi bi-heart-fill' : 'bi bi-heart'"></i>

          <span v-if="favoritesStore.favorites.length > 0" class="icon-badge">
            {{ favoritesStore.favorites.length }}
          </span>
        </router-link>

        <!-- Cart -->
        <router-link to="/cart" class="header-icon" title="سبد خرید">
          <i class="bi bi-bag"></i>

          <span v-if="cartStore.totalItems() > 0" class="icon-badge">
            {{ cartStore.totalItems() }}
          </span>
        </router-link>

        <!-- Account -->
        <router-link v-if="!isLoggedIn" to="/login" class="login-link">
          ورود | ثبت نام
        </router-link>

        <router-link v-else to="/account" class="user-link">
          <i class="bi bi-person"></i>

          <span>
            {{ userStore.currentUser.username }}
          </span>
        </router-link>
      </div>

      <!-- Mobile Menu Button -->
      <button class="mobile-menu-btn" type="button" @click="mobileMenuOpen = !mobileMenuOpen">
        <i :class="mobileMenuOpen ? 'bi bi-x-lg' : 'bi bi-list'"></i>
      </button>
    </div>

    <!-- ========================= -->
    <!-- Desktop Navigation -->
    <!-- ========================= -->

    <!-- ========================= -->
    <!-- Mobile Menu -->
    <!-- ========================= -->

    <div v-if="mobileMenuOpen" class="mobile-menu">
      <!-- Mobile Search -->

      <div class="mobile-search">
        <i class="bi bi-search"></i>

        <input
          v-model="searchText"
          type="text"
          placeholder="جستجوی لباس..."
          @keyup.enter="handleSearch"
        />
      </div>

      <!-- Home -->

      <router-link to="/" class="mobile-link" @click="mobileMenuOpen = false">
        صفحه اصلی
      </router-link>

      <!-- Simple -->

      <div class="mobile-category">
        <button class="mobile-category-btn" @click="mobileSimpleOpen = !mobileSimpleOpen">
          <span>ساده</span>

          <i :class="mobileSimpleOpen ? 'bi bi-chevron-up' : 'bi bi-chevron-down'"></i>
        </button>

        <div v-if="mobileSimpleOpen" class="mobile-submenu">
          <router-link to="/products/simple" @click="mobileMenuOpen = false">
            همه محصولات ساده
          </router-link>

          <router-link to="/products/simple" @click="mobileMenuOpen = false"> تیشرت </router-link>

          <router-link to="/products/simple" @click="mobileMenuOpen = false"> پیراهن </router-link>

          <router-link to="/products/simple" @click="mobileMenuOpen = false">
            هودی و سویشرت
          </router-link>
        </div>
      </div>

      <!-- Formal -->

      <div class="mobile-category">
        <button class="mobile-category-btn" @click="mobileFormalOpen = !mobileFormalOpen">
          <span>شیک و مجلسی</span>

          <i :class="mobileFormalOpen ? 'bi bi-chevron-up' : 'bi bi-chevron-down'"></i>
        </button>

        <div v-if="mobileFormalOpen" class="mobile-submenu">
          <router-link to="/products/formal" @click="mobileMenuOpen = false">
            همه محصولات رسمی
          </router-link>

          <router-link to="/products/formal" @click="mobileMenuOpen = false">
            کت و شلوار
          </router-link>

          <router-link to="/products/formal" @click="mobileMenuOpen = false"> کت تک </router-link>

          <router-link to="/products/formal" @click="mobileMenuOpen = false">
            پیراهن رسمی
          </router-link>

          <router-link to="/products/formal" @click="mobileMenuOpen = false">
            شلوار پارچه‌ای
          </router-link>
        </div>
      </div>

      <!-- Sport -->

      <div class="mobile-category">
        <button class="mobile-category-btn" @click="mobileSportOpen = !mobileSportOpen">
          <span>ورزشی</span>

          <i :class="mobileSportOpen ? 'bi bi-chevron-up' : 'bi bi-chevron-down'"></i>
        </button>

        <div v-if="mobileSportOpen" class="mobile-submenu">
          <router-link to="/products/sport" @click="mobileMenuOpen = false">
            همه محصولات ورزشی
          </router-link>

          <router-link to="/products/sport" @click="mobileMenuOpen = false">
            تیشرت ورزشی
          </router-link>

          <router-link to="/products/sport" @click="mobileMenuOpen = false">
            هودی و سویشرت
          </router-link>

          <router-link to="/products/sport" @click="mobileMenuOpen = false">
            شلوار ورزشی
          </router-link>

          <router-link to="/products/sport" @click="mobileMenuOpen = false">
            شلوارک ورزشی
          </router-link>
        </div>
      </div>

      <div class="mobile-divider"></div>

      <!-- Favorites -->

      <router-link to="/favorites" class="mobile-action" @click="mobileMenuOpen = false">
        <i class="bi bi-heart"></i>

        علاقه‌مندی‌ها
      </router-link>

      <!-- Cart -->

      <router-link to="/cart" class="mobile-action" @click="mobileMenuOpen = false">
        <i class="bi bi-bag"></i>

        سبد خرید
      </router-link>

      <!-- Account -->

      <router-link
        :to="isLoggedIn ? '/account' : '/login'"
        class="mobile-action"
        @click="mobileMenuOpen = false"
      >
        <i class="bi bi-person"></i>

        {{ isLoggedIn ? "حساب کاربری" : "ورود | ثبت نام" }}
      </router-link>
    </div>
  </header>
  <nav class="desktop-nav">
    <router-link to="/" class="nav-link" exact-active-class="active"> صفحه اصلی </router-link>

    <!-- ساده -->

    <div class="mega-parent">
      <router-link to="/products/simple" class="nav-link" exact-active-class="active">
        ساده
      </router-link>

      <div class="mega-menu">
        <div class="mega-content">
          <div class="mega-column">
            <h6>انواع لباس</h6>

            <router-link to="/products/simple"> تیشرت </router-link>

            <router-link to="/products/simple"> پیراهن </router-link>

            <router-link to="/products/simple"> پولوشرت </router-link>

            <router-link to="/products/simple"> هودی و سویشرت </router-link>
          </div>

          <div class="mega-column">
            <h6>استایل</h6>

            <router-link to="/products/simple"> روزمره </router-link>

            <router-link to="/products/simple"> کژوال </router-link>

            <router-link to="/products/simple"> مینیمال </router-link>

            <router-link to="/products/simple"> پاییزه و زمستانه </router-link>
          </div>
        </div>
      </div>
    </div>

    <!-- شیک و مجلسی -->

    <div class="mega-parent">
      <router-link to="/products/formal" class="nav-link" exact-active-class="active">
        شیک و مجلسی
      </router-link>

      <div class="mega-menu">
        <div class="mega-content">
          <div class="mega-column">
            <h6>لباس‌های رسمی</h6>

            <router-link to="/products/formal"> کت و شلوار </router-link>

            <router-link to="/products/formal"> کت تک </router-link>

            <router-link to="/products/formal"> پیراهن رسمی </router-link>

            <router-link to="/products/formal"> شلوار پارچه‌ای </router-link>
          </div>

          <div class="mega-column">
            <h6>مناسب برای</h6>

            <router-link to="/products/formal"> استایل اداری </router-link>

            <router-link to="/products/formal"> مراسم و مهمانی </router-link>

            <router-link to="/products/formal"> استایل کلاسیک </router-link>

            <router-link to="/products/formal"> استایل نیمه‌رسمی </router-link>
          </div>
        </div>
      </div>
    </div>

    <!-- ورزشی -->

    <div class="mega-parent">
      <router-link to="/products/sport" class="nav-link" exact-active-class="active">
        ورزشی
      </router-link>

      <div class="mega-menu">
        <div class="mega-content">
          <div class="mega-column">
            <h6>لباس‌های ورزشی</h6>

            <router-link to="/products/sport"> تیشرت ورزشی </router-link>

            <router-link to="/products/sport"> هودی و سویشرت </router-link>

            <router-link to="/products/sport"> شلوار ورزشی </router-link>

            <router-link to="/products/sport"> شلوارک ورزشی </router-link>
          </div>

          <div class="mega-column">
            <h6>استایل ورزشی</h6>

            <router-link to="/products/sport"> استایل باشگاهی </router-link>

            <router-link to="/products/sport"> استایل دویدن </router-link>

            <router-link to="/products/sport"> استایل روزمره اسپرت </router-link>

            <router-link to="/products/sport"> لباس‌های راحتی </router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";

import { useUserStore } from "./store/userStore";
import { useCartStore } from "./store/cartStore";
import { useFavoritesStore } from "./store/favoritesStore";

const router = useRouter();

const userStore = useUserStore();
const cartStore = useCartStore();
const favoritesStore = useFavoritesStore();

const isLoggedIn = computed(() => {
  return userStore.isLoggedIn();
});

/* Search */

const searchText = ref("");

function handleSearch() {
  const query = searchText.value.trim();

  if (!query) return;

  router.push({
    path: "/products/search",
    query: {
      q: query,
    },
  });

  mobileMenuOpen.value = false;
}

/* Mobile Menu */

const mobileMenuOpen = ref(false);

const mobileSimpleOpen = ref(false);
const mobileFormalOpen = ref(false);
const mobileSportOpen = ref(false);
</script>

<style scoped>
/* ========================= */
/* Header */
/* ========================= */

.header {
  width: 100%;
  background: #fff;
  position: relative;
  z-index: 1000;
}

/* ========================= */
/* Top Bar */
/* ========================= */
.top-bar {
  font-size: 13px;
  letter-spacing: 0.2px;

  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}

/* ========================= */
/* Main Header */
/* ========================= */

.header-main {
  min-height: 105px;

  display: grid;

  grid-template-columns:
    1fr
    minmax(260px, 380px)
    1fr;

  align-items: center;

  gap: 35px;

  padding: 0 45px;

  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}

/* Logo */

.header-logo {
  display: flex;
  justify-content: flex-start;
}

.logo {
  color: #111;

  text-decoration: none;

  font-size: 29px;

  font-weight: 800;

  letter-spacing: 5px;
}

/* ========================= */
/* Search */
/* ========================= */

.search-box {
  height: 45px;

  display: flex;
  align-items: center;

  border: 1px solid #dcdcdc;

  border-radius: 12px;

  padding: 0 14px;

  background: #fafafa;

  transition: 0.25s ease;
}

.search-box:focus-within {
  border-color: #111;

  background: #fff;

  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
}

.search-box i {
  font-size: 18px;

  color: #666;
}

.search-box input {
  width: 100%;

  border: none;
  outline: none;

  background: transparent;

  margin-right: 10px;

  font-family: inherit;

  font-size: 13px;

  direction: rtl;
}

.search-box input::placeholder {
  color: #999;
}

/* ========================= */
/* Actions */
/* ========================= */

.header-actions {
  display: flex;

  justify-content: flex-end;

  align-items: center;

  gap: 22px;
}

.header-icon {
  position: relative;

  color: #111;

  text-decoration: none;

  font-size: 22px;

  transition: 0.25s ease;
}

.header-icon:hover {
  color: #555;

  transform: translateY(-2px);
}

.icon-badge {
  position: absolute;

  top: -8px;
  right: -10px;

  min-width: 18px;
  height: 18px;

  display: flex;

  align-items: center;
  justify-content: center;

  background: #111;

  color: #fff;

  border-radius: 50%;

  font-size: 10px;
}

.login-link {
  color: #111;

  text-decoration: none;

  font-size: 14px;

  white-space: nowrap;
}

.login-link:hover {
  text-decoration: underline;
}

.user-link {
  display: flex;

  align-items: center;

  gap: 7px;

  color: #111;

  text-decoration: none;

  font-size: 14px;
}

/* ========================= */
/* Desktop Navigation */
/* ========================= */

.desktop-nav {
  min-height: 58px;

  display: flex;
  justify-content: center;
  align-items: center;

  gap: 38px;

  border-top: 1px solid #f1f1f1;

  position: sticky;
  top: 0;

  background: #fff;

  z-index: 2000;

  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.04);
}

.nav-link {
  position: relative;

  color: #222;

  text-decoration: none;

  font-size: 15px;

  font-weight: 500;

  padding: 10px 2px;

  transition: 0.25s ease;
}

.nav-link:hover {
  color: #000;
}

.nav-link::after {
  content: "";

  position: absolute;

  right: 0;

  bottom: 2px;

  width: 0;

  height: 2px;

  background: #111;

  transition: width 0.3s ease;
}

.nav-link:hover::after,
.nav-link.active::after {
  width: 100%;
}

/* ========================= */
/* Mega Menu */
/* ========================= */

.mega-parent {
  position: relative;
}

/* Invisible bridge */

.mega-parent::before {
  content: "";

  position: absolute;

  top: 100%;

  right: 0;

  width: 100%;

  height: 25px;
}

/* Menu */

.mega-menu {
  position: absolute;

  top: calc(100% + 20px);

  right: 50%;

  transform: translateX(50%) translateY(8px);

  width: 650px;

  background: #fff;

  border: 1px solid #e8e8e8;

  border-radius: 18px;

  padding: 28px 32px;

  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.1);

  opacity: 0;

  visibility: hidden;

  pointer-events: none;

  transition:
    opacity 0.25s ease,
    transform 0.25s ease,
    visibility 0.25s ease;

  z-index: 2000;
}

.mega-parent:hover .mega-menu {
  opacity: 1;

  visibility: visible;

  pointer-events: auto;

  transform: translateX(50%) translateY(0);
}

.mega-content {
  display: grid;

  grid-template-columns: 1fr 1fr;

  gap: 50px;
}

.mega-column {
  display: flex;

  flex-direction: column;

  gap: 13px;
}

.mega-column h6 {
  position: relative;

  margin: 0 0 8px;

  padding-bottom: 12px;

  font-size: 14px;

  font-weight: 700;

  color: #111;
}

.mega-column h6::after {
  content: "";

  position: absolute;

  right: 0;
  bottom: 0;

  width: 28px;
  height: 2px;

  background: #111;

  border-radius: 10px;
}

.mega-column a {
  display: flex;

  align-items: center;

  color: #777;

  text-decoration: none;

  font-size: 13px;

  transition: 0.2s ease;
}

.mega-column a::before {
  content: "←";

  opacity: 0;

  margin-left: 0;

  transition: 0.2s ease;
}

.mega-column a:hover {
  color: #111;

  transform: translateX(-5px);
}

.mega-column a:hover::before {
  opacity: 1;

  margin-left: 7px;
}

/* ========================= */
/* Mobile Button */
/* ========================= */

.mobile-menu-btn {
  display: none;

  border: none;

  background: transparent;

  color: #111;

  font-size: 25px;

  padding: 5px;

  cursor: pointer;
}

/* ========================= */
/* Mobile Menu */
/* ========================= */

.mobile-menu {
  display: none;
}

/* Mobile Search */

.mobile-search {
  display: flex;

  align-items: center;

  height: 44px;

  border: 1px solid #ddd;

  border-radius: 10px;

  padding: 0 13px;

  margin-bottom: 12px;
}

.mobile-search i {
  color: #777;
}

.mobile-search input {
  width: 100%;

  border: none;

  outline: none;

  background: transparent;

  margin-right: 10px;

  font-family: inherit;

  font-size: 13px;

  direction: rtl;
}

/* Mobile Links */

.mobile-link {
  display: block;

  padding: 15px 0;

  color: #111;

  text-decoration: none;

  font-size: 15px;
}

.mobile-category-btn {
  width: 100%;

  display: flex;

  align-items: center;

  justify-content: space-between;

  border: none;

  background: transparent;

  padding: 15px 0;

  color: #111;

  font-family: inherit;

  font-size: 15px;

  cursor: pointer;
}

.mobile-submenu {
  display: flex;

  flex-direction: column;

  gap: 13px;

  padding: 5px 15px 12px;

  border-right: 1px solid #eee;
}

.mobile-submenu a {
  color: #777;

  text-decoration: none;

  font-size: 13px;

  transition: 0.2s;
}

.mobile-submenu a:hover {
  color: #111;
}

.mobile-divider {
  height: 1px;

  background: #eee;

  margin: 8px 0;
}

.mobile-action {
  display: flex;

  align-items: center;

  gap: 12px;

  padding: 14px 0;

  color: #222;

  text-decoration: none;

  font-size: 14px;
}

.mobile-action i {
  font-size: 19px;
}

/* ========================= */
/* Tablet */
/* ========================= */

@media (max-width: 991px) {
  .header-main {
    padding: 0 25px;

    grid-template-columns:
      1fr
      minmax(220px, 300px)
      1fr;

    gap: 20px;
  }

  .desktop-nav {
    gap: 25px;
  }

  .mega-menu {
    width: 550px;
  }
}

/* ========================= */
/* Mobile */
/* ========================= */

@media (max-width: 767px) {
  .header-main {
    min-height: 70px;

    display: flex;

    align-items: center;

    justify-content: space-between;

    padding: 0 18px;
  }

  .header-logo {
    order: 2;
  }

  .logo {
    font-size: 23px;

    letter-spacing: 4px;
  }

  .search-box {
    display: none;
  }

  .header-actions {
    display: none;
  }

  .mobile-menu-btn {
    display: block;

    order: 1;
  }

  .desktop-nav {
    display: none;
  }

  .mobile-menu {
    display: block;

    background: #fff;

    padding: 12px 22px 25px;

    border-top: 1px solid #eee;

    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.07);
  }

  .top-bar {
    font-size: 11px;
  }
}

/* ========================= */
/* Small Mobile */
/* ========================= */

@media (max-width: 400px) {
  .header-main {
    padding: 0 14px;
  }

  .logo {
    font-size: 20px;
  }

  .mobile-menu {
    padding-left: 18px;
    padding-right: 18px;
  }
}
</style>
