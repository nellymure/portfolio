<script setup lang="ts">
import { routes } from '@/router'
import { type RouteLocationNormalizedLoadedGeneric } from 'vue-router'
import LanguageSelector from '@/components/LanguageSelector.vue'

function getTransitionName(route: RouteLocationNormalizedLoadedGeneric): string {
  return <string>route.meta!.transition
}

function displayLanguageSelector(route: RouteLocationNormalizedLoadedGeneric): boolean {
  return route.name != undefined && route.name != routes.HOME.name
}
</script>

<template>
  <main>
    <router-view v-slot="{ Component, route }">
      <LanguageSelector v-if="displayLanguageSelector(route)" />
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
}
.slide-right-leave-active,
.slide-right-enter-active {
  transition: all 1s ease-out;
}
.slide-right-enter-from {
  transform: translateX(100vw);
}
.slide-right-leave-to {
  opacity: 0;
}
.slide-left-leave-active,
.slide-left-enter-active {
  transition: all 1s ease-out;
}
.slide-left-enter-from {
  transform: translateX(-100vw);
}
.slide-left-leave-to {
  opacity: 0;
}
</style>
