<template>
  <section class="categories">
    <router-link to="/products/upper-body" class="card top">
      <img src="../assets/images/topwear.png" />

      <div class="card-content">
        <h2>بالا تنه</h2>
      </div>
    </router-link>

    <router-link to="/products/bottom-body" class="card bottom">
      <img src="../assets/images/bottomwear.png" />

      <div class="card-content">
        <h2>پایین تنه</h2>
      </div>
    </router-link>
  </section>
</template>

<script setup></script>

<style scoped>
.categories {
  display: flex;
  gap: 30px;
  padding: 50px;
}

.card {
  transition: 0.5s;
  transition: 0.5s;
  position: relative;
  flex: 1;
  height: 500px;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
}

.card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 0.6s;
}

.card-content {
  position: absolute;
  top: 50%;
  left: 50px;
  transform: translateY(-50%);

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 25px;

  z-index: 2;
}

.card-content h2 {
  font-size: 25px;
  margin-top: 300px;
  margin-left: 80px;
  font-weight: 800;
  color: #222;
  line-height: 1.3;
}

.card::before {
  content: "";

  position: absolute;

  top: 0;
  left: -100%;

  width: 50%;
  height: 100%;

  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);

  transform: skewX(-25deg);

  transition: 1s;

  z-index: 5;
}

.card:hover::before {
  left: 150%;
}

.card:hover img {
  transform: scale(1.05);
}

.card:hover {
  transform: translateY(-8px);
}

/* =========================
   Categories Responsive
========================= */

@media (max-width: 991.98px) {
  .categories {
    gap: 20px;
  }

  .categories .card {
    height: 350px;
  }

  .categories .card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .categories .card-content h2 {
    font-size: 28px;
  }
}

@media (max-width: 767.98px) {
  .categories .card {
    position: relative;
    overflow: hidden;
  }

  .categories .card img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
  }

  .categories .card-content {
    position: absolute;
    z-index: 3;

    bottom: 900px;
    left: 10px;

    color: white;
  }

  .categories .card-content h2 {
    margin: 0;
    color: black;
    font-size: 24px;
  }

  .categories .card::after {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 2;

    background: linear-gradient(to top, rgba(0, 0, 0, 0.65), transparent 60%);
  }
}

@media (max-width: 480px) {
  .categories {
    padding: 0 10px;
    gap: 12px;
  }

  .categories .card {
    height: 230px;
  }

  .categories .card img {
    object-fit: cover;
  }

  .categories .card-content h2 {
    font-size: 21px;
  }
}
</style>
