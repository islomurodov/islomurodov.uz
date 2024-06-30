<script setup lang="ts">
import { appName } from "~/constants";

useHead({
  title: appName,
});

useSeoMeta({
  title: appName,
});
</script>

<template>
  <div>
    <VitePwaManifest />
    <NuxtLayout>
      <NuxtPage />
      <AppCursor />
      <CommandPalette />
    </NuxtLayout>
  </div>
</template>

<style>
::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-thumb {
  background-color: black;
  border-radius: 5px;
}

.dark ::-webkit-scrollbar-thumb {
  background-color: white;
}

html,
body,
#__nuxt {
  min-height: 100vh;
  margin: 0;
  padding: 0;
  font-family: "Islomurodov", sans-serif;
  overflow-x: hidden;
  transition: background 0.5s ease, color 0.5 ease;
}

html.lenis,
html.lenis body {
  height: auto;
}

.lenis.lenis-smooth {
  scroll-behavior: auto !important;
}

.lenis.lenis-smooth [data-lenis-prevent] {
  overscroll-behavior: contain;
}

.lenis.lenis-stopped {
  overflow: hidden;
}

.lenis.lenis-smooth iframe {
  pointer-events: none;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.page-enter,
.page-leave-to {
  opacity: 0;
  transform: scale(0.95) translateY(20px);
}

.page-enter-active {
  transform-origin: top center;
  animation: bounce-in 0.4s ease;
}

.page-leave-active {
  transform-origin: bottom center;
}

@keyframes bounce-in {
  0% {
    transform: scale(0.9) translateY(30px);
    opacity: 0;
  }

  50% {
    transform: scale(1.05) translateY(-10px);
    opacity: 0.7;
  }

  100% {
    transform: scale(1) translateY(0);
    opacity: 1;
  }
}
</style>
