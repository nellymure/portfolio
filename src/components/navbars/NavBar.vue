<template>
  <div class="navbar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<style lang="css" scoped>
.navbar {
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100vw;
  height: var(--navbar-height);
  padding: 0rem 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
@media (orientation: portrait) {
  .navbar {
    padding: 0rem 2rem;
  }
}
.left {
  display: flex;
  align-items: center;
}
.right {
  display: flex;
  align-items: center;
}
</style>
