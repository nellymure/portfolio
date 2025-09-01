<script lang="ts" setup>
import { ref, reactive, onMounted, useSlots, type VNode } from 'vue'

const props = defineProps({
  intervalTimer: {
    type: Number,
    required: true,
  },
  smoothPercent: {
    type: Number,
    default: 0.5,
  },
})

const inner = ref<HTMLElement | null>()
const innerStyles = reactive<Record<string, string>>({})
const transitioning = ref(false)
const slots = useSlots()
const cards = ref<VNode[]>([])
const cardFadingTime = ref(`${props.intervalTimer! * props.smoothPercent}ms`)
let cardIdx = 0

function next() {
  if (transitioning.value) {
    return
  }
  transitioning.value = true
  cardIdx = cardIdx === cards.value.length - 1 ? 0 : cardIdx + 1
  const card = cards.value.shift()
  if (!card) throw new Error('No card to shift')
  cards.value.unshift(card)
  transitioning.value = false
}

if (props.intervalTimer) {
  setInterval(next, props.intervalTimer)
}

function getCardClasses(idx: number): string {
  return idx == cardIdx ? 'card-fade' : 'card-fade hidden'
}

onMounted(() => {
  cards.value = slots.default ? slots.default() : []
  const card = cards.value.pop()
  if (!card) {
    throw new Error('No card to pop')
  }
  cards.value.unshift(card)
})
</script>

<template>
  <div class="carousel">
    <div class="inner" ref="inner" :style="innerStyles">
      <div v-for="(card, idx) in cards" :key="idx" :class="getCardClasses(idx)">
        <component :is="card" />
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.carousel {
  width: 100%;
  overflow: hidden;
}
.inner {
  display: grid;
  width: 100%;
}
.card-fade {
  grid-area: 1 / 1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  opacity: 1;
}
.hidden {
  animation: fade-out v-bind(cardFadingTime) linear forwards;
}
@keyframes fade-out {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
