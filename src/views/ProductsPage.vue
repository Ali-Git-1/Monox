<template>
  <div class="products-page">
    <div class="container py-5">
      <!-- هدر صفحه -->
      <h1 class="fw-bold mb-2">
        {{
          currentCategory === "simple"
            ? "لباس‌های ساده مردانه"
            : currentCategory === "formal"
              ? "لباس‌های شیک و مجلسی مردانه"
              : currentCategory === "sport"
                ? "لباس‌های ورزشی مردانه"
                : "محصولات مردانه"
        }}
      </h1>

      <p class="text-secondary mb-4">
        {{
          currentCategory === "simple"
            ? "استایل‌های ساده، راحت و روزمره"
            : currentCategory === "formal"
              ? "انتخابی شیک برای استایل‌های رسمی و مجلسی"
              : currentCategory === "sport"
                ? "لباس‌های مناسب ورزش و استایل اسپرت"
                : "جدیدترین محصولات Monox"
        }}
      </p>

      <div class="row g-4">
        <!-- دکمه فیلتر در موبایل -->
        <div class="col-12 d-lg-none">
          <button
            class="btn btn-dark w-100 filter-toggle d-flex align-items-center justify-content-center gap-2"
            @click="showFilters = !showFilters"
          >
            <i class="bi" :class="showFilters ? 'bi-chevron-up' : 'bi-funnel'"></i>
            <span>{{ showFilters ? "بستن فیلترها" : "فیلتر محصولات" }}</span>
          </button>
        </div>

        <!-- سایدبار فیلترها -->
        <aside class="col-12 col-lg-3 filters-wrapper" :class="{ show: showFilters }">
          <div class="filter-box p-4 border rounded-3 bg-white shadow-sm">
            <div class="d-flex justify-content-between align-items-center mb-4">
              <h5 class="fw-bold mb-0">فیلتر محصولات</h5>
              <button
                class="btn btn-sm btn-outline-dark"
                @click="
                  selectedBrands = [];
                  selectedCategories = [];
                  selectedColors = [];
                  selectedSizes = [];
                "
              >
                پاک کردن
              </button>
            </div>

            <!-- فیلتر دسته‌بندی -->
            <!-- فیلتر دسته‌بندی -->
            <div class="filter-section mb-4">
              <h6 class="fw-bold mb-3">دسته‌بندی</h6>

              <div class="form-check mb-2">
                <input
                  v-model="selectedCategories"
                  value="تیشرت"
                  class="form-check-input"
                  type="checkbox"
                  id="tshirt"
                />
                <label class="form-check-label" for="tshirt"> تیشرت </label>
              </div>

              <div class="form-check mb-2">
                <input
                  v-model="selectedCategories"
                  value="پیراهن"
                  class="form-check-input"
                  type="checkbox"
                  id="shirt"
                />
                <label class="form-check-label" for="shirt"> پیراهن </label>
              </div>

              <div class="form-check">
                <input
                  v-model="selectedCategories"
                  value="کاپشن"
                  class="form-check-input"
                  type="checkbox"
                  id="jacket"
                />
                <label class="form-check-label" for="jacket"> کاپشن </label>
              </div>
            </div>

            <hr />

            <!-- فیلتر رنگ -->
            <div class="filter-section my-4">
              <h6 class="fw-bold mb-3">رنگ</h6>
              <div class="d-flex gap-2 flex-wrap">
                <button
                  class="color-btn black"
                  :class="{ active: selectedColors.includes('black') }"
                  @click="
                    selectedColors.includes('black')
                      ? selectedColors.splice(selectedColors.indexOf('black'), 1)
                      : selectedColors.push('black')
                  "
                ></button>

                <button
                  class="color-btn white"
                  :class="{ active: selectedColors.includes('white') }"
                  @click="
                    selectedColors.includes('white')
                      ? selectedColors.splice(selectedColors.indexOf('white'), 1)
                      : selectedColors.push('white')
                  "
                ></button>

                <button
                  class="color-btn blue"
                  :class="{ active: selectedColors.includes('blue') }"
                  @click="
                    selectedColors.includes('blue')
                      ? selectedColors.splice(selectedColors.indexOf('blue'), 1)
                      : selectedColors.push('blue')
                  "
                ></button>

                <button
                  class="color-btn green"
                  :class="{ active: selectedColors.includes('green') }"
                  @click="
                    selectedColors.includes('green')
                      ? selectedColors.splice(selectedColors.indexOf('green'), 1)
                      : selectedColors.push('green')
                  "
                ></button>

                <button
                  class="color-btn gray"
                  :class="{ active: selectedColors.includes('gray') }"
                  @click="
                    selectedColors.includes('gray')
                      ? selectedColors.splice(selectedColors.indexOf('gray'), 1)
                      : selectedColors.push('gray')
                  "
                ></button>
              </div>
            </div>

            <hr />

            <!-- فیلتر برند -->
            <div class="filter-section my-4">
              <h6 class="fw-bold mb-3">برند</h6>
              <div class="form-check mb-2">
                <input
                  v-model="selectedBrands"
                  value="Monox"
                  class="form-check-input"
                  type="checkbox"
                  id="monox"
                />
                <label class="form-check-label" for="monox">Monox</label>
              </div>

              <div class="form-check mb-2">
                <input
                  v-model="selectedBrands"
                  value="Nike"
                  class="form-check-input"
                  type="checkbox"
                  id="nike"
                />
                <label class="form-check-label" for="nike">Nike</label>
              </div>

              <div class="form-check">
                <input
                  v-model="selectedBrands"
                  value="Levis"
                  class="form-check-input"
                  type="checkbox"
                  id="levis"
                />
                <label class="form-check-label" for="levis">Levis</label>
              </div>
            </div>

            <hr />

            <!-- فیلتر سایز -->
            <div class="filter-section my-4">
              <h6 class="fw-bold mb-3">سایز</h6>
              <div class="size-options">
                <button
                  class="size-btn"
                  :class="{ active: selectedSizes.includes('S') }"
                  @click="
                    selectedSizes.includes('S')
                      ? selectedSizes.splice(selectedSizes.indexOf('S'), 1)
                      : selectedSizes.push('S')
                  "
                >
                  S
                </button>

                <button
                  class="size-btn"
                  :class="{ active: selectedSizes.includes('M') }"
                  @click="
                    selectedSizes.includes('M')
                      ? selectedSizes.splice(selectedSizes.indexOf('M'), 1)
                      : selectedSizes.push('M')
                  "
                >
                  M
                </button>

                <button
                  class="size-btn"
                  :class="{ active: selectedSizes.includes('L') }"
                  @click="
                    selectedSizes.includes('L')
                      ? selectedSizes.splice(selectedSizes.indexOf('L'), 1)
                      : selectedSizes.push('L')
                  "
                >
                  L
                </button>

                <button
                  class="size-btn"
                  :class="{ active: selectedSizes.includes('XL') }"
                  @click="
                    selectedSizes.includes('XL')
                      ? selectedSizes.splice(selectedSizes.indexOf('XL'), 1)
                      : selectedSizes.push('XL')
                  "
                >
                  XL
                </button>
              </div>
            </div>

            <hr />

            <!-- فیلتر قیمت -->
            <div class="filter-section mt-4">
              <h6 class="fw-bold mb-3">محدوده قیمت</h6>

              <input
                v-model.number="maxPrice"
                type="range"
                class="form-range"
                min="0"
                max="5000000"
                step="100000"
              />

              <div class="d-flex justify-content-between small text-secondary">
                <span>۰ تومان</span>

                <span> {{ maxPrice.toLocaleString("fa-IR") }} تومان </span>
              </div>
            </div>
          </div>
        </aside>

        <!-- لیست محصولات -->
        <main class="col-12 col-lg-9">
          <!-- نوار ابزار بالا -->
          <div
            class="products-toolbar d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 mb-4"
          >
            <div>
              <strong>تعداد محصول: {{ filteredProducts.length }} کالا</strong>
            </div>

            <div class="d-flex align-items-center gap-2">
              <span class="text-secondary small">مرتب‌سازی:</span>
              <select v-model="sortBy" class="form-select form-select-sm">
                <option value="newest">جدیدترین</option>
                <option value="cheapest">ارزان‌ترین</option>
                <option value="expensive">گران‌ترین</option>
                <option value="popular">محبوب‌ترین</option>
              </select>
            </div>
          </div>

          <!-- گرید محصولات پویا -->
          <div class="row row-cols-2 row-cols-md-3 g-3">
            <div class="col" v-for="product in filteredProducts" :key="product.id">
              <router-link
                :to="`/product/${product.id}`"
                target="_blank"
                rel="noopener noreferrer"
                class="product-card h-100 d-flex flex-column justify-content-between text-decoration-none text-dark"
              >
                <div class="product-image position-relative">
                  <img
                    :src="resolveImage(product.image)"
                    :alt="product.name"
                    class="img-fluid w-100"
                  />

                  <!-- بج درصد تخفیف -->
                  <span v-if="product.discount > 0" class="discount-badge">
                    {{ product.discount }}٪
                  </span>

                  <!-- دکمه علاقه‌مندی -->
                  <button @click.prevent="handleFavorite(product)">
                    <i
                      :class="
                        favoritesStore.isFavorite(product.id) ? 'bi bi-heart-fill' : 'bi bi-heart'
                      "
                    ></i>
                  </button>
                </div>

                <div class="product-info p-3">
                  <small class="text-secondary">
                    {{ product.brand }}
                  </small>

                  <h6 class="fw-bold mt-1 text-truncate">
                    {{ product.name }}
                  </h6>

                  <div class="mt-3">
                    <!-- دارای تخفیف -->
                    <template v-if="product.discount > 0">
                      <del class="text-secondary small d-block">
                        {{ formatPrice(product.price) }} تومان
                      </del>

                      <div class="fw-bold text-danger mt-1">
                        {{ formatPrice(calculateDiscountPrice(product.price, product.discount)) }}
                        تومان
                      </div>
                    </template>

                    <!-- بدون تخفیف -->
                    <template v-else>
                      <div class="fw-bold mt-1">{{ formatPrice(product.price) }} تومان</div>
                    </template>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import { useRoute, useRouter } from "vue-router";
