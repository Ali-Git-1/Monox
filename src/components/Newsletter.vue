<script setup></script>

<template>
  <section class="newsletter">
    <div class="newsletter-content">
      <span class="tag">NEW COLLECTION</span>

      <h2>از جدیدترین استایل‌ها جا نمون</h2>

      <p>جدیدترین محصولات و تخفیف‌های ویژه را زودتر از همه دریافت کن</p>

      <div class="subscribe-box">
        <input type="email" placeholder="ایمیل خود را وارد کنید" />
        <button>عضویت</button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.newsletter {
  margin: 100px 40px;
  border-radius: 30px;
  overflow: hidden;

  background: linear-gradient(135deg, #111, #2f2f2f);

  padding: 70px 20px;
  position: relative;
}

.newsletter::before {
  content: "";
  width: 250px;
  height: 250px;

  position: absolute;
  top: -80px;
  left: -80px;

  background: rgba(255, 255, 255, 0.05);

  border-radius: 50%;
}

.newsletter::after {
  content: "";
  width: 180px;
  height: 180px;

  position: absolute;
  bottom: -60px;
  right: -60px;

  background: rgba(255, 255, 255, 0.05);

  border-radius: 50%;
}

.newsletter-content {
  position: relative;
  z-index: 2;

  text-align: center;
  color: white;
}

.tag {
  display: inline-block;

  background: white;
  color: black;

  padding: 10px 20px;
  border-radius: 30px;

  font-size: 13px;
  margin-bottom: 20px;
}

.newsletter-content h2 {
  font-size: 38px;
  margin-bottom: 15px;
}

.newsletter-content p {
  color: #ccc;
  margin-bottom: 35px;
}

.subscribe-box {
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
}

.subscribe-box input {
  width: 350px;
  padding: 18px;

  border: none;
  outline: none;

  border-radius: 50px;
  font-family: inherit;
}

.subscribe-box button {
  border: none;
  padding: 18px 35px;

  background: #22c55e;
  color: white;

  border-radius: 50px;

  font-size: 16px;
  cursor: pointer;

  transition: 0.4s;
}

.subscribe-box button:hover {
  transform: translateY(-5px);
}

/* =========================
   Newsletter Responsive
========================= */

@media (max-width: 991.98px) {
  .newsletter {
    padding: 70px 30px;
  }

  .newsletter-content {
    max-width: 700px;
  }

  .newsletter h2 {
    font-size: 32px;
  }

  .newsletter p {
    font-size: 15px;
  }

  .subscribe-box {
    max-width: 550px;
  }
}

@media (max-width: 767.98px) {
  .newsletter {
    padding: 55px 20px;
  }

  .newsletter-content {
    width: 100%;
  }

  .newsletter h2 {
    font-size: 27px;
    line-height: 1.6;
  }

  .newsletter p {
    font-size: 14px;
    line-height: 1.9;
  }

  .subscribe-box {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .subscribe-box input,
  .subscribe-box button {
    width: 100%;
    height: 50px;
  }
}

@media (max-width: 480px) {
  .newsletter {
    padding: 45px 15px;
  }

  .newsletter .tag {
    font-size: 11px;
    letter-spacing: 1px;
  }

  .newsletter h2 {
    font-size: 23px;
  }

  .newsletter p {
    font-size: 13px;
  }

  .subscribe-box input,
  .subscribe-box button {
    height: 47px;
    font-size: 13px;
  }
}
</style>
