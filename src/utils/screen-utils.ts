import { ref, onMounted, onUnmounted } from 'vue'

const MAX_EXTRA_SMALL_MAX_WIDTH = 600 // xs
const MAX_SMALL_MAX_WIDTH = 960 // sm
const MAX_MEDIUM_MAX_WIDTH = 1280 // md
const MAX_LARGE_MAX_WIDTH = 1920 // lg
const MAX_EXTRA_LARGE_MAX_WIDTH = 2560 // xl

export function useLayout() {
  const isMobileLayout = ref(false)

  function updateCurrentLayout() {
    isMobileLayout.value = !window.matchMedia(
      `(orientation: landscape) and (min-width: ${MAX_SMALL_MAX_WIDTH}px)`,
    ).matches
  }

  onMounted(() => {
    window.addEventListener('resize', updateCurrentLayout)
  })
  onUnmounted(() => {
    window.removeEventListener('resize', updateCurrentLayout)
  })

  return {
    isMobileLayout,
  }
}

export default {
  MAX_EXTRA_SMALL_MAX_WIDTH,
  MAX_SMALL_MAX_WIDTH,
  MAX_MEDIUM_MAX_WIDTH,
  MAX_LARGE_MAX_WIDTH,
  MAX_EXTRA_LARGE_MAX_WIDTH,
}
