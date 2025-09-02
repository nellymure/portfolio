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

function stretch(cssClass: string, parent: HTMLElement) {
  const items = Array.from(document.getElementsByClassName(cssClass)) as HTMLElement[]
  if (items.length === 0) {
    throw new Error(`No element with class ${cssClass} found`)
  }
  items.forEach((item) => {
    item.style.letterSpacing = `normal`
    item.style.wordSpacing = `normal`
  })
  parent.style.marginRight = `0`
  parent.style.gap = `normal`

  const parentWidth = parent.clientWidth
  console.log(parentWidth)
  const avgSpace =
    items
      .map((item) => {
        const currentLength = item.innerText.length + item.children.length
        const currentCharWidth = item.clientWidth / currentLength
        const spaceForChar = parentWidth / currentLength / items.length
        console.log({
          text: item.innerText,
          offset: item.clientWidth,
          currentLength,
          currentCharWidth,
          spaceForChar,
        })
        return spaceForChar - currentCharWidth + (spaceForChar - currentCharWidth) / currentLength
      })
      .reduce((a, b) => a + b) / items.length
  console.log(avgSpace)
  items.forEach((item) => {
    item.style.letterSpacing = `${avgSpace}px`
    item.style.wordSpacing = `-${avgSpace}px`
  })
  parent.style.marginRight = `-${avgSpace}px`
  parent.style.gap = `${avgSpace}px`
}
function resize() {
  if (window.matchMedia('(orientation: landscape)').matches) {
    stretch('stretch', banner.value!)
    stretch('main-title', mainTitleContainer.value!)
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
  height: 100dvh;
  --font-size-main-title: clamp(2.7994rem, -8.879rem + 51.904vw, 53.4058rem);
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
  margin-top: calc(var(--font-size--2) / 2);
  color: var(--color-hex-beige-light);
  text-transform: uppercase;
}
.icon-asterisk {
  font-size: 0.8em;
}
.sd-asterisk {
  display: none;
}
.main-title-container {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  font-family: var(--font-family-le-murmure);
  font-weight: var(--font-weight-normal);
  font-size: var(--font-size-main-title);
  color: var(--color-hex-beige-light);
}
.main-title {
  line-height: 1;
  hyphens: none;
  transform-origin: top left;
  /* transform: translateY(var(--font-size-main-title) * 2); */
  transform: translateY(calc(var(--font-size-main-title) * 0.2));
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
@media (orientation: portrait) {
  .hover-container {
    margin: 2rem 0 0 2rem;
    align-items: start;
  }
  .banner {
    margin: 0;
    flex-direction: column;
    text-align: left;
    font-size: var(--font-size--1);
    letter-spacing: 0.5em;
    word-spacing: normal;
    gap: auto;
  }
  .sd-asterisk {
    display: inline;
  }
  /* .main-title-container {
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
  } */
  .main-title {
    line-height: 1;
    transform: rotate(-90deg);
    transform-origin: top left;
  }
}
</style>
