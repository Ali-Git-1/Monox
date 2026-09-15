import { defineStore } from "pinia";
import { ref } from "vue";

export const useCartStore = defineStore("cart", () => {
  const cart = ref([]);

  function getUserCartKey() {
    const currentUser = JSON.parse(localStorage.getItem("currentUser") || "null");

    if (!currentUser) {
      return "cart_guest";
    }

    return `cart_${currentUser.id}`;
  }

  function loadCart() {
    const key = getUserCartKey();

    if (!key) {
      cart.value = [];
      return;
    }

    cart.value = JSON.parse(localStorage.getItem(key) || "[]");
  }

  function saveCart() {
    const key = getUserCartKey();

    if (!key) {
      return;
    }

    localStorage.setItem(key, JSON.stringify(cart.value));
  }

  function addToCart(product, size = null, color = null) {
    const existingItem = cart.value.find(
      (item) => item.product.id === product.id && item.size === size && item.color === color,
    );

    if (existingItem) {
      existingItem.quantity++;
    } else {
      cart.value.push({
        product,
        size,
        color,
        quantity: 1,
      });
    }

    saveCart();
  }

  function removeFromCart(index) {
    cart.value.splice(index, 1);
    saveCart();
  }

  function increaseQuantity(index) {
    cart.value[index].quantity++;
    saveCart();
  }

  function decreaseQuantity(index) {
    if (cart.value[index].quantity > 1) {
      cart.value[index].quantity--;
    } else {
      cart.value.splice(index, 1);
    }

    saveCart();
  }

  function clearCart() {
    cart.value = [];
    saveCart();
  }

  function clearCurrentCart() {
    cart.value = [];
  }

  const totalItems = () => {
    return cart.value.reduce((total, item) => total + item.quantity, 0);
  };

  const totalPrice = () => {
    return cart.value.reduce((total, item) => {
      const price = item.product.price;
      const discount = item.product.discount || 0;

      const finalPrice = price - (price * discount) / 100;

      return total + finalPrice * item.quantity;
    }, 0);
  };

  return {
    cart,
    loadCart,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    clearCurrentCart,
    totalItems,
    totalPrice,
  };
});
