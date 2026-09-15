import { defineStore } from "pinia";
import { ref } from "vue";

export const useFavoritesStore = defineStore("favorites", () => {
  const favorites = ref([]);

  function getUserFavoritesKey() {
    const currentUser = JSON.parse(localStorage.getItem("currentUser") || "null");

    if (!currentUser) {
      return "favorites_guest";
    }

    return `favorites_${currentUser.id}`;
  }

  function loadFavorites() {
    const key = getUserFavoritesKey();

    if (!key) {
      favorites.value = [];
      return;
    }

    favorites.value = JSON.parse(localStorage.getItem(key) || "[]");
  }

  function saveFavorites() {
    const key = getUserFavoritesKey();

    if (!key) {
      return;
    }

    localStorage.setItem(key, JSON.stringify(favorites.value));
  }

  function toggleFavorite(product) {
    const index = favorites.value.findIndex((item) => item.id === product.id);

    if (index === -1) {
      favorites.value.push(product);
    } else {
      favorites.value.splice(index, 1);
    }

    saveFavorites();
  }

  function isFavorite(productId) {
    return favorites.value.some((item) => item.id === productId);
  }

  function clearFavorites() {
    favorites.value = [];
    saveFavorites();
  }

  function clearCurrentFavorites() {
    favorites.value = [];
  }

  return {
    favorites,
    loadFavorites,
    toggleFavorite,
    isFavorite,
    clearFavorites,
    clearCurrentFavorites,
  };
});
