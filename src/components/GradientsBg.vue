<script setup lang="ts">
document.addEventListener('DOMContentLoaded', () => {
  const interBubble = document.querySelector<HTMLDivElement>('.interactive')!
  let curX = 0
  let curY = 0
  let tgX = 0
  let tgY = 0

  function move() {
    curX += (tgX - curX) / 20
    curY += (tgY - curY) / 20
    interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`
    requestAnimationFrame(() => {
      move()
    })
  }

  window.addEventListener('mousemove', (event) => {
    tgX = event.clientX
    tgY = event.clientY
  })

  move()
})
</script>

<template>
  <div class="text-container">Nelly Mure</div>
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
      <div class="interactive"></div>
    </div>
  </div>
</template>

<style scoped>
.text-container {
  z-index: 100;
  width: 100vw;
  height: 100vh;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  font-size: 96px;
  color: white;
  opacity: 0.8;
  user-select: none;
  text-shadow: 1px 1px rgba(0, 0, 0, 0.1);
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
  filter: url(#goo) blur(40px);
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
      var(--color-hex-bubble-gradient-1) 20%,
      var(--color-hex-bubble-gradient-2) 15%,
      var(--color-hex-bubble-gradient-3) 40%
    )
    no-repeat;
}
.gradient-bg .interactive {
  position: absolute;
  background: radial-gradient(
      circle at center,
      var(--color-hex-bubble-gradient-1) 20%,
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
