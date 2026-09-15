import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("user", () => {
  const currentUser = ref(JSON.parse(localStorage.getItem("currentUser") || "null"));

  function login(user) {
    currentUser.value = user;

    localStorage.setItem("currentUser", JSON.stringify(user));
  }

  function logout() {
    currentUser.value = null;

    localStorage.removeItem("currentUser");
  }

  function isLoggedIn() {
    return currentUser.value !== null;
  }

  return {
    currentUser,
    login,
    logout,
    isLoggedIn,
  };
});