import products from "../data/products.js";
import Footer from "@/components/Footer.vue";
import { useFavoritesStore } from "@/store/favoritesStore.js";
import { useUserStore } from "@/store/userStore.js";

const favoritesStore = useFavoritesStore();
const userStore = useUserStore();
const router = useRouter();

const isScrolled = ref(false);
const selectedColors = ref([]);
const selectedSizes = ref([]);
const minPrice = ref(0);
const maxPrice = ref(5000000);
const sortBy = ref("newest");

function handleScroll() {
  isScrolled.value = window.scrollY > 50;
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});

function handleFavorite(product) {
  if (!userStore.isLoggedIn()) {
    router.push("/login");
    return;
  }

  favoritesStore.toggleFavorite(product);
}

const route = useRoute();
const showFilters = ref(false);
const selectedBrands = ref([]);
const selectedCategories = ref([]);
// لود صحیح عکس‌ها (چه عکس‌های لوکال در assets و چه لینک‌های اینترنتی)
const resolveImage = (imgSrc) => {
  if (!imgSrc) return "";
  if (imgSrc.startsWith("http://") || imgSrc.startsWith("https://")) {
    return imgSrc;
  }
  const fileName = imgSrc.split("/").pop();
  return new URL(`../assets/Images Products/${fileName}`, import.meta.url).href;
};

