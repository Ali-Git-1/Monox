<template>
  <div class="product-detail-page">
    <div class="container py-5">
      <!-- مسیر صفحه -->
      <div class="mb-4 text-secondary small">صفحه اصلی / محصولات / جزئیات محصول</div>

      <div class="row g-5">
        <!-- ================= عکس محصول ================= -->
        <div class="col-12 col-lg-6">
          <div class="product-detail-image">
            <img :src="resolveImage(product.image)" :alt="product.name" class="img-fluid" />
          </div>
        </div>

        <!-- ================= اطلاعات محصول ================= -->
        <div class="col-12 col-lg-6">
          <div class="product-detail-info">
            <small class="text-secondary">{{ product.brand }}</small>

            <h1 class="fw-bold mt-2">{{ product.name }}</h1>

            <!-- رضایت کاربران -->
            <div class="d-flex align-items-center gap-2 my-3">
              <div class="text-warning">★★★★★</div>

              <span class="text-secondary small"> رضایت کاربران </span>
            </div>

            <hr />

            <!-- قیمت -->
            <div class="price-section my-4">
              <template v-if="product.discount > 0">
                <del class="text-secondary"> {{ formatPrice(product.price) }} تومان </del>

                <div class="fw-bold fs-3 text-danger mt-1">
                  {{ formatPrice(product.price - (product.price * product.discount) / 100) }}
                  تومان
                </div>

                <span class="badge bg-danger mt-2"> {{ product.discount }}٪ تخفیف </span>
              </template>

              <template v-else>
                <div class="fw-bold fs-3 mt-1">{{ formatPrice(product.price) }} تومان</div>
              </template>
            </div>

            <!-- رنگ -->
            <div class="my-4">
              <h6 class="fw-bold mb-3">رنگ</h6>

              <div class="d-flex align-items-center gap-3">
                <button
                  class="detail-color"
                  :class="[product.color, { selected: selectedColor === product.color }]"
                  :title="getColorName(product.color)"
                  :aria-label="`رنگ ${getColorName(product.color)}`"
                  @click="selectedColor = product.color"
                ></button>

                <span class="text-secondary small">
                  {{ getColorName(product.color) }}
                </span>
              </div>
            </div>

            <!-- سایز -->
            <div class="my-4">
              <h6 class="fw-bold mb-3">سایز</h6>

              <div class="d-flex gap-2 flex-wrap">
                <button
                  v-for="size in product.size"
                  :key="size"
                  class="detail-size"
                  :class="{ selected: selectedSize === size }"
                  @click="selectedSize = size"
                >
                  {{ size }}
                </button>
              </div>
            </div>

            <!-- افزودن به سبد -->
            <button class="btn btn-dark btn-lg w-100 rounded-3 mt-3" @click="addToCart">
              <i class="bi bi-cart3 me-2"></i>
              افزودن به سبد خرید
            </button>

            <p v-if="cartMessage" class="text-center mt-3 mb-0">
              {{ cartMessage }}
            </p>

            <!-- علاقه مندی -->
            <button class="btn btn-outline-dark w-100 mt-2 rounded-3" @click="toggleFavorite">
              <i
                :class="
                  favoritesStore.isFavorite(product.id)
                    ? 'bi bi-heart-fill text-danger'
                    : 'bi bi-heart'
                "
                class="me-2"
              ></i>

              {{
                favoritesStore.isFavorite(product.id) ? "حذف از علاقه‌مندی" : "افزودن به علاقه‌مندی"
              }}
            </button>

            <!-- ضمانت -->
            <div class="guarantee-box mt-4 p-3 rounded-3">
              <div class="d-flex align-items-center gap-3">
                <i class="bi bi-shield-check fs-3"></i>

                <div>
                  <strong> ضمانت اصالت کالا </strong>

                  <p class="small text-secondary mb-0 mt-1">تضمین کیفیت و اصالت محصول</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ================= مشخصات محصول ================= -->

      <div class="product-description mt-5 pt-4">
        <h3 class="fw-bold mb-4">مشخصات محصول</h3>

        <div class="row g-3">
          <div class="col-12 col-md-6">
            <div class="spec-item">
              <span>جنس</span>
              <strong>نخ و پنبه</strong>
            </div>
          </div>

          <div class="col-12 col-md-6">
            <div class="spec-item">
              <span>نوع</span>
              <strong>پیراهن مردانه</strong>
            </div>
          </div>

          <div class="col-12 col-md-6">
            <div class="spec-item">
              <span>مناسب برای</span>
              <strong>استفاده روزمره</strong>
            </div>
          </div>

          <div class="col-12 col-md-6">
            <div class="spec-item">
              <span>کشور تولیدکننده</span>
              <strong>ایران</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>
