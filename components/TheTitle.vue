<script setup lang="ts">
import { appName } from "~/constants";

const pageTitle = ref("");

const route = useRoute();

watchEffect(() => {
  pageTitle.value = route.meta.title || appName;
});
</script>

<template>
  <div>
    <h2 class="text-4xl sm:text-5xl font-black">
      {{ pageTitle + "." }}
    </h2>
  </div>
</template>
