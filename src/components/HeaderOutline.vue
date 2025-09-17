<template>
  <div class="outline">
    <div class="left"></div>
    <div class="content">
      <slot></slot>
    </div>
    <div class="right"></div>
  </div>
</template>

<style lang="css" scoped>
.outline {
  display: flex;
  flex-direction: row;
  font-family: var(--font-family-antic-didone);
  font-weight: var(--font-weight-light);
  font-size: 1.783rem;
  color: var(--color-hex-orange);
  --border-size: 0.1em;
}
.content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: auto;
  border: var(--border-size) solid var(--color-hex-orange);
  border-left: 0;
  border-right: 0;
}
.left {
  width: 2em;
  transform: translateX(52%);
  border: var(--border-size) solid var(--color-hex-orange);
  border-right: 0;
  border-radius: 50% 0 0 50%;
}
.right {
  width: 2em;
  transform: translateX(-52%);
  border: var(--border-size) solid var(--color-hex-orange);
  border-left: 0;
  border-radius: 0 50% 50% 0;
}
</style>
