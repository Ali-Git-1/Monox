import { defineStore } from "pinia";
import { ref } from "vue";

export const useOrdersStore = defineStore("orders", () => {
  const orders = ref([]);

  function getUserOrdersKey() {
    const currentUser = JSON.parse(localStorage.getItem("currentUser") || "null");

    if (!currentUser) {
      return null;
    }

    return `orders_${currentUser.id}`;
  }

  function loadOrders() {
    const key = getUserOrdersKey();

    if (!key) {
      orders.value = [];
      return;
    }

    orders.value = JSON.parse(localStorage.getItem(key) || "[]");
  }

  function saveOrders() {
    const key = getUserOrdersKey();

    if (!key) {
      return;
    }

    localStorage.setItem(key, JSON.stringify(orders.value));
  }

  function addOrder(cartItems, totalPrice) {
    const newOrder = {
      id: Date.now(),
      items: JSON.parse(JSON.stringify(cartItems)),
      totalPrice,
      date: new Date().toLocaleString("fa-IR"),
      status: "در انتظار بررسی",
      statusStep: 1,
    };

    orders.value.push(newOrder);

    saveOrders();
  }

  function clearOrders() {
    orders.value = [];
    saveOrders();
  }

  return {
    orders,
    loadOrders,
    addOrder,
    clearOrders,
  };
});
