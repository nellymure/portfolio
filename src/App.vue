<script setup lang="ts">
import { type RouteLocationNormalizedLoadedGeneric } from 'vue-router'
import LanguageSelector from '@/components/LanguageSelector.vue'

function getTransitionName(route: RouteLocationNormalizedLoadedGeneric): string {
  return <string>route.meta!.transition
}
</script>

<template>
  <LanguageSelector />
  <main>
    <router-view v-slot="{ Component, route }">
      <transition :name="getTransitionName(route)">
        <component class="component" :is="Component" :key="route.path" />
      </transition>
    </router-view>
  </main>
</template>

<style scoped>
.component {
  position: absolute;
  z-index: 2;
  width: 100vw;
  height: 100vh;
}
.slide-right-leave-active,
.slide-right-enter-active {
  transition: transform 1s ease-out;
}
.slide-right-enter-from {
  transform: translateX(100vw);
}
.fade-leave-active {
  transition: opacity 0.3s ease-out;
}
.fade-enter-active {
  transition: opacity 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.fade-enter-from {
  opacity: 0;
}
</style>
