<script setup>
import { ref, onMounted, onUnmounted } from "vue";

// وارد کردن عکس‌ها
import slide1 from "../assets/images/slide1.jpg";
import slide2 from "../assets/images/slide2.jpg";
import slide3 from "../assets/images/slide3.jpg";
import slide4 from "../assets/images/slide4.jpg";
import slide5 from "../assets/images/slide5.jpg";

// لیست عکس‌های اسلایدر
const slides = [slide1, slide2, slide3, slide4, slide5];

// شماره اسلاید فعلی
const current = ref(0);

// مختصات لمس / درگ
const startX = ref(0);
const endX = ref(0);

// وضعیت درگ موس
const isDragging = ref(false);

// اسلاید بعدی
function nextSlide() {
  current.value++;

  if (current.value >= slides.length) {
    current.value = 0;
  }
}

// اسلاید قبلی
function previousSlide() {
  current.value--;

  if (current.value < 0) {
    current.value = slides.length - 1;
  }
}

// رفتن به اسلاید مشخص
function goToSlide(index) {
  current.value = index;
}

// شروع لمس موبایل
function handleTouchStart(e) {
  startX.value = e.touches[0].clientX;
}

// پایان لمس موبایل
function handleTouchEnd(e) {
  endX.value = e.changedTouches[0].clientX;

  handleSwipe();
}

// شروع درگ با موس
function handleMouseDown(e) {
  isDragging.value = true;

  startX.value = e.clientX;
}

// حرکت موس
function handleMouseMove(e) {
  if (!isDragging.value) return;

  endX.value = e.clientX;
}

// رها کردن موس
function handleMouseUp() {
  if (!isDragging.value) return;

  isDragging.value = false;

  handleSwipe();
}

// خارج شدن موس از اسلایدر
function handleMouseLeave() {
  isDragging.value = false;
}

// تشخیص جهت حرکت
function handleSwipe() {
  const diff = startX.value - endX.value;

  if (diff > 50) {
    nextSlide();
  } else if (diff < -50) {
    previousSlide();
  }
}

// تایمر اتوماتیک
let sliderInterval;

onMounted(() => {
  sliderInterval = setInterval(() => {
    nextSlide();
  }, 5000);
});

// پاک کردن تایمر
onUnmounted(() => {
  clearInterval(sliderInterval);
});
</script>

<template>
  <section
    class="slider"
    @touchstart="handleTouchStart"
    @touchend="handleTouchEnd"
    @mousedown="handleMouseDown"
    @mousemove="handleMouseMove"
    @mouseup="handleMouseUp"
    @mouseleave="handleMouseLeave"
  >
    <div class="slides">
      <img
        v-for="(slide, index) in slides"
        :key="index"
        :src="slide"
        class="slide"
        :class="{ active: current === index }"
        draggable="false"
        alt="محصولات فروشگاه Monox"
      />
    </div>

    <div class="dots">
      <span
        v-for="(slide, index) in slides"
        :key="index"
        class="dot"
        :class="{ 'active-dot': current === index }"
        @click="goToSlide(index)"
      ></span>
    </div>
  </section>
</template>

<style scoped>
.slider {
  position: relative;

  width: 70%;

  height: 500px;

  margin: 30px auto;

  overflow: hidden;

  border-radius: 10px;

  touch-action: pan-y;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
  transform: rotate(-1deg);
  cursor: pointer;
  user-select: none;
}

.slider:active {
  cursor: grabbing;
}

.slides {
  width: 100%;
  height: 100%;
}

.slide {
  position: absolute;
  pointer-events: none;

  width: 100%;

  height: 100%;

  opacity: 0;

  transition: 1s;
}

.slide.active {
  opacity: 1;
}

.dots {
  position: absolute;
  bottom: 18px;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  align-items: center;
  gap: 8px;

  padding: 7px 12px;
  border-radius: 30px;

  background: rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;

  background: rgba(255, 255, 255, 0.6);

  cursor: pointer;

  transition:
    width 0.3s ease,
    background 0.3s ease,
    transform 0.3s ease;
}

.dot:hover {
  transform: scale(1.2);
}

.active-dot {
  width: 25px;
  border-radius: 20px;

  background: #fff;

  transform: scale(1.05);
}

@media (max-width: 991.98px) {
  .slider {
    width: 100%;
    height: 420px;
  }

  .slide {
    width: 100%;
    height: 420px;
    object-fit: cover;
  }
}

@media (max-width: 767.98px) {
  .slider {
    height: 320px;
    border-radius: 0;
  }

  .slide {
    height: 320px;
    object-fit: cover;
  }
}

@media (max-width: 480px) {
  .slider {
    height: 240px;
  }

  .slide {
    height: 240px;
    object-fit: cover;
  }

  .dots {
    bottom: 10px;
    gap: 6px;
    padding: 6px 9px;
  }

  .dot {
    width: 6px;
    height: 6px;
  }

  .active-dot {
    width: 20px;
  }
}
</style>
