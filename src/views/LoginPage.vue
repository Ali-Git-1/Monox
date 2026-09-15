<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "../store/userStore";
import { useCartStore } from "@/store/cartStore";
import { useFavoritesStore } from "@/store/favoritesStore";

const username = ref("");
const password = ref("");
const errorMessage = ref("");

const router = useRouter();
const userStore = useUserStore();
const cartStore = useCartStore();
const favoritesStore = useFavoritesStore();

function handleLogin() {
  errorMessage.value = "";

  // دریافت کاربران ثبت‌نام‌شده
  const users = JSON.parse(localStorage.getItem("users") || "[]");

  // پیدا کردن کاربر
  const user = users.find(
    (item) => item.username === username.value && item.password === password.value,
  );

  // اگر کاربر پیدا نشد
  if (!user) {
    errorMessage.value = "نام کاربری یا رمز عبور اشتباه است.";
    return;
  }

  // ذخیره کاربر واردشده
  userStore.login(user);

  // برگرداندن سبد خرید کاربر
  cartStore.loadCart();

  // برگرداندن علاقه‌مندی‌های کاربر
  favoritesStore.loadFavorites();

  // انتقال به صفحه اصلی
  router.push("/");
}
</script>

<template>
  <div class="login-page">
    <div class="login-box">
      <h2>ورود به حساب</h2>

      <p class="text-secondary mb-4">برای ورود، نام کاربری و رمز عبور خود را وارد کنید</p>

      <form @submit.prevent="handleLogin">
        <!-- نام کاربری -->
        <div class="mb-3">
          <label class="form-label"> نام کاربری </label>

          <input
            v-model="username"
            type="text"
            class="form-control"
            placeholder="نام کاربری"
            required
          />
        </div>

        <!-- رمز عبور -->
        <div class="mb-3">
          <label class="form-label"> رمز عبور </label>

          <input
            v-model="password"
            type="password"
            class="form-control"
            placeholder="رمز عبور"
            required
          />
        </div>

        <!-- خطا -->
        <p v-if="errorMessage" class="text-danger small">
          {{ errorMessage }}
        </p>

        <!-- ورود -->
        <button type="submit" class="btn btn-dark w-100">ورود</button>
      </form>

      <p class="mt-4 mb-0 text-center">
        حساب کاربری ندارید؟
        <router-link to="/signup"> ثبت نام </router-link>
      </p>
    </div>
  </div>
</template>

<style scoped>
.login-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 15px;
  background: #f8f8f8;
}

.login-box {
  width: 100%;
  max-width: 450px;
  padding: 35px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.08);
}

.login-box h2 {
  font-weight: 700;
  margin-bottom: 10px;
}

@media (max-width: 576px) {
  .login-box {
    padding: 25px 20px;
  }
}
</style>
