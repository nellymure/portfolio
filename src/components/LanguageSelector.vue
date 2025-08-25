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
    <FadeInViewport delay="0.5s">
      <img v-if="isToggled" src="@/assets/images/mouth-opened.png" />
      <img v-else src="@/assets/images/mouth-closed.png" />
    </FadeInViewport>
  </div>
</template>

<style lang="css" scoped>
.languageSelector {
  position: fixed;
  --img-size: 50px;
  --img-offset: calc(var(--img-size) / 2);
  top: calc(100vh - var(--half-padding-x) - var(--img-offset));
  left: calc(var(--half-padding-x) - var(--img-offset));
  z-index: 200;
}
.languageSelector img {
  cursor: pointer;
  width: var(--img-size);
  height: var(--img-size);
}
@media (orientation: portrait) {
  .languageSelector {
    top: calc(100vh - var(--padding-x) * 1.5 - var(--img-offset));
    left: var(--padding-x);
  }
}
</style>
