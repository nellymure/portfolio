<script setup lang="ts">
import { type RouteLocationNormalizedLoadedGeneric } from 'vue-router'

function getTransitionName(route: RouteLocationNormalizedLoadedGeneric): string {
  return <string>route.meta!.transition
}
</script>

<template>
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
  width: 100%;
  height: 100%;
}

.slide-right-leave-active,
.slide-right-enter-active {
  transition: all 1s ease-out;
}
.slide-right-enter-from {
  transform: translateX(100%);
}

.fade-leave-active,
.fade-enter-active {
  transition: all 1s ease-out;
}
.fade-enter-from {
  opacity: 0;
}
</style>
