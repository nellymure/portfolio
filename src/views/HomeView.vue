<script setup lang="ts">
import { ref } from 'vue'
import router, { routes } from '@/router'
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
  router.push({ name: routes.ABOUT.name })
  router.go(1)
}
move()
</script>

<template>
  <router-link
    @mousemove="handleMouseMove"
    @wheel="goToNextPage"
    @touchstart="goToNextPage"
    :to="{ name: routes.ABOUT.name }"
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
    <div class="gradient-bg">
      <svg xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <div class="gradients-container">
        <div class="g1 bubble-bg"></div>
        <div class="g2 bubble-bg"></div>
        <div class="g3 bubble-bg"></div>
        <div class="g4 bubble-bg"></div>
        <div class="g5 bubble-bg"></div>
        <div class="interactive" ref="interactiveBubble"></div>
      </div>
    </div>
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
  line-height: 45vw;
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
    line-height: 25vh;
    transform: rotate(-90deg) translateY(-0.15em) translateX(-1.02em);
    transform-origin: top left;
  }
}
@keyframes moveInCircle {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes moveVertical {
  0% {
    transform: translateY(-50%);
  }
  50% {
    transform: translateY(50%);
  }
  100% {
    transform: translateY(-50%);
  }
}
@keyframes moveHorizontal {
  0% {
    transform: translateX(-50%) translateY(-10%);
  }
  50% {
    transform: translateX(50%) translateY(10%);
  }
  100% {
    transform: translateX(-50%) translateY(-10%);
  }
}
.gradient-bg {
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  background: linear-gradient(
    40deg,
    var(--color-hex-bubble-bg-gradient-1),
    var(--color-hex-bubble-bg-gradient-2)
  );
  top: 0;
  left: 0;
}
.gradient-bg svg {
  position: fixed;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
}
.gradient-bg .gradients-container {
  filter: url(#goo) blur(1.8vmax);
  width: 100%;
  height: 100%;
}
.gradient-bg .g1 {
  position: absolute;
  mix-blend-mode: var(--blending);
  width: var(--circle-size);
  height: var(--circle-size);
  top: calc(50% - var(--circle-size) / 2);
  left: calc(50% - var(--circle-size) / 2);
  transform-origin: center center;
  animation: moveVertical 30s ease infinite;
  opacity: 0.9;
}
.gradient-bg .g2 {
  position: absolute;
  mix-blend-mode: var(--blending);
  width: var(--circle-size);
  height: var(--circle-size);
  top: calc(50% - var(--circle-size) / 2);
  left: calc(50% - var(--circle-size) / 2);
  transform-origin: calc(50% - 400px);
  animation: moveInCircle 20s reverse infinite;
  opacity: 0.9;
}
.gradient-bg .g3 {
  position: absolute;
  mix-blend-mode: var(--blending);
  width: var(--circle-size);
  height: var(--circle-size);
  top: calc(50% - var(--circle-size) / 2 + 200px);
  left: calc(50% - var(--circle-size) / 2 - 500px);
  transform-origin: calc(50% + 400px);
  animation: moveInCircle 20s ease infinite;
  opacity: 0.9;
}
.gradient-bg .g4 {
  position: absolute;
  mix-blend-mode: var(--blending);
  width: var(--circle-size);
  height: var(--circle-size);
  top: calc(50% - var(--circle-size) / 2);
  left: calc(50% - var(--circle-size) / 2);
  transform-origin: calc(50% - 200px);
  animation: moveHorizontal 40s ease infinite;
  opacity: 0.7;
}
.gradient-bg .g5 {
  position: absolute;
  mix-blend-mode: var(--blending);
  width: calc(var(--circle-size) * 2);
  height: calc(var(--circle-size) * 2);
  top: calc(50% - var(--circle-size));
  left: calc(50% - var(--circle-size));
  transform-origin: calc(50% - 800px) calc(50% + 200px);
  animation: moveHorizontal 40s ease infinite;
  opacity: 0.9;
}
.bubble-bg {
  background: radial-gradient(
      circle at center,
      var(--color-hex-bubble-gradient-1) 30%,
      var(--color-hex-bubble-gradient-2) 15%,
      var(--color-hex-bubble-gradient-3) 40%
    )
    no-repeat;
}
.gradient-bg .interactive {
  position: absolute;
  background: radial-gradient(
      circle at center,
      var(--color-hex-bubble-gradient-1) 30%,
      var(--color-hex-bubble-gradient-2),
      var(--color-hex-bubble-gradient-3) 50%
    )
    no-repeat;
  mix-blend-mode: var(--blending);
  width: 100%;
  height: 100%;
  top: -50%;
  left: -50%;
  opacity: 1;
}
</style>
