<script setup lang="ts">
import { onMounted, ref, type VNodeRef } from 'vue'

const svgRef = ref<VNodeRef | null>(null)
const style = ref<string>('stroke: #000000')

onMounted(() => {
  const parentStyles = getComputedStyle(svgRef.value.parentElement as HTMLElement)
  style.value = `stroke: ${parentStyles.getPropertyValue('color')}`
})
</script>

<template>
  <svg
    ref="svgRef"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    xml:space="preserve"
    xmlns:serif="http://www.serif.com/"
    style="
      fill-rule: evenodd;
      clip-rule: evenodd;
      stroke-linecap: round;
      stroke-linejoin: round;
      stroke-miterlimit: 1.5;
    "
  >
    <g id="Calque1">
      <path
        d="M256,60.545L256,366.56L362.612,259.949L256,366.56"
        style="fill: none; stroke-width: 31.21px"
        :style="style"
      />
      <g transform="matrix(-1,0,0,1,512,0)">
        <path
          d="M256,60.545L256,366.56L362.612,259.949L256,366.56"
          style="fill: none; stroke-width: 31.21px"
          :style="style"
        />
      </g>
      <path
        d="M122.406,449.481L386.961,449.481"
        style="fill: none; stroke-width: 31.21px"
        :style="style"
      />
    </g>
  </svg>
</template>
