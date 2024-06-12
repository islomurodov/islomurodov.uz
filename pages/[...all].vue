<script setup lang="ts">
definePageMeta({
  layout: 'error'
})

const redirectTime = ref<number>(30)

useHead({
  title: '404'
})

onMounted(() => {
  setInterval(() => {
    redirectTime.value--

    if (redirectTime.value === 0) {
      navigateTo('/')
    }
  }, 1000)
})
onUnmounted(() => {
  redirectTime.value = 30;
})
</script>

<template>
  <div class="h-screen overflow-hidden flex space-y-10 items-center justify-center flex-col">
    <div class="flex items-center">
      <h1 class="font-medium text-3xl h-14 flex items-center border-r-2 pr-6 mr-6 align-top">404</h1>
      <div>
        <h2>
          This page could not be found.
        </h2>
      </div>
    </div>
    <div>
      <Button @click="navigateTo('/')" variant="outline" class="bg-transparent">Go home ({{
        redirectTime.toString().padStart(2, '0') }})</Button>
    </div>
  </div>
</template>