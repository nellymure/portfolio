<script setup lang="ts">
import { ref } from 'vue'

const isAnimated = ref(false)
const animationDuration = 800 // 8s

function animate() {
  if (isAnimated.value) {
    return
  }
  isAnimated.value = true
  setTimeout(() => {
    isAnimated.value = false
  }, animationDuration)
}
</script>

<template>
  <div class="title" :class="[isAnimated ? 'title-animated' : '']" @click="animate">
    <span>Nelly</span>
    <span class="last-name">Mure</span>
  </div>
</template>

<style lang="css" scoped>
.title {
  display: flex;
  flex-direction: row;
  font-family: var(--font-family-le-murmure);
  font-weight: var(--font-weight-normal);
  line-height: 1;
  text-transform: none;
}
.title-animated {
  animation: jello-diagonal-2 0.8s both;
}
.last-name {
  margin-top: 0.5em;
  margin-left: 0.1em;
  align-self: flex-end;
}
@keyframes jello-diagonal-2 {
  0% {
    transform: skew(0deg 0deg);
  }
  30% {
    transform: skew(-25deg -25deg);
  }
  40% {
    transform: skew(15deg, 15deg);
  }
  50% {
    transform: skew(-15deg, -15deg);
  }
  65% {
    transform: skew(5deg, 5deg);
  }
  75% {
    transform: skew(-5deg, -5deg);
  }
  100% {
    transform: skew(0deg 0deg);
  }
}
</style>
