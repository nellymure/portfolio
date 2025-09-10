<script setup lang="ts">
import { ref } from 'vue'
import { switchI18nLocale } from '@/i18n/i18n'

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
  --img-size: calc(var(--font-size-5) * 1.5);
  --img-offset: calc(var(--img-size) / 2);
  bottom: calc(var(--padding-0) - var(--img-offset));
  left: var(--padding-0);
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
@media (orientation: portrait) or ((max-width: 720px) and (min-height: 431px)) {
  .languageSelector {
    bottom: calc(var(--padding-2) - var(--img-offset));
  }
}
</style>
