<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const props = defineProps({
  delay: {
    type: String,
  },
  debug: {
    type: Boolean,
    default: false,
  },
})

const content = ref<HTMLElement | null>(null)
const isVisible = ref(false)
const delay = ref(props.delay || '0')

onMounted(() => {
  window.addEventListener('scroll', updateVisibility)
  window.addEventListener('resize', updateVisibility)
  updateVisibility()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateVisibility)
  window.removeEventListener('resize', updateVisibility)
})

function updateVisibility() {
  if (!content.value) {
    return
  }

  const { top, bottom } = content.value.getBoundingClientRect()
  const innerHeight = window.innerHeight + 1 // Add 1px to account for any potential scrollbars
  isVisible.value = (top > 0 && top < innerHeight) || (bottom > 0 && bottom < innerHeight)
  console.log('isVisible.value', isVisible.value, top, bottom, innerHeight)
  if (isVisible.value) {
    window.removeEventListener('scroll', updateVisibility)
    window.removeEventListener('resize', updateVisibility)
  }
}
</script>

<template>
  <div ref="content" class="fade-in-container" :class="{ 'is-visible': isVisible }">
    <slot></slot>
  </div>
</template>

<style lang="css" scoped>
.fade-in-container {
  opacity: 0;
}
.is-visible {
  animation: fade-in-bottom 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) forwards;
  animation-delay: v-bind(delay);
}
@keyframes fade-in-bottom {
  0% {
    transform: translateY(50px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
