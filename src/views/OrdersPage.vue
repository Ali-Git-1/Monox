<script setup>
import { useOrdersStore } from "../store/ordersStore";

const ordersStore = useOrdersStore();

ordersStore.loadOrders();

function resolveImage(image) {
  return new URL(
    `../assets/Images Products/${image}`,
    import.meta.url
  ).href;
}
</script>

<template>
  <div class="orders-page">
    <div class="container py-5">

      <!-- عنوان -->
      <div class="mb-5">
        <h2 class="orders-title fw-bold">
          سفارش‌های من
        </h2>

        <p class="text-secondary mb-0">
          مشاهده و پیگیری سفارش‌های ثبت‌شده
        </p>
      </div>

      <!-- بدون سفارش -->
      <div
        v-if="ordersStore.orders.length === 0"
        class="empty-orders text-center py-5"
      >
        <i class="bi bi-box-seam"></i>

        <h4 class="mt-3">
          هنوز سفارشی ثبت نکرده‌اید.
        </h4>

        <p class="text-secondary">
          بعد از ثبت سفارش، اطلاعات آن در این قسمت نمایش داده می‌شود.
        </p>

        <router-link
          to="/products/upper-body"
          class="btn btn-dark mt-2"
        >
          مشاهده محصولات
        </router-link>
      </div>

      <!-- سفارش‌ها -->
      <div v-else>

        <div
          v-for="order in ordersStore.orders"
          :key="order.id"
          class="order-card mb-4"
        >

          <!-- هدر سفارش -->
          <div class="order-header">

            <div>
              <div class="order-number">
                سفارش #{{ order.id }}
              </div>

              <div class="order-date mt-1">
                {{ order.date }}
              </div>
            </div>

            <span class="order-status">
              {{ order.status }}
            </span>

          </div>

          <!-- محصولات سفارش -->
          <div
            v-for="item in order.items"
            :key="item.product.id"
            class="order-item"
          >

            <img
              :src="resolveImage(item.product.image)"
              :alt="item.product.name"
              class="order-item-image"
            />

            <div class="order-item-info">

              <h6 class="order-item-name">
                {{ item.product.name }}
              </h6>

              <div class="order-item-quantity">
                تعداد: {{ item.quantity }}
              </div>

              <div
                v-if="item.size"
                class="order-item-quantity"
              >
                سایز: {{ item.size }}
              </div>

              <div
                v-if="item.color"
                class="order-item-quantity"
              >
                رنگ: {{ item.color }}
              </div>

            </div>

          </div>

          <!-- مبلغ کل -->
          <div class="order-total">

            <span class="text-secondary">
              مبلغ کل سفارش
            </span>

            <strong>
              {{ order.totalPrice.toLocaleString() }}
              تومان
            </strong>

          </div>

        </div>

      </div>

    </div>
  </div>
</template>

<style scoped>
.orders-page {
  min-height: 100vh;
  background: #f8f8f8;
}

.orders-title {
  font-size: 30px;
}

.order-card {
  background: #fff;
  border-radius: 18px;
  padding: 25px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.06);
}

.order-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  padding-bottom: 20px;
  border-bottom: 1px solid #eee;
}

.order-number {
  font-size: 17px;
  font-weight: 700;
}

.order-date {
  color: #777;
  font-size: 14px;
}

.order-status {
  display: inline-block;
  padding: 7px 14px;
  border-radius: 20px;
  background: #f1f1f1;
  font-size: 13px;
  font-weight: 600;
}

.order-item {
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 20px 0;
  border-bottom: 1px solid #eee;
}

.order-item-image {
  width: 90px;
  height: 90px;
  flex-shrink: 0;
  border-radius: 12px;
  object-fit: cover;
}

.order-item-info {
  flex: 1;
}

.order-item-name {
  margin-bottom: 8px;
  font-weight: 700;
}

.order-item-quantity {
  color: #777;
  font-size: 14px;
  margin-top: 4px;
}

.order-total {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
}

.order-total strong {
  font-size: 18px;
}

.empty-orders i {
  font-size: 60px;
  color: #999;
}

@media (max-width: 576px) {
  .orders-title {
    font-size: 25px;
  }

  .order-card {
    padding: 18px;
  }

  .order-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .order-item {
    gap: 12px;
  }

  .order-item-image {
    width: 70px;
    height: 70px;
  }

  .order-total {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
}
</style>
