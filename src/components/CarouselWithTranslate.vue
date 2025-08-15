<script lang="ts" setup>
import { ref, reactive, onMounted, useSlots, type VNode } from 'vue'

const props = defineProps({
  enableArrows: {
    type: Boolean,
    default: false,
  },
  intervalTimer: {
    type: Number,
  },
})

const inner = ref<HTMLElement | null>()
const innerStyles = reactive<Record<string, string>>({})
const transitioning = ref(false)
const slots = useSlots()
const cards = ref<VNode[]>([])

function resetTranslate() {
  innerStyles.transition = 'none'
  innerStyles.transform = `translateX(-100%)`
}

function afterTransition(callback: () => void) {
  const listener = () => {
    callback()
    inner.value?.removeEventListener('transitionend', listener)
  }
  inner.value?.addEventListener('transitionend', listener)
}

function next() {
  if (transitioning.value) {
    return
  }
  transitioning.value = true
  innerStyles.transition = 'transform 0.4s'
  innerStyles.transform = `translateX(-200%)`
  afterTransition(() => {
    const card = cards.value.shift()
    if (!card) throw new Error('No card to shift')
    cards.value.push(card)
    resetTranslate()
    transitioning.value = false
  })
}

function prev() {
  if (transitioning.value) {
    return
  }
  transitioning.value = true
  innerStyles.transition = 'transform 0.4s'
  innerStyles.transform = `translateX(0%)`
  afterTransition(() => {
    const card = cards.value.pop()
    if (!card) {
      throw new Error('No card to pop')
    }
    cards.value.unshift(card)
    resetTranslate()
    transitioning.value = false
  })
}

if (props.intervalTimer) {
  setInterval(next, props.intervalTimer)
}

onMounted(() => {
  cards.value = slots.default ? slots.default() : []
  const card = cards.value.pop()
  if (!card) {
    throw new Error('No card to pop')
  }
  cards.value.unshift(card)
  resetTranslate()
})
</script>

<template>
  <div class="carousel-container">
    <div v-if="enableArrows" class="nav-btn" @click="prev">
      <img src="@/assets/images/common/chevron-gauche.png" />
    </div>
    <div class="carousel">
      <div class="inner" ref="inner" :style="innerStyles">
        <div class="card" v-for="(card, idx) in cards" :key="idx">
          <component :is="card" />
        </div>
      </div>
    </div>
    <div v-if="enableArrows" class="nav-btn" @click="next">
      <img src="@/assets/images/common/chevron-droit.png" />
    </div>
  </div>
</template>

<style scoped>
.carousel-container {
  display: flex;
}
.carousel-container .nav-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
}
.carousel-container .nav-btn img {
  width: 45%;
}
.carousel {
  width: 100%;
  overflow: hidden;
}
.inner {
  display: flex;
}
.card {
  min-width: 100%;
  margin: auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
@media (orientation: portrait) {
  .carousel-container .nav-btn {
    width: 10vw;
  }
}
</style>
