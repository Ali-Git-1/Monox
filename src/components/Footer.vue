<template>
  <footer class="footer">
    <div class="container py-5">
      <div class="row g-4">
        <!-- درباره Monox -->
        <div class="col-12 col-md-6 col-lg-4">
          <h3 class="footer-logo">Monox</h3>

          <p>فروشگاه اینترنتی لباس مردانه با جدیدترین استایل‌ها و کالکشن‌های روز دنیا.</p>
        </div>

        <!-- لینک ها -->
        <div class="col-6 col-md-3 col-lg-2">
          <h5>دسترسی سریع</h5>

          <ul>
            <li><a href="#">صفحه اصلی</a></li>
            <li><a href="#">محصولات</a></li>
            <li><a href="#">تخفیف ها</a></li>
            <li><a href="#">تماس با ما</a></li>
          </ul>
        </div>

        <!-- خدمات -->
        <div class="col-6 col-md-3 col-lg-2">
          <h5>خدمات مشتریان</h5>

          <ul>
            <li><a href="#">پیگیری سفارش</a></li>
            <li><a href="#">شرایط بازگشت</a></li>
            <li><a href="#">سوالات متداول</a></li>
            <li><a href="#">پشتیبانی</a></li>
          </ul>
        </div>

        <!-- ارتباط -->
        <div class="col-12 col-lg-4">
          <h5>با ما در ارتباط باشید</h5>

          <p>برای اطلاع از جدیدترین محصولات و تخفیف‌ها ما را دنبال کنید.</p>

          <div class="social-icons">
            <a href="#">
              <i class="bi bi-instagram"></i>
            </a>

            <a href="#">
              <i class="bi bi-telegram"></i>
            </a>

            <a href="#">
              <i class="bi bi-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- پایین Footer -->

    <div class="footer-bottom">
      <div class="container">
        <p class="mb-0 text-center">© 2026 Monox | تمامی حقوق محفوظ است.</p>
      </div>
    </div>
  </footer>
</template>

<script setup></script>

<style scoped>
.footer {
  margin-top: 80px;

  background: #111;

  color: white;
}

/* لوگو */

.footer-logo {
  font-size: 32px;

  font-weight: 800;

  letter-spacing: 3px;
}

/* متن */

.footer p {
  color: #aaa;

  line-height: 2;

  font-size: 14px;
}

/* عنوان */

.footer h5 {
  margin-bottom: 20px;

  font-weight: 700;
}

/* لیست */

.footer ul {
  list-style: none;

  padding: 0;

  margin: 0;
}

.footer li {
  margin-bottom: 12px;
}

.footer li a {
  color: #aaa;

  text-decoration: none;

  transition: 0.3s;
}

.footer li a:hover {
  color: white;

  padding-right: 5px;
}

/* شبکه های اجتماعی */

.social-icons {
  display: flex;

  gap: 12px;

  margin-top: 20px;
}

.social-icons a {
  width: 42px;
  height: 42px;

  display: flex;

  align-items: center;
  justify-content: center;

  border-radius: 50%;

  background: #222;

  color: white;

  text-decoration: none;

  transition: 0.3s;
}

.social-icons a:hover {
  background: white;

  color: #111;

  transform: translateY(-4px);
}

/* پایین */

.footer-bottom {
  padding: 20px 0;

  border-top: 1px solid #2b2b2b;
}

.footer-bottom p {
  font-size: 13px;
}

/* موبایل */

@media (max-width: 575.98px) {
  .footer {
    text-align: center;
  }

  .social-icons {
    justify-content: center;
  }

  .footer-logo {
    font-size: 28px;
  }
}
</style>
