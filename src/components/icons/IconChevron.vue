<script setup lang="ts">
import { computed, onMounted, ref, type VNodeRef } from 'vue'

const props = defineProps({
  direction: {
    type: String as () => 'top' | 'right' | 'bottom' | 'left',
    required: true,
  },
  size: {
    type: String,
    default: '1em',
  },
})
const svgRef = ref<VNodeRef | null>(null)
const color = ref<string>('#000000')
const rotate = computed(() => {
  switch (props.direction) {
    case 'bottom':
      return 'rotate(90deg)'
    case 'left':
      return 'rotate(180deg)'
    case 'top':
      return 'rotate(270deg)'
    default:
      return ''
  }
})

onMounted(() => {
  const parentStyles = getComputedStyle(svgRef.value.parentElement as HTMLElement)
  color.value = parentStyles.getPropertyValue('color')
})
</script>

<template>
  <svg
    class="icon-chevron"
    ref="svgRef"
    :width="size"
    viewBox="-19.04 0 75.804 75.804"
    xmlns="http://www.w3.org/2000/svg"
    fill="#000000"
  >
    <g stroke-width="0"></g>
    <g stroke-linecap="round" stroke-linejoin="round"></g>
    <g>
      <g transform="translate(-831.568 -384.448)">
        <path
          d="M833.068,460.252a1.5,1.5,0,0,1-1.061-2.561l33.557-33.56a2.53,2.53,0,0,0,0-3.564l-33.557-33.558a1.5,1.5,0,0,1,2.122-2.121l33.556,33.558a5.53,5.53,0,0,1,0,7.807l-33.557,33.56A1.5,1.5,0,0,1,833.068,460.252Z"
          :fill="color"
        ></path>
      </g>
    </g>
  </svg>
</template>

<style lang="css" scoped>
.icon-chevron {
  transform: v-bind(rotate);
}
</style>