// بررسی دسته‌بندی با روت
const currentCategory = computed(() => {
  if (route.path.includes("/products/simple")) {
    return "simple";
  }

  if (route.path.includes("/products/formal")) {
    return "formal";
  }

  if (route.path.includes("/products/sport")) {
    return "sport";
  }

  if (route.path.includes("/products/upper-body")) {
    return "upper-body";
  }

  if (route.path.includes("/products/bottom-body")) {
    return "bottom-body";
  }

  return null;
});

const searchQuery = computed(() => {
  return route.query.q?.toString().trim().toLowerCase() || "";
});

const filteredProducts = computed(() => {
  let result = products;

  // دسته‌بندی
  if (currentCategory.value) {
    if (currentCategory.value === "upper-body" || currentCategory.value === "bottom-body") {
      result = result.filter((product) => product.category === currentCategory.value);
    } else {
      result = result.filter((product) => product.subcategories?.includes(currentCategory.value));
    }
  }

  if (selectedColors.value.length > 0) {
    result = result.filter((product) => selectedColors.value.includes(product.color));
  }
  if (selectedSizes.value.length > 0) {
    result = result.filter((product) =>
      product.size.some((size) => selectedSizes.value.includes(size)),
    );
  }

  if (result.length > 0) {
    result = result.filter(
      (product) => product.price >= minPrice.value && product.price <= maxPrice.value,
    );
  }

  // جستجو
  if (searchQuery.value) {
    result = result.filter((product) => {
      const name = product.name?.toLowerCase() || "";
      const brand = product.brand?.toLowerCase() || "";

      return name.includes(searchQuery.value) || brand.includes(searchQuery.value);
    });
  }

  // فیلتر برند
  if (selectedBrands.value.length > 0) {
    result = result.filter((product) => selectedBrands.value.includes(product.brand));
  }
  // فیلتر دسته‌بندی
  if (selectedCategories.value.length > 0) {
    result = result.filter((product) => selectedCategories.value.includes(product.type));
  }

  // مرتب‌سازی
  if (sortBy.value === "cheapest") {
    result.sort((a, b) => a.price - b.price);
  }

  if (sortBy.value === "expensive") {
    result.sort((a, b) => b.price - a.price);
  }

  if (sortBy.value === "popular") {
    result.sort((a, b) => b.id - a.id);
  }

  return result;
});

