<script setup lang="ts"></script>

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
  border: 1pt solid var(--color-hex-text-orange);
  border-left: 0;
  border-right: 0;
  width: 100%;
}
.left {
  flex-shrink: 0;
  width: 30px;
  border: 1pt solid var(--color-hex-text-orange);
  border-radius: 30px 0 0 30px;
  border-right: 0;
}
.right {
  flex-shrink: 0;
  width: 30px;
  border: 1pt solid var(--color-hex-text-orange);
  border-radius: 0 30px 30px 0;
  border-left: 0;
}
</style>
