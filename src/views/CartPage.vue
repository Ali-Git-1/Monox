<script setup>
import { useCartStore } from "../store/cartStore";
import { useUserStore } from "../store/userStore";
import { useRouter } from "vue-router";
import { useOrdersStore } from "../store/ordersStore";
import { useWalletStore } from "@/store/walletStore";

const cartStore = useCartStore();
const userStore = useUserStore();
const router = useRouter();
const ordersStore = useOrdersStore();
const walletStore = useWalletStore();

walletStore.loadWallet();

function resolveImage(image) {
  return new URL(`../assets/Images Products/${image}`, import.meta.url).href;
}

function handleOrder() {
  if (!userStore.isLoggedIn()) {
    router.push("/login");
    return;
  }

  if (cartStore.cart.length === 0) {
    alert("سبد خرید شما خالی است.");
    return;
  }

  const totalPrice = cartStore.totalPrice();

  if (walletStore.balance < totalPrice) {
    alert("موجودی کیف پول شما برای این سفارش کافی نیست.");
    return;
  }

  const paymentSuccessful = walletStore.decreaseBalance(totalPrice);

  if (!paymentSuccessful) {
    alert("موجودی کیف پول شما کافی نیست.");
    return;
  }

  ordersStore.addOrder(cartStore.cart, totalPrice);

  alert("سفارش شما با موفقیت ثبت شد.");

  cartStore.clearCart();
}
</script>

<template>
  <div class="container py-5">
    <h2 class="mb-4">سبد خرید</h2>

    <!-- سبد خالی -->
    <div v-if="cartStore.cart.length === 0" class="alert alert-light border text-center">
      سبد خرید شما خالی است.
    </div>

    <!-- محصولات -->
    <div v-else>
      <div v-for="(item, index) in cartStore.cart" :key="index" class="card mb-3 cart-product-card">
        <div class="card-body">
          <div class="row align-items-center">
            <!-- عکس -->
            <div class="col-md-2">
              <img
                :src="resolveImage(item.product.image)"
                :alt="item.product.name"
                class="img-fluid rounded cart-product-image"
              />
            </div>

            <!-- اطلاعات محصول -->
            <div class="col-md-5">
              <h5 class="mb-3">
                {{ item.product.name }}
              </h5>

              <p class="mb-1">برند: {{ item.product.brand }}</p>

              <p class="mb-1">سایز: {{ item.size }}</p>

              <p class="mb-1">رنگ: {{ item.color }}</p>
            </div>

            <!-- قیمت و تعداد -->
            <div class="col-md-5">
              <div class="mb-3">
                <p
                  v-if="item.product.discount"
                  class="text-muted text-decoration-line-through mb-1"
                >
                  {{ item.product.price.toLocaleString() }}
                  تومان
                </p>

                <p class="fw-bold mb-0">
                  {{
                    (
                      item.product.price -
                      (item.product.price * (item.product.discount || 0)) / 100
                    ).toLocaleString()
                  }}
                  تومان
                </p>
              </div>

              <!-- تعداد -->
              <div class="quantity-box">
                <button
                  class="btn btn-outline-dark btn-sm"
                  @click="cartStore.decreaseQuantity(index)"
                >
                  −
                </button>

                <span class="fw-bold quantity-number">
                  {{ item.quantity }}
                </span>

                <button
                  class="btn btn-outline-dark btn-sm"
                  @click="cartStore.increaseQuantity(index)"
                >
                  +
                </button>
                <button
                  class="delete-cart-btn"
                  @click="cartStore.removeFromCart(index)"
                  title="حذف محصول"
                >
                  <i class="bi bi-trash3"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- جمع کل و ثبت سفارش -->
      <div class="cart-summary">
        <div class="cart-total">
          <span class="cart-total-title"> مبلغ کل سبد خرید </span>

          <strong>
            {{ cartStore.totalPrice().toLocaleString() }}
            تومان
          </strong>
        </div>

        <button class="order-btn" @click="handleOrder">
          <i class="bi bi-bag-check"></i>
          ثبت سفارش
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cart-product-card {
  border: 1px solid #e9e9e9;
  border-radius: 16px;
  overflow: hidden;
  transition: 0.2s ease;
}

.cart-product-card:hover {
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.06);
}

.cart-product-image {
  width: 140px;
  height: 160px;
  object-fit: cover;
}

.quantity-box {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 5px 8px;
}

.quantity-box button {
  width: 30px;
  height: 30px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.quantity-number {
  min-width: 20px;
  text-align: center;
}
.delete-cart-btn {
  width: 38px;
  height: 38px;
  border: 1px solid #e5e5e5;
  background: white;
  color: #dc3545;
  border-radius: 8px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  font-size: 17px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.delete-cart-btn:hover {
  background: #dc3545;
  color: white;
  border-color: #dc3545;
}

.cart-summary {
  margin-top: 30px;
  padding: 25px 30px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  background: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 16px;

  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.04);
}

.cart-total {
  display: flex;
  align-items: center;
  gap: 25px;
}

.cart-total-title {
  font-size: 17px;
  color: #555;
}

.cart-total strong {
  font-size: 23px;
  color: #111;
}

.order-btn {
  min-width: 180px;
  padding: 13px 25px;

  border: none;
  border-radius: 10px;

  background: #111;
  color: white;

  font-family: inherit;
  font-size: 16px;

  cursor: pointer;
  transition: 0.2s ease;
}

.order-btn:hover {
  background: #333;
}

.order-btn i {
  margin-left: 8px;
}

@media (max-width: 768px) {
  .cart-summary {
    flex-direction: column;
    align-items: stretch;
  }

  .cart-total {
    justify-content: space-between;
  }

  .cart-total strong {
    font-size: 19px;
  }

  .order-btn {
    width: 100%;
  }
}
</style>
