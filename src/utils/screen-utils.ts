import { ref, onMounted, onUnmounted } from 'vue'

export function useLayout() {
  const isPortraitLayout = ref(false)
  const isSmallLandscapeLayout = ref(false)
  const isLargeLandscapeLayout = ref(false)
  const isLandscapeLayout = ref(false)

  function updateLayout() {
    isPortraitLayout.value = window.matchMedia(
      `(orientation: portrait) or ((max-width: 960px) and (min-height: 431px))`,
    ).matches
    isSmallLandscapeLayout.value = window.matchMedia(
      `(orientation: landscape) and (max-height: 430px)`,
    ).matches
    isLargeLandscapeLayout.value = !isPortraitLayout.value && !isSmallLandscapeLayout.value
    isLandscapeLayout.value = !isPortraitLayout.value
    console.log('Active layout', {
      isPortraitLayout: isPortraitLayout.value,
      isSmallLandscapeLayout: isSmallLandscapeLayout.value,
      isLargeLandscapeLayout: isLargeLandscapeLayout.value,
      isLandscapeLayout: isLandscapeLayout.value,
    })
  }

  onMounted(() => {
    window.addEventListener('resize', updateLayout)
    updateLayout()
  })
  onUnmounted(() => {
    window.removeEventListener('resize', updateLayout)
  })

  return {
    isPortraitLayout,
    isSmallLandscapeLayout,
    isLargeLandscapeLayout,
    isLandscapeLayout,
  }
}
