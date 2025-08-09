<script setup lang="ts">
import FadeInViewport from '@/components/FadeInViewport.vue'

defineProps({
  id: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="text-part">
    <div>
      <h3>{{ id }}</h3>
      <h1>
        <slot name="title"></slot>
      </h1>
    </div>
    <p class="text-indent">
      <slot name="text"></slot>
    </p>
  </div>
  <FadeInViewport delay="0.5s">
    <slot name="image"></slot>
  </FadeInViewport>
</template>

<style scoped>
.text-part {
  max-width: 30vw;
  margin-right: var(--half-padding-x);
}
h1 {
  font-size: 7em;
  font-family: var(--font-family-adobe-song);
  font-weight: var(--font-weight-light);
  line-height: 1;
  text-align: left;
  margin-bottom: 1em;
}
</style>
