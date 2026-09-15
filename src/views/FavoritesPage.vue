<script setup>
import { useFavoritesStore } from "../store/favoritesStore";

const favoritesStore = useFavoritesStore();

function resolveImage(image) {
  return new URL(`../assets/Images Products/${image}`, import.meta.url).href;
}
</script>

<template>
  <div class="container py-5">
    <h2 class="text-center mb-5">علاقه‌مندی‌های من ❤️</h2>

    <!-- وقتی محصولی وجود ندارد -->
    <div v-if="favoritesStore.favorites.length === 0" class="empty-favorites text-center">
      <i class="bi bi-heart"></i>

      <h4 class="mt-3">هنوز محصولی به علاقه‌مندی‌ها اضافه نکرده‌اید.</h4>

      <router-link to="/products/upper-body" class="btn btn-dark mt-3">
        مشاهده محصولات
      </router-link>
    </div>

    <!-- محصولات علاقه‌مندی -->
    <div v-else class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 g-4">
      <div v-for="product in favoritesStore.favorites" :key="product.id" class="col">
        <div class="favorite-card h-100">
          <router-link
            :to="`/product/${product.id}`"
            target="_blank"
            rel="noopener noreferrer"
            class="text-decoration-none text-dark"
          >
            <div class="favorite-image">
              <img :src="resolveImage(product.image)" :alt="product.name" />

              <span v-if="product.discount > 0" class="discount-badge">
                {{ product.discount }}٪
              </span>
            </div>

            <div class="favorite-info">
              <small>
                {{ product.brand }}
              </small>

              <h5>
                {{ product.name }}
              </h5>

              <div v-if="product.discount > 0">
                <del> {{ product.price.toLocaleString() }} تومان </del>

                <strong>
                  {{ (product.price - (product.price * product.discount) / 100).toLocaleString() }}
                  تومان
                </strong>
              </div>

              <strong v-else> {{ product.price.toLocaleString() }} تومان </strong>
            </div>
          </router-link>

          <!-- حذف از علاقه‌مندی -->
          <button
            class="remove-favorite-btn"
            @click="favoritesStore.toggleFavorite(product)"
            title="حذف از علاقه‌مندی‌ها"
          >
            <i class="bi bi-heart-fill"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.favorite-card {
  position: relative;
  border: 1px solid #e8e8e8;
  border-radius: 16px;
  overflow: hidden;
  background: #fff;
  transition: 0.25s ease;
}

.favorite-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.07);
}

.favorite-image {
  position: relative;
  width: 100%;
  height: 350px;
  overflow: hidden;
}

.favorite-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.discount-badge {
  position: absolute;
  top: 12px;
  right: 12px;

  padding: 7px 10px;

  background: #111;
  color: #fff;

  border-radius: 8px;
  font-size: 13px;
}

.favorite-info {
  padding: 18px;
  text-align: right;
}

.favorite-info small {
  color: #777;
}

.favorite-info h5 {
  margin: 8px 0 15px;
  font-size: 17px;
}

.favorite-info del {
  display: block;
  color: #888;
  margin-bottom: 5px;
}

.favorite-info strong {
  font-size: 17px;
}

.remove-favorite-btn {
  position: absolute;
  top: 12px;
  left: 12px;

  width: 40px;
  height: 40px;

  border: none;
  border-radius: 50%;

  background: #fff;
  color: #dc3545;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  transition: 0.2s ease;
}

.remove-favorite-btn:hover {
  background: #dc3545;
  color: #fff;
  transform: scale(1.08);
}

.empty-favorites i {
  font-size: 55px;
  color: #aaa;
}
</style>
