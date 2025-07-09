<script setup lang="ts">
defineProps({
  outlineWidth: {
    type: String,
    default: '0.3em',
  },
})
</script>

<template>
  <div class="container">
    <div class="left"></div>
    <div class="content">
      <slot name="content"></slot>
    </div>
    <div class="right"></div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  font-family: var(--font-family-adobe-song);
  font-style: normal;
  font-weight: var(--font-weight-light);
  font-size: 21.4pt;
  color: var(--color-hex-text-orange);
}
.content {
  display: flex;
  justify-content: center;
  flex-basis: auto;
  border: v-bind(outlineWidth) solid var(--color-hex-text-orange);
  border-left: 0;
  border-right: 0;
  width: 100%;
}
.left {
  width: 20%;
  transform: translateX(52%);
  border: v-bind(outlineWidth) solid var(--color-hex-text-orange);
  border-right: 0;
  border-radius: 50% 0 0 50%;
}
.right {
  width: 20%;
  transform: translateX(-52%);
  border: v-bind(outlineWidth) solid var(--color-hex-text-orange);
  border-left: 0;
  border-radius: 0 50% 50% 0;
}
</style>
