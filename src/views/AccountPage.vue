<script setup>
import { useCartStore } from "@/store/cartStore";
import { useUserStore } from "../store/userStore";
import { useRouter } from "vue-router";
import { useFavoritesStore } from "@/store/favoritesStore";
import { useOrdersStore } from "@/store/ordersStore";
import { useWalletStore } from "@/store/walletStore";

const userStore = useUserStore();
const cartStore = useCartStore();
const favoritesStore = useFavoritesStore();
const ordersStore = useOrdersStore();
const router = useRouter();
const walletStore = useWalletStore();

ordersStore.loadOrders();
walletStore.loadWallet();

function handleLogout() {
  cartStore.clearCurrentCart();
  favoritesStore.clearCurrentFavorites();

  userStore.logout();

  router.push("/");
}
function handleIncreaseWallet() {
  const amount = Number(prompt("مبلغ مورد نظر را وارد کنید:"));

  if (!amount || amount <= 0) {
    return;
  }

  walletStore.increaseBalance(amount);
}
</script>

<template>
  <div class="account-page">
    <div class="container py-5">
      <!-- Header حساب -->
      <div class="account-header mb-5">
        <h1 class="fw-bold">سلام {{ userStore.currentUser.username }}! 👋</h1>

        <p class="text-secondary mb-0">
          {{ userStore.currentUser.mobile }}
        </p>
      </div>

      <!-- کارت‌های اصلی -->
      <div class="row g-4 mb-4">
        <!-- سفارش‌ها -->
        <div class="col-12 col-md-6">
          <router-link to="/orders" class="account-card text-decoration-none text-dark">
            <div class="card-icon">
              <i class="bi bi-box-seam"></i>
            </div>

            <div>
              <h5 class="fw-bold">سفارش‌های من</h5>

              <p class="text-secondary mb-0">{{ ordersStore.orders.length }} سفارش ثبت شده</p>
            </div>
          </router-link>
        </div>

        <!-- علاقه‌مندی‌ها -->
        <div class="col-12 col-md-6">
          <router-link to="/favorites" class="account-card text-decoration-none text-dark">
            <div class="card-icon">
              <i class="bi bi-heart"></i>
            </div>

            <div>
              <h5 class="fw-bold">علاقه‌مندی‌ها</h5>

              <p class="text-secondary mb-0">
                {{ favoritesStore.favorites.length }}
                محصول در علاقه‌مندی‌ها
              </p>
            </div>
          </router-link>
        </div>
      </div>
      <!-- سبد خرید -->
      <div class="col-12 col-md-6">
        <router-link to="/cart" class="account-card text-decoration-none text-dark">
          <div class="card-icon">
            <i class="bi bi-cart3"></i>
          </div>

          <div>
            <h5 class="fw-bold">سبد خرید</h5>

            <p class="text-secondary mb-0">
              {{ cartStore.totalItems() }}
              محصول در سبد خرید
            </p>
          </div>
        </router-link>
      </div>

      <!-- کیف پول -->
      <div class="wallet-card mb-4">
        <div class="wallet-icon">
          <i class="bi bi-wallet2"></i>
        </div>

        <div class="wallet-content">
          <span class="text-secondary"> موجودی کیف پول </span>

          <h3 class="fw-bold mb-0">{{ walletStore.balance.toLocaleString() }} تومان</h3>
          <button class="btn btn-dark mt-3" @click="handleIncreaseWallet">
            <i class="bi bi-plus-circle me-2"></i>
            افزایش موجودی
          </button>
        </div>
      </div>

      <!-- اطلاعات حساب -->
      <div class="account-info-card">
        <h4 class="fw-bold mb-4">
          <i class="bi bi-person-circle me-2"></i>
          اطلاعات حساب
        </h4>

        <div class="info-row">
          <span>نام کاربری</span>
          <strong>
            {{ userStore.currentUser.username }}
          </strong>
        </div>

        <div class="info-row">
          <span>شماره موبایل</span>
          <strong>
            {{ userStore.currentUser.mobile }}
          </strong>
        </div>

        <div class="info-row">
          <span>ایمیل</span>
          <strong>
            {{ userStore.currentUser.email }}
          </strong>
        </div>
      </div>

      <!-- خروج -->
      <div class="logout-section mt-4">
        <button class="btn btn-outline-danger" @click="handleLogout">
          <i class="bi bi-box-arrow-right me-2"></i>
          خروج از حساب کاربری
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.account-page {
  min-height: 100vh;
  background: #f8f8f8;
}

.account-header h1 {
  font-size: 32px;
}

.account-card {
  height: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 25px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.06);
  cursor: pointer;
  transition: 0.2s ease;
}

.account-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.09);
}

.card-icon,
.wallet-icon {
  width: 55px;
  height: 55px;
  min-width: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  background: #f1f1f1;
  font-size: 24px;
}

.wallet-card {
  margin-top: 50px;
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 25px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.06);
}

.wallet-content {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.account-info-card {
  padding: 30px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.06);
}

.info-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 0;
  border-bottom: 1px solid #eee;
}

.info-row:last-child {
  border-bottom: none;
}

.info-row span {
  color: #777;
}

.logout-section {
  text-align: left;
}

@media (max-width: 576px) {
  .account-header h1 {
    font-size: 25px;
  }

  .account-info-card {
    padding: 20px;
  }

  .info-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 7px;
  }

  .logout-section {
    text-align: center;
  }

  .logout-section .btn {
    width: 100%;
  }
}
</style>
