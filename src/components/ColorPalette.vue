<script setup lang="ts">
import { onUnmounted, onMounted, ref } from 'vue'

defineProps({
  colors: {
    type: Array as () => string[],
    required: true,
  },
})

const content = ref<HTMLElement | null>(null)
const isVisible = ref(false)

onMounted(() => {
  window.addEventListener('scroll', updateVisibility)
  window.addEventListener('resize', updateVisibility)
  updateVisibility()
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateVisibility)
  window.removeEventListener('resize', updateVisibility)
})

function updateVisibility() {
  if (!content.value) {
    return
  }

  const { top, bottom } = content.value.getBoundingClientRect()
  const { innerHeight } = window
  isVisible.value = (top > 0 && top < innerHeight) || (bottom > 0 && bottom < innerHeight)
  if (isVisible.value) {
    window.removeEventListener('scroll', updateVisibility)
    window.removeEventListener('resize', updateVisibility)
  }
}
</script>

<template>
  <div class="color-palette" ref="content">
    <div
      v-for="(color, idx) in colors"
      :key="idx"
      :class="{ 'fade-in': isVisible }"
      :style="{
        'background-color': color,
        animationDelay: idx * 0.2 + 's',
      }"
    ></div>
  </div>
</template>

<style lang="css" scoped>
.color-palette {
  display: flex;
  margin-top: 4em;
}
.color-palette div {
  width: 2em;
  height: 2em;
  margin: 0.2em;
  border-radius: 50%;
  opacity: 0;
}
.fade-in {
  animation: fadeIn 0.6s forwards linear;
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