// توابع کمکی برای محاسبات و فرمت قیمت
const calculateDiscountPrice = (price, discount) => {
  return Math.round(price * (1 - discount / 100));
};

const formatPrice = (value) => {
  return Number(value).toLocaleString("fa-IR");
};
</script>

<style scoped>
.product-image {
  position: relative;
}

.product-image > button {
  position: absolute;
  top: 15px;
  left: 15px;

  width: 40px;
  height: 40px;

  border: none;
  border-radius: 50%;

  background: white;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0;

  cursor: pointer;

  z-index: 5;

  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);

  transition: 0.2s ease;
}

.product-image > button:hover {
  transform: scale(1.08);
}

.product-image > button i {
  font-size: 19px;
  line-height: 1;
}

.product-image > button .bi-heart-fill {
  color: #dc3545;
}
.products-page {
  direction: rtl;
  background: #fff;
  min-height: 100vh;
}

.filter-box {
  background: #f8f8f8;
  border-radius: 16px;
}

.filter-section h6 {
  font-size: 15px;
}

.color-btn {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 2px solid #fff;
  box-shadow: 0 0 0 1px #ddd;
  cursor: pointer;
}

.color-btn.black {
  background: #111;
}
.color-btn.white {
  background: #fff;
}
.color-btn.blue {
  background: #315d91;
}
.color-btn.green {
  background: #506b4d;
}
.color-btn.gray {
  background: #999;
}

.size-btn {
  width: 42px;
  height: 38px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.2s;
}

.size-btn:hover {
  background: #111;
  color: #fff;
}

.products-toolbar .form-select {
  width: 180px;
}

.product-card {
  cursor: pointer;
  background: #fff;
  border: 1px solid #eee;
  border-radius: 14px;
  overflow: hidden;
  transition: 0.3s;
  height: 100%;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
}

.product-image {
  position: relative;
  width: 100%;
  aspect-ratio: 3 / 4;
  overflow: hidden;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 0.4s;
}

.product-card:hover .product-image img {
  transform: scale(1.04);
}

.discount-badge {
  position: absolute;
  top: 12px;
  right: 12px;
  background: #111;
  color: #fff;
  padding: 5px 9px;
  border-radius: 6px;
  font-size: 12px;
  z-index: 2;
}

.favorite-btn {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 38px;
  height: 38px;
  border: none;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 2;
}

.favorite-btn i {
  font-size: 17px;
}

.product-info small {
  color: #888;
}

.filters-wrapper {
  display: block;
}

@media (max-width: 991.98px) {
  .filters-wrapper {
    display: none;
  }
  .filters-wrapper.show {
    display: block;
  }
}

@media (max-width: 767.98px) {
  .products-page .container {
    padding-top: 30px !important;
  }
  .products-page h1 {
    font-size: 27px;
  }
  .filter-box {
    border-radius: 12px;
  }
  .products-toolbar .form-select {
    width: 100%;
  }
}

@media (max-width: 480px) {
  .products-page h1 {
    font-size: 23px;
  }
  .product-info {
    padding: 12px !important;
  }
  .product-info h6 {
    font-size: 13px;
  }
  .product-info small {
    font-size: 11px;
  }
  .product-info strong,
  .product-info div {
    font-size: 12px;
  }
}
</style>
