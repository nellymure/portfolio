<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const props = defineProps({
  delay: {
    type: String,
  },
})

const content = ref<HTMLElement | null>(null)
const isVisible = ref(false)
const delay = ref(props.delay || '0')

onMounted(() => {
  window.addEventListener('scroll', updateVisibility)
  window.addEventListener('resize', updateVisibility)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateVisibility)
  window.removeEventListener('resize', updateVisibility)
})

function updateVisibility() {
  if (!content.value) {
    return
  }

  const { top, left, bottom, right } = content.value.getBoundingClientRect()
  const { innerHeight, innerWidth } = window
  isVisible.value =
    ((top > 0 && top < innerHeight) || (bottom > 0 && bottom < innerHeight)) &&
    ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
  if (isVisible.value) {
    window.removeEventListener('scroll', updateVisibility)
    window.removeEventListener('resize', updateVisibility)
  }
}
updateVisibility()
</script>

<template>
  <slot :class="{ 'is-visible': isVisible }" ref="content"></slot>
</template>

<style scoped>
.is-visible {
  animation: fade-in-bottom 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;
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
