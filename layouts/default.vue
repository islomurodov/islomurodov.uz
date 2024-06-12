<template>
  <main>
    <AppNavbar />
    <slot />
    <TheFooter />
  </main>
</template>

<style scoped>
main::before {
  background: #1b1b1b;
  content: '';
  height: 100vh;
  width: 100vw;
  background-image: linear-gradient(currentColor 1px, transparent 1px),
    linear-gradient(to right, currentColor 1px, transparent 1px);
  background-size: 94px 90px;
  color: rgb(113 113 113 / 7%);
  position: fixed;
  z-index: 1;
  pointer-events: none;
  background-color: transparent;
  transition: all 0.5s linear;
  top: 0;
  left: 0;
}

main::after {
  content: "";
  background-image: radial-gradient(at 40% 40%, rgb(30, 144, 255) 0px, transparent 50%), radial-gradient(at 90% 10%, rgb(255, 105, 180) 0px, transparent 50%), radial-gradient(at 50% 95%, rgb(0, 255, 255) 0px, transparent 50%), radial-gradient(at 20% 30%, rgb(50, 205, 50) 0px, transparent 50%), radial-gradient(at 90% 90%, rgb(255, 255, 0) 0px, transparent 50%), radial-gradient(at 33% 50%, rgb(255, 69, 0) 0px, transparent 50%), radial-gradient(at 79% 53%, rgb(128, 0, 128) 0px, transparent 50%);
  position: fixed;
  width: 100%;
  height: 100%;
  filter: blur(100px) saturate(100%);
  top: 0px;
  opacity: 0.1;
  transform: translateZ(0px);
  pointer-events: none;
  z-index: 0;
}
</style>