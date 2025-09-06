<script setup lang="ts">
import router, { routes, getRouteName } from '@/router'
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import IconAsterisk from '@/components/icons/IconAsterisk.vue'
import { onBeforeUnmount, onMounted, ref, type VNode } from 'vue'

const { t } = useI18n()
const nextPage = routes.HUB
const banner = ref<HTMLElement | null>(null)
const mainTitleContainer = ref<HTMLElement | null>(null)

function goToNextPage() {
  // router.push({ name: getRouteName(nextPage) })
  // router.go(1)
}

function stretch(cssClass: string, parent: HTMLElement, debug: boolean = false) {
  const items = getElementsByClassName(cssClass)
  if (debug) {
    console.log('stretch')
  }
  clearStretch(items, parent)

  const parentWidth = parent.clientWidth
  const avgSpace =
    items
      .map((item) => {
        const currentLength = item.innerText.length + item.children.length
        const currentCharWidth = item.clientWidth / currentLength
        const spaceForChar = parentWidth / currentLength / items.length
        const space =
          spaceForChar - currentCharWidth + (spaceForChar - currentCharWidth) / currentLength
        if (debug) {
          console.log({
            'item.clientWidth': item.clientWidth,
            currentLength,
            currentCharWidth,
            spaceForChar,
            space,
          })
        }
        return space
      })
      .reduce((a, b) => a + b) / items.length
  if (debug) {
    console.log({
      avgSpace,
    })
  }
  items.forEach((item) => {
    item.style.letterSpacing = `${avgSpace}px`
    item.style.wordSpacing = `-${avgSpace}px`
  })
  parent.style.marginRight = `-${avgSpace}px`
  parent.style.gap = `${avgSpace}px`

  setTimeout(() => {
    // In case of error, it may be due to DOM refreshing time, so stretch again later
    if (avgSpace < 0) {
      console.log('stretch again ', cssClass)
      stretch(cssClass, parent, debug)
    }
  }, 100)
}

function stretch2(cssClass: string, parent: HTMLElement, debug: boolean = false) {
  const items = getElementsByClassName(cssClass)
  items.forEach((item) => {
    console.log(item.children)
    item.innerHTML = Array.from(item.innerText)
      .map((child) => `<span>${child}</span>`)
      .join('')
  })
}

function getElementsByClassName(cssClass: string): HTMLElement[] {
  const items = Array.from(document.getElementsByClassName(cssClass)) as HTMLElement[]
  if (items.length === 0) {
    throw new Error(`No element with class ${cssClass} found`)
  }
  return items
}

function clearStretch(items: HTMLElement[], parent: HTMLElement) {
  items.forEach((item) => {
    item.style.letterSpacing = `normal`
    item.style.wordSpacing = `normal`
  })
  parent.style.marginRight = `0`
  parent.style.gap = `normal`
}

function resize() {
  if (!window.matchMedia('(max-aspect-ratio: 5/4)').matches) {
    stretch2('stretch', banner.value!)
    stretch2('main-title', mainTitleContainer.value!)
  } else {
    // clearStretch(getElementsByClassName('stretch'), banner.value!)
    stretch2('stretch', banner.value!, true)
  }
}
onMounted(() => {
  window.addEventListener('resize', resize)
  resize()
})
onBeforeUnmount(() => {
  window.removeEventListener('resize', resize)
})
</script>

<template>
  <router-link
    class="home"
    @wheel="goToNextPage"
    @touchstart="goToNextPage"
    :to="{ name: getRouteName(nextPage) }"
  >
    <div class="hover-container">
      <div class="banner" ref="banner">
        <div class="stretch">
          nelly mure
          <IconAsterisk />
        </div>
        <div class="stretch">
          {{ t('spatial design') }}
          <IconAsterisk />
        </div>
        <div class="stretch">
          {{ t('scenography') }}
          <IconAsterisk class="sd-asterisk" />
        </div>
      </div>
      <div class="main-title-container" ref="mainTitleContainer">
        <div class="main-title">portfolio</div>
      </div>
    </div>
    <div class="gradient-bg"></div>
  </router-link>
</template>

<i18n>
  {
    "fr": {
      "spatial design": "design d'espace",
      "scenography": "scenographie",
    },
    "en": {
      "spatial design": "spatial design",
      "scenography": "scenography",
    }
  }
</i18n>

<style lang="css" scoped>
.home {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
.hover-container {
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  user-select: none;
  overflow: hidden;
  opacity: 0;
  animation: fade-in-bottom 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) forwards;
  width: 100%;
  height: 100%;
  --font-size-main-title: clamp(2.7994rem, -8.879rem + 51.904vw, 90vmin);
}
@keyframes fade-in-bottom {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.banner {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  font-family: var(--font-family-reem-kufi);
  font-weight: var(--font-weight-normal);
  font-size: var(--font-size--2);
  margin-top: calc(var(--font-size-0) / 2);
  text-transform: uppercase;
  color: transparent;
  animation: transparent-to-hex-beige-light 1.5s cubic-bezier(0.39, 0.575, 0.565, 1) forwards;
}
.icon-asterisk {
  font-size: 0.8em;
}
.sd-asterisk {
  display: none;
}
.main-title-container {
  position: fixed;
  bottom: 0;
  width: 100vw;
  display: flex;
  justify-content: center;
  font-family: var(--font-family-le-murmure);
  font-weight: var(--font-weight-normal);
  font-size: var(--font-size-main-title);
  color: transparent;
  animation: transparent-to-hex-beige-light 1.5s cubic-bezier(0.39, 0.575, 0.565, 1) forwards;
}
@keyframes transparent-to-hex-beige-light {
  50% {
    color: transparent;
  }
  100% {
    color: var(--color-hex-beige-light);
  }
}
@media (height < 100lvh) {
  .main-title-container {
    transform-origin: top left;
    transform: translateY(0.18em);
  }
}
.main-title {
  line-height: 1;
  hyphens: none;
}
.gradient-bg {
  background-image: url('@/assets/images/home/gradient-bg.png');
  background-size: 200% 200%;
  animation: movingBgGradient 20s linear infinite;
  height: 100vh;
  width: 100vw;
}
@keyframes movingBgGradient {
  0% {
    background-position: 0% 20%;
  }
  33% {
    background-position: 100% 50%;
  }
  66% {
    background-position: 0% 100%;
  }
  100% {
    background-position: 0% 20%;
  }
}
@media (max-aspect-ratio: 5/4) {
  .hover-container {
    margin: 2rem 0 2rem 2rem;
    align-items: start;
    --font-size-main-title: clamp(2.7994rem, -8.879rem + 40cqh, 50cqi);
  }
  .banner {
    margin: 0;
    flex-direction: column;
    text-align: left;
    gap: 1em;
  }
  .stretch {
    letter-spacing: 0.5em;
    word-spacing: normal;
  }
  .sd-asterisk {
    display: inline;
  }
  .main-title-container {
    height: 80vh;
    align-items: flex-start;
    justify-content: flex-end;
    transform-origin: center center;
    transform: rotate(180deg);
    margin: 0 0 2rem 0;
    width: 50%;
  }
  .main-title {
    line-height: normal;
    writing-mode: vertical-rl;
    text-orientation: mixed;
  }
}
</style>