<script setup>
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import products from "../data/products.js";
import Footer from "@/components/Footer.vue";
import { useCartStore } from "@/store/cartStore.js";
import { useFavoritesStore } from "@/store/favoritesStore.js";
import { useUserStore } from "@/store/userStore.js";

const route = useRoute();

const cartStore = useCartStore();

const favoritesStore = useFavoritesStore();

const userStore = useUserStore();

const selectedSize = ref(null);
const cartMessage = ref("");
const selectedColor = ref(null);

function toggleFavorite() {
  if (!userStore.isLoggedIn()) {
    alert("برای افزودن محصول به علاقه‌مندی، ابتدا وارد حساب کاربری شوید.");
    return;
  }

  favoritesStore.toggleFavorite(product.value);
}

function addToCart() {
  if (!selectedSize.value) {
    cartMessage.value = "لطفاً ابتدا سایز محصول را انتخاب کنید.";
    return;
  }

  cartStore.addToCart(product.value, selectedSize.value, selectedColor.value);

  cartMessage.value = "محصول با موفقیت به سبد خرید اضافه شد.";
}

const product = computed(() => {
  return products.find((item) => item.id === Number(route.params.id));
});
function formatPrice(price) {
  return price.toLocaleString("fa-IR");
}
function resolveImage(image) {
  return new URL(`../assets/Images Products/${image}`, import.meta.url).href;
}
function getColorName(color) {
  const colors = {
    black: "مشکی",
    white: "سفید",
    gray: "خاکستری",
    blue: "آبی",
    green: "سبز",
  };

  return colors[color] || color;
}
</script>
<style scoped>
.product-detail-page {
  direction: rtl;
  background: #fff;
  min-height: 100vh;
}

/* عکس محصول */

.product-detail-image {
  width: 100%;
  background: #f5f5f5;
  border-radius: 18px;
  overflow: hidden;
}

.product-detail-image img {
  width: 100%;
  aspect-ratio: 4 / 5;
  object-fit: cover;
}

/* رنگ */

.detail-color {
  width: 34px;
  height: 34px;

  border-radius: 50%;

  border: 2px solid #fff;

  box-shadow: 0 0 0 1px #ddd;

  cursor: pointer;
}

.detail-color.black {
  background: #111;
}

.detail-color.white {
  background: #fff;
}

.detail-color.green {
  background: #526b4f;
}
.detail-color.selected {
  box-shadow: 0 0 0 2px #212529;
}

/* سایز */

.detail-size {
  width: 50px;
  height: 42px;

  background: #fff;

  border: 1px solid #ddd;

  border-radius: 8px;

  cursor: pointer;
}

.detail-size:hover {
  background: #111;
  color: #fff;
}

.detail-size.selected {
  background: #212529;
  color: #fff;
  border-color: #212529;
}

/* ضمانت */

.guarantee-box {
  background: #f7f7f7;
}

/* مشخصات */

.spec-item {
  display: flex;
  justify-content: space-between;

  padding: 18px;

  background: #f8f8f8;

  border-radius: 10px;
}

.spec-item span {
  color: #777;
}

/* موبایل */

@media (max-width: 767.98px) {
  .product-detail-page .container {
    padding-top: 30px !important;
  }

  .product-detail-info h1 {
    font-size: 25px;
  }

  .product-detail-image img {
    aspect-ratio: 1 / 1;
  }
}
</style>
