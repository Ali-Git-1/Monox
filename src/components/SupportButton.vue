<template>
  <div class="support-wrapper">
    <a
      href="https://wa.me/989178975867"
      target="_blank"
      class="support-button"
      aria-label="پشتیبانی واتساپ"
    >
      <i class="fa-brands fa-whatsapp"></i>
    </a>
    <div class="support-message">
      <b> سوالی دارید؟</b>
      <br />
      با ما در ارتباط باشید!
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.support-wrapper {
  position: fixed;
  right: 25px;
  bottom: 25px;

  border: none;

  z-index: 9999;

  display: flex;
  align-items: center;
  gap: 12px;
}

/* پیام کنار دکمه */

.support-message {
  background: #111;
  color: #fff;

  padding: 12px 18px;

  border-radius: 15px;

  font-size: 14px;
  line-height: 1.8;

  box-shadow: 0 8px 25px rgba(0, 0, 0, 1);

  opacity: 0;

  transform: translateX(15px);

  pointer-events: none;

  animation: messageShow 10s infinite;
}

/* دکمه واتساپ */

.support-button {
  width: 62px;
  height: 62px;

  border-radius: 50%;

  background: #25d366;
  color: white;

  display: flex;
  align-items: center;
  justify-content: center;

  text-decoration: none;

  font-size: 32px;

  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);

  animation: whatsappPulse 10s infinite;

  transition: 1s;
}

/* Hover */

.support-button:hover {
  transform: scale(1.1);
  border: 10px solid green;
  border: 50%;
}

/* انیمیشن توجه دکمه */

@keyframes whatsappPulse {
  0% {
    transform: scale(1);
  }

  10% {
    transform: scale(1.12);
  }

  20% {
    transform: scale(1);
  }

  30% {
    transform: scale(1.08);
  }

  40% {
    transform: scale(1);
  }

  100% {
    transform: scale(1);
  }
}

/* نمایش پیام */

@keyframes messageShow {
  0% {
    opacity: 0;
    transform: translateX(15px);
  }

  10% {
    opacity: 1;
    transform: translateX(0);
  }

  30% {
    opacity: 1;
    transform: translateX(0);
  }

  40% {
    opacity: 0;
    transform: translateX(15px);
  }

  100% {
    opacity: 0;
    transform: translateX(15px);
  }
}

/* موبایل */

@media (max-width: 768px) {
  .support-wrapper {
    right: 18px;
    bottom: 18px;
  }

  .support-button {
    width: 55px;
    height: 55px;
    font-size: 28px;
  }

  .support-message {
    font-size: 12px;
    padding: 9px 13px;
  }
}
</style>
