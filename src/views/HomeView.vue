<script setup lang="ts">
import router, { routes, getRouteName } from '@/router'
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const nextPage = routes.HUB

function goToNextPage() {
  router.push({ name: getRouteName(nextPage) })
  router.go(1)
}
</script>

<template>
  <router-link
    @wheel="goToNextPage"
    @touchstart="goToNextPage"
    :to="{ name: getRouteName(nextPage) }"
  >
    <div class="hover-container">
      <div class="banner">
        <div>
          nelly mure
          <span class="asterisk">✳</span>
        </div>
        <div>
          {{ t('spatial design') }}
          <span class="asterisk">✳</span>
        </div>
        <div>
          {{ t('scenography') }}
          <span class="sd-asterisk">✳</span>
        </div>
      </div>
      <div class="main-title-container">
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
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  user-select: none;
  overflow: hidden;
}
.banner {
  display: flex;
  height: 20vh;
  margin-top: 0.46em; /* 0.92em / 2 */
  margin-left: 0.92em;
  letter-spacing: 0.92em;
  flex-direction: row;
  row-gap: 0.5em;
  text-align: center;
  font-family: var(--font-family-reem-kufi);
  font-weight: var(--font-weight-normal);
  font-size: 1.5vw;
  color: var(--color-hex-beige-light);
  text-transform: uppercase;
}
.asterisk {
  margin-right: 1em;
}
.sd-asterisk {
  display: none;
}
.main-title-container {
  width: 100vw;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}
.main-title {
  color: var(--color-hex-beige-light);
  font-family: var(--font-family-le-murmure);
  font-weight: var(--font-weight-normal);
  font-size: 45vw;
  line-height: 1;
}
.gradient-bg {
  background-image: url('@/assets/images/home/gradient-bg.png');
  background-size: 200% 200%;
  animation: movingBgGradient 20s linear infinite;
  height: 100vh;
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
@media (min-aspect-ratio: 21/9) {
  .main-title-container {
    margin-top: 15vh;
  }
}
@media (orientation: portrait) {
  .hover-container {
    width: calc(100vw - 4rem);
    height: calc(100vh - 4rem);
    margin: 2rem;
    align-items: start;
  }
  .banner {
    margin: 0;
    flex-direction: column;
    text-align: left;
    font-size: 4.3vw;
    letter-spacing: 0.5em;
  }
  .sd-asterisk {
    display: inline;
  }
  .main-title-container {
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
  }
  .main-title {
    position: absolute;
    bottom: 0;
    font-size: 25vh;
    line-height: 1;
    transform: rotate(-90deg) translateY(-0.15em) translateX(-1.02em);
    transform-origin: top left;
  }
  .gradient-bg {
    background-size: 300% 300%;
  }
}
</style>
