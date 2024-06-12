<script setup lang="ts">
const color = useColorMode()

useHead({
  meta: [{
    id: 'theme-color',
    name: 'theme-color',
    content: () => color.value === 'dark' ? '#020a13' : '#fffdfc'
  }]
})

function toggleDark() {
  color.preference = color.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <button @click="toggleDark" class="!outline-none text-3xl flex items-center justify-center interactable">
    <Icon v-if="color.value === 'dark'" name="ph:sun-duotone" />
    <Icon v-else name="ph:moon-duotone" />
  </button>
</template>