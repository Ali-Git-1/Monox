<template>
  <div class="section-title">
    <h2>استایل خودتو پیدا کن</h2>
    <p>جدیدترین کالکشن‌های مردانه</p>
  </div>

  <section class="features container-fluid px-3 px-md-4">
    <div class="row g-3">
      <!-- ارسال رایگان -->
      <div class="col-12 col-sm-6 col-lg">
        <div class="feature-box h-100">
          <i class="bi bi-truck"></i>

          <div>
            <h4>ارسال رایگان</h4>
            <p>ارسال رایگان سفارشات</p>
          </div>
        </div>
      </div>

      <!-- تضمین اصالت -->
      <div class="col-12 col-sm-6 col-lg">
        <div class="feature-box h-100">
          <i class="bi bi-patch-check"></i>

          <div>
            <h4>تضمین اصالت</h4>
            <p>از برندهای معتبر</p>
          </div>
        </div>
      </div>

      <!-- بازگشت وجه -->
      <div class="col-12 col-sm-6 col-lg">
        <div class="feature-box h-100">
          <i class="bi bi-arrow-return-left"></i>

          <div>
            <h4>بازگشت وجه</h4>
            <p>ضمانت 7 روزه کالا</p>
          </div>
        </div>
      </div>

      <!-- پشتیبانی -->
      <div class="col-12 col-sm-6 col-lg">
        <div class="feature-box h-100">
          <i class="bi bi-headset"></i>

          <div>
            <h4>پشتیبانی عالی</h4>
            <p>پشتیبانی آنلاین</p>
          </div>
        </div>
      </div>

      <!-- تضمین قیمت -->
      <div class="col-12 col-sm-6 col-lg">
        <div class="feature-box h-100">
          <i class="bi bi-credit-card"></i>

          <div>
            <h4>تضمین قیمت</h4>
            <p>بهترین قیمت بازار</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.section-title {
  text-align: center;
  margin: 70px 0;
}

.section-title h2 {
  font-size: 45px;
}

.section-title p {
  color: gray;
}

/* Features */

.features {
  margin: 50px auto;
  padding: 25px;

  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(15px);

  border-radius: 30px;

  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.05);
}

.feature-box {
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 15px;
  padding: 15px;

  border-radius: 20px;

  transition: 0.4s;
}

.feature-box i {
  font-size: 35px;
  color: #111;

  transition: 0.5s;
}

.feature-box h4 {
  font-size: 22px;
  margin-bottom: 7px;
}

.feature-box p {
  font-size: 15px;
  color: #777;
  margin: 0;
}

.feature-box:hover {
  background: white;
  transform: translateY(-5px);
}

.feature-box:hover i {
  transform: rotate(8deg) scale(1.15);
}

/* =========================
   Tablet
========================= */

@media (max-width: 991.98px) {
  .section-title {
    margin: 50px 0 35px;
  }

  .section-title h2 {
    font-size: 38px;
  }

  .feature-box {
    justify-content: flex-start;
    padding: 20px;
  }

  .feature-box h4 {
    font-size: 19px;
  }

  .feature-box p {
    font-size: 14px;
  }
}

/* =========================
   Mobile
========================= */

@media (max-width: 575.98px) {
  .section-title {
    margin: 40px 0 25px;
    padding: 0 15px;
  }

  .section-title h2 {
    font-size: 30px;
  }

  .section-title p {
    font-size: 14px;
  }

  .features {
    width: 94%;
    margin: 30px auto;
    padding: 15px;

    border-radius: 20px;
  }

  .feature-box {
    justify-content: flex-start;
    padding: 15px;
  }

  .feature-box i {
    font-size: 28px;
  }

  .feature-box h4 {
    font-size: 17px;
  }

  .feature-box p {
    font-size: 13px;
  }
}
</style>
