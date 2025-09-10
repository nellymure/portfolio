<template>
  <div class="navbar" id="navbar">
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
  padding: 0 var(--padding-0);
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: var(--font-family-montserrat);
  font-weight: var(--font-weight-semi-bold);
  font-size: var(--font-size-0);
  text-transform: uppercase;
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
