import { defineStore } from "pinia";
import { ref } from "vue";

export const useWalletStore = defineStore("wallet", () => {
  const balance = ref(0);

  function getUserWalletKey() {
    const currentUser = JSON.parse(localStorage.getItem("currentUser") || "null");

    if (!currentUser) {
      return null;
    }

    return `wallet_${currentUser.id}`;
  }

  function loadWallet() {
    const key = getUserWalletKey();

    if (!key) {
      balance.value = 0;
      return;
    }

    balance.value = Number(localStorage.getItem(key) || 0);
  }

  function saveWallet() {
    const key = getUserWalletKey();

    if (!key) {
      return;
    }

    localStorage.setItem(key, balance.value);
  }

  function increaseBalance(amount) {
    balance.value += amount;
    saveWallet();
  }

  function decreaseBalance(amount) {
    if (amount > balance.value) {
      return false;
    }

    balance.value -= amount;
    saveWallet();

    return true;
  }

  return {
    balance,
    loadWallet,
    increaseBalance,
    decreaseBalance,
  };
});
