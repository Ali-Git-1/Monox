import { createRouter, createWebHashHistory } from "vue-router";

import HomePage from "../views/HomePage.vue";
import ProductsPage from "@/views/ProductsPage.vue";
import ProductDetail from "@/views/ProductDetail.vue";
import LoginPage from "@/views/LoginPage.vue";
import SignupPage from "@/views/SignupPage.vue";
import AccountPage from "@/views/AccountPage.vue";
import CartPage from "@/views/CartPage.vue";
import FavoritesPage from "@/views/FavoritesPage.vue";
import OrdersPage from "@/views/OrdersPage.vue";

const routes = [
  {
    path: "/",
    component: HomePage,
    meta: {
      title: "Monox | صفحه اصلی",
    },
  },

  {
    path: "/products/upper-body",
    component: ProductsPage,
    meta: {
      title: "Monox | محصولات بالا تنه",
    },
  },

  {
    path: "/products/bottom-body",
    component: ProductsPage,
    meta: {
      title: "Monox | محصولات پایین تنه",
    },
  },
  {
    path: "/product/:id",
    component: ProductDetail,
    meta: {
      title: "Monox | جزئیات محصول",
    },
  },
  {
    path: "/login",
    component: LoginPage,
    meta: {
      title: "Monox | ورود",
    },
  },

  {
    path: "/signup",
    component: SignupPage,
    meta: {
      title: "Monox | ثبت نام",
    },
  },

  {
    path: "/account",
    component: AccountPage,
    meta: {
      title: "Monox | حساب کاربری",
    },
  },
  {
    path: "/cart",
    component: CartPage,
    meta: {
      title: "Monox | سبد خرید",
    },
  },
  {
    path: "/favorites",
    component: FavoritesPage,
    meta: {
      title: "Monox | علاقه‌مندی‌های من",
      requiresAuth: true,
    },
  },
  {
    path: "/orders",
    component: OrdersPage,
    meta: {
      title: "Monox | سفارش‌های من",
      requiresAuth: true,
    },
  },
  {
    path: "/products/simple",
    component: ProductsPage,
    meta: { title: "Monox | لباس‌های ساده" },
  },

  {
    path: "/products/formal",
    component: ProductsPage,
    meta: { title: "Monox | لباس‌های شیک و مجلسی" },
  },

  {
    path: "/products/sport",
    component: ProductsPage,
    meta: { title: "Monox | لباس‌های ورزشی" },
  },
  {
    path: "/products/search",
    component: ProductsPage,
    meta: {
      title: "Monox | جستجوی محصولات",
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0, behavior: "smooth" };
  },
});

router.afterEach((to) => {
  document.title = to.meta.title || "Monox";
});

router.beforeEach((to) => {
  const user = localStorage.getItem("currentUser");

  if (to.meta.requiresAuth && !user) {
    return "/login";
  }
});

export default router;
