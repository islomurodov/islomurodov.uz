<script setup lang="ts">
useHead({
  title: 'Articles'
})

useSeoMeta({
  title: 'Articles'
})
</script>

<template>
  <main class="w-full md:py-16 py-10">
    <TheContainer>
      <TheTitle>
        Articles.
      </TheTitle>
      <ContentNavigation />
    </TheContainer>
  </main>
</template>