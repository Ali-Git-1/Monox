<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const username = ref("");
const mobile = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const errorMessage = ref("");

const router = useRouter();

function handleSignup() {
  errorMessage.value = "";

  // بررسی نام کاربری
  if (username.value.length < 3) {
    errorMessage.value = "نام کاربری باید حداقل ۳ کاراکتر باشد.";
    return;
  }

  // بررسی شماره موبایل
  if (!/^09\d{9}$/.test(mobile.value)) {
    errorMessage.value = "شماره موبایل معتبر نیست.";
    return;
  }

  // بررسی ایمیل
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    errorMessage.value = "ایمیل وارد شده معتبر نیست.";
    return;
  }

  // بررسی رمز عبور
  if (password.value.length < 6) {
    errorMessage.value = "رمز عبور باید حداقل ۶ کاراکتر باشد.";
    return;
  }

  // بررسی تکرار رمز
  if (password.value !== confirmPassword.value) {
    errorMessage.value = "رمز عبور و تکرار آن یکسان نیستند.";
    return;
  }

  // دریافت کاربران قبلی
  const users = JSON.parse(localStorage.getItem("users") || "[]");

  // بررسی تکراری نبودن نام کاربری
  const existingUsername = users.find((user) => user.username === username.value);

  if (existingUsername) {
    errorMessage.value = "این نام کاربری قبلاً استفاده شده است.";
    return;
  }

  // بررسی تکراری نبودن موبایل
  const existingMobile = users.find((user) => user.mobile === mobile.value);

  if (existingMobile) {
    errorMessage.value = "این شماره موبایل قبلاً ثبت شده است.";
    return;
  }

  // بررسی تکراری نبودن ایمیل
  const existingEmail = users.find((user) => user.email === email.value);

  if (existingEmail) {
    errorMessage.value = "این ایمیل قبلاً ثبت شده است.";
    return;
  }

  // ساخت کاربر جدید
  const newUser = {
    id: Date.now(),
    username: username.value,
    mobile: mobile.value,
    email: email.value,
    password: password.value,
  };

  // اضافه کردن کاربر
  users.push(newUser);

  // ذخیره کاربران
  localStorage.setItem("users", JSON.stringify(users));

  // انتقال به صفحه ورود
  router.push("/login");
}
</script>

<template>
  <div class="signup-page">
    <div class="signup-box">
      <h2>ایجاد حساب</h2>

      <p class="text-secondary mb-4">برای ایجاد حساب اطلاعات خود را وارد کنید</p>

      <form @submit.prevent="handleSignup">
        <!-- نام کاربری -->
        <div class="mb-3">
          <label class="form-label"> نام کاربری </label>

          <input
            v-model="username"
            type="text"
            class="form-control"
            placeholder="نام کاربری خود را وارد کنید"
            maxlength="10"
            required
          />
        </div>

        <!-- شماره موبایل -->
        <div class="mb-3">
          <label class="form-label"> شماره موبایل </label>

          <input
            v-model="mobile"
            type="tel"
            class="form-control"
            placeholder="09123456789"
            maxlength="11"
            required
          />
        </div>

        <!-- ایمیل -->
        <div class="mb-3">
          <label class="form-label"> ایمیل </label>

          <input
            v-model="email"
            type="email"
            class="form-control"
            placeholder="example@gmail.com"
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
            placeholder="حداقل ۶ کاراکتر"
            required
          />
        </div>

        <!-- تکرار رمز عبور -->
        <div class="mb-3">
          <label class="form-label"> تکرار رمز عبور </label>

          <input
            v-model="confirmPassword"
            type="password"
            class="form-control"
            placeholder="رمز عبور را دوباره وارد کنید"
            required
          />
        </div>

        <!-- پیام خطا -->
        <p v-if="errorMessage" class="text-danger small">
          {{ errorMessage }}
        </p>

        <!-- ثبت نام -->
        <button type="submit" class="btn btn-dark w-100">ثبت نام</button>
      </form>

      <p class="mt-4 mb-0 text-center">
        قبلاً حساب ساخته‌اید؟
        <router-link to="/login"> ورود </router-link>
      </p>
    </div>
  </div>
</template>

<style scoped>
.signup-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 15px;
  background: #f8f8f8;
}

.signup-box {
  width: 100%;
  max-width: 450px;
  padding: 35px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.08);
}

.signup-box h2 {
  font-weight: 700;
  margin-bottom: 10px;
}

@media (max-width: 576px) {
  .signup-box {
    padding: 25px 20px;
  }
}
</style>
