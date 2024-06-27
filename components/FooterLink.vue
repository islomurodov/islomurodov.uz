<script setup lang="ts">
import type { RouteLocationRaw } from "vue-router";

defineProps<{
  to: RouteLocationRaw;
}>();
</script>

<template>
  <NuxtLink
    :to="to"
    class="inline-flex gap-2 text-base interactable underline my-10 text-primary"
  >
    <Icon name="ph:arrow-bend-down-right-duotone" class="text-xl" />
    <slot />
  </NuxtLink>
</template>
