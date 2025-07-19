<script setup lang="ts">
import { ref } from 'vue'
import router, { routes, getRouteName } from '@/router'
import { RouterLink } from 'vue-router'

const interactiveBubble = ref<HTMLDivElement>()
let curX = 0
let curY = 0
let tgX = 0
let tgY = 0

function move() {
  curX += (tgX - curX) / 20
  curY += (tgY - curY) / 20
  if (interactiveBubble.value) {
    interactiveBubble.value.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`
  }
  requestAnimationFrame(() => {
    move()
  })
}

function handleMouseMove(event: MouseEvent) {
  tgX = event.clientX
  tgY = event.clientY
}

function goToNextPage() {
  router.push({ name: getRouteName(routes.ABOUT) })
  router.go(1)
}
move()
</script>

<template>
  <router-link
    @mousemove="handleMouseMove"
    @wheel="goToNextPage"
    @touchstart="goToNextPage"
    :to="{ name: getRouteName(routes.ABOUT) }"
  >
    <div class="hover-container">
      <div class="banner">
        <div>
          nelly mure
          <span class="asterisk">✳</span>
        </div>
        <div>
          design d'espace
          <span class="asterisk">✳</span>
        </div>
        <div>
          scenographie
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

<style scoped>
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
  font-style: normal;
  font-weight: var(--font-weight-normal);
  font-size: 1.5vw;
  color: var(--color-hex-text-beige);
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
  color: var(--color-hex-text-beige);
  font-family: var(--font-family-le-murmure);
  font-style: normal;
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
