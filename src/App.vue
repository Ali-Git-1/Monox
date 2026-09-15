<script setup>
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import Header from "./Header.vue";
import { useCartStore } from "./store/cartStore";
import { useFavoritesStore } from "./store/favoritesStore";

const route = useRoute();

const cartStore = useCartStore();
const favoritesStore = useFavoritesStore();

const showHeader = computed(() => {
  return route.path !== "/login" && route.path !== "/signup";
});

onMounted(() => {
  cartStore.loadCart();
  favoritesStore.loadFavorites();
});
</script>

<template>
  <Header v-if="showHeader" />

  <router-view />
</template>
