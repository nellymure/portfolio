<script setup lang="ts">
import { onMounted, ref, type VNodeRef } from 'vue'

defineProps({
  size: {
    type: String,
    default: '1em',
  },
})
const svgRef = ref<VNodeRef | null>(null)
const color = ref<string>('#000000')

onMounted(() => {
  const parentStyles = getComputedStyle(svgRef.value.parentElement as HTMLElement)
  color.value = parentStyles.getPropertyValue('color')
})
</script>

<template>
  <svg
    class="icon-asterisk"
    ref="svgRef"
    :width="size"
    viewBox="0 0 630.96 630.96"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      :fill="color"
      d="M354.34,0l-22.85,277.73,179.47-212.58,54.86,54.86-212.58,179.47,277.73-22.85v77.71l-277.73-22.85,212.58,179.47-54.86,54.86-179.47-212.62,22.85,277.77h-77.71l22.85-277.77-179.47,212.62-54.86-54.86,212.62-179.47L0,354.34v-77.71l277.77,22.85L65.16,120.01l54.86-54.86,179.47,212.58L276.62,0h77.71Z"
    />
  </svg>
</template>
