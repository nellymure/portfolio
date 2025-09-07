<script setup lang="ts">
import router, { routes, getRouteName } from '@/router'
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import IconAsterisk from '@/components/icons/IconAsterisk.vue'
import { ref } from 'vue'
import { useLayout } from '@/utils/screen-utils'

const { t } = useI18n()
const nextPage = routes.HUB
const mainTitleContainer = ref<HTMLElement | null>(null)
const { isLandscapeLayout } = useLayout()

function goToNextPage() {
  router.push({ name: getRouteName(nextPage) })
  router.go(1)
}
</script>

<template>
  <router-link
    class="home"
    @wheel="goToNextPage"
    @touchstart="goToNextPage"
    :to="{ name: getRouteName(nextPage) }"
  >
    <div class="hover-container">
      <div v-if="isLandscapeLayout" class="banner">
        <span v-for="char in t('nellyMure').replace(' ', '')">{{ char }}</span>
        <IconAsterisk />
        <span v-for="char in t('spatial design').replace(' ', '')">{{ char }}</span>
        <IconAsterisk />
        <span v-for="char in t('scenography')">{{ char }}</span>
      </div>
      <div v-else class="banner">
        <div class="banner-row">
          <span v-for="char in t('nellyMure').replace(' ', '')">{{ char }}</span>
          <IconAsterisk />
        </div>
        <div class="banner-row">
          <span v-for="char in t('spatial design').replace(' ', '')">{{ char }}</span>
          <IconAsterisk />
        </div>
        <div class="banner-row">
          <span v-for="char in t('scenography')">{{ char }}</span>
          <IconAsterisk class="sd-asterisk" />
        </div>
      </div>
      <div class="main-title-container" ref="mainTitleContainer">
        <div class="main-title">
          <span v-for="char in t('portfolio')">{{ char }}</span>
        </div>
      </div>
    </div>
    <div class="gradient-bg"></div>
  </router-link>
</template>

<i18n>
  {
    "fr": {
      "nelly mure": "nelly mure",
      "portfolio": "portfolio",
      "spatial design": "design d'espace",
      "scenography": "scenographie",
    },
    "en": {
      "nelly mure": "nelly mure",
      "portfolio": "portfolio",
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
  justify-content: space-between;
  font-family: var(--font-family-reem-kufi);
  font-weight: var(--font-weight-normal);
  font-size: var(--font-size--2);
  padding: 1em;
  text-transform: uppercase;
  color: var(--color-hex-beige-light);
}
.icon-asterisk {
  font-size: 0.8em;
  color: var(--color-hex-beige-light);
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
  color: var(--color-hex-beige-light);
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
  width: 100%;
  display: flex;
  justify-content: space-between;
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
/** portrait layout */
@media (orientation: portrait) or ((max-width: 720px) and (min-height: 431px)) {
  .hover-container {
    margin: 2rem 0 2rem 2rem;
    align-items: start;
    --font-size-main-title: clamp(2.7994rem, -8.879rem + 40cqh, 50cqi);
  }
  .banner {
    flex-direction: column;
    text-align: left;
    gap: 0.5em;
    width: calc(100% - 4rem);
  }
  .banner-row {
    display: flex;
    letter-spacing: 0.5em;
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
