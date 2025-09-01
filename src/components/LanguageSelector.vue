<script setup lang="ts">
import { ref } from 'vue'
import { switchI18nLocale } from '@/i18n/i18n'
import FadeInViewport from '@/components/FadeInViewport.vue'

let isToggled = ref(false)
function toggle() {
  switchI18nLocale()
  isToggled.value = !isToggled.value
}
</script>

<template>
  <div class="languageSelector" @click="toggle">
    <img v-if="isToggled" src="@/assets/images/mouth-opened.png" />
    <img v-else src="@/assets/images/mouth-closed.png" />
  </div>
</template>

<style lang="css" scoped>
.languageSelector {
  position: fixed;
  --img-size: 5rem;
  --img-offset: calc(var(--img-size) / 2);
  top: calc(100vh - var(--half-padding-x) - var(--img-offset));
  left: calc(var(--half-padding-x) - var(--img-offset));
  z-index: 200;
  animation: bounce-in-bck 0.6s cubic-bezier(0.23, 1, 0.32, 1) both;
  animation-delay: 1s;
}
@keyframes bounce-in-bck {
  0% {
    transform: scale(7);
    animation-timing-function: ease-in;
    opacity: 0;
  }
  38% {
    transform: scale(1);
    animation-timing-function: ease-out;
    opacity: 1;
  }
  55% {
    transform: scale(1.5);
    animation-timing-function: ease-in;
  }
  72% {
    transform: scale(1);
    animation-timing-function: ease-out;
  }
  81% {
    transform: scale(1.24);
    animation-timing-function: ease-in;
  }
  89% {
    transform: scale(1);
    animation-timing-function: ease-out;
  }
  95% {
    transform: scale(1.04);
    animation-timing-function: ease-in;
  }
  100% {
    transform: scale(1);
    animation-timing-function: ease-out;
  }
}
.languageSelector img {
  cursor: pointer;
  width: var(--img-size);
  height: var(--img-size);
}
@media (orientation: portrait) {
  .languageSelector {
    top: calc(100% - var(--padding-x) * 1.5 - var(--img-offset));
    left: var(--padding-x);
  }
}
</style>
