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
  bottom: 0;
  left: 0;
  z-index: 1000;
}
.languageSelector img {
  cursor: pointer;
  width: 50px;
  height: 50px;
}
@media (orientation: portrait) {
  .languageSelector {
    bottom: var(--padding-x);
    left: var(--padding-x);
  }
}
</style>
