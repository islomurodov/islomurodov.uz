<script setup lang="ts">
const { isOutside } = useMouseInElement();
const cursorDot = ref<HTMLDivElement | null>(null);
const cursorOut = ref<HTMLDivElement | null>(null);
const x = ref<number>();
const y = ref<number>();
const interacting = ref<any>();

function updateCursor(event: MouseEvent) {
  x.value = event.clientX;
  y.value = event.clientY;

  const keyframes = {
    top: `${y.value}px`,
    left: `${x.value}px`,
  };

  cursorOut.value?.animate(keyframes, { duration: 500, fill: "forwards" });
}

onMounted(() =>
  window.addEventListener("mousemove", (event: any) => {
    const interactable = event.target.closest(".interactable");
    interacting.value = interactable !== null;

    updateCursor(event);
  })
);

onUnmounted(() =>
  window.removeEventListener("mousemove", (event: MouseEvent) =>
    updateCursor(event)
  )
);
</script>

<template>
  <div class="lg:block hidden" v-show="!isOutside">
    <div
      ref="cursorDot"
      :style="{ top: `${y}px`, left: `${x}px` }"
      class="cursor__dot size-3 fixed pointer-events-none top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black dark:bg-white"
    ></div>
    <div
      ref="cursorOut"
      class="cursor__outline fixed pointer-events-none top-0 left-0 duration-200 -translate-x-1/2 -translate-y-1/2 dark:border-white border-black rounded-full border-opacity-50 dark:border-opacity-50 border-2"
      :class="[interacting ? 'size-5' : 'size-14']"
    ></div>
  </div>
</template>

<style scoped>
.cursor__dot,
.cursor__outline {
  z-index: 100;
}
</style>
