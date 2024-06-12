<script setup lang="ts">
const navigation = ref<{ name: string, slug: string, isLarge: boolean }[]>([
  {
    name: 'Home',
    slug: '/',
    isLarge: false
  },
  {
    name: 'About',
    slug: '/about',
    isLarge: true
  },
  {
    name: 'Projects',
    slug: '/projects',
    isLarge: true
  },
  {
    name: 'Articles',
    slug: '/articles',
    isLarge: false
  },
  {
    name: 'Contact',
    slug: '/contact',
    isLarge: true

  },
])

const isMenuOpen = ref<boolean>(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}
</script>

<template>
  <nav class="py-10 w-full z-10 relative">
    <TheContainer class="flex gap-10 items-center justify-between max-w-4xl">
      <ul
        class="fixed lg:static left-0 top-0 lg:visible duration-300 lg:opacity-100 lg:scale-100 lg:-translate-y-0 flex flex-col bg-background lg:bg-transparent py-20 lg:p-0 h-screen w-full overflow-hidden lg:w-auto lg:h-auto z-10 lg:flex-row items-center gap-10"
        :class="[isMenuOpen ? 'visible opacity-100 -translate-y-0 scale-100' : 'opacity-0 invisible -translate-y-5 scale-95']">
        <li v-for="item in navigation" :key="item.name"
          class="relative interactable lg:text-base grid place-items-center text-2xl lg:font-normal font-semibold after:content-[''] after:absolute after:w-[150%] after:scale-x-0 after:h-px after:-bottom-2 after:origin-bottom after:transition-transform after:duration-300 after:ease-out after:bg-black dark:after:bg-white hover:after:scale-x-100"
          :class="{ 'lg:hidden': !item.isLarge }">
          <NuxtLink :to="item.slug" @click="toggleMenu">
            {{ item.name }}
          </NuxtLink>
        </li>
        <li class="block lg:hidden mt-4">
          <a href="https://www.buymeacoffee.com/islom" target="_blank" class="z-10 interactable hover:opacity-90"
            rel="noopener noreferrer">
            <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me a Coffee" class="h-11" />
          </a>
        </li>
      </ul>
      <div class="flex items-center">
        <NuxtLink aria-label="Islom Murodov Home" to="/" class="whitespace-nowrap select-none text-2xl font-extrabold">
          Islomurodov
        </NuxtLink>
      </div>
      <div class="flex items-center gap-10">
        <div class="block z-20">
          <DarkToggle />
        </div>
        <a href="https://www.buymeacoffee.com/islom" target="_blank"
          class="lg:block hidden z-10 interactable hover:opacity-90" rel="noopener noreferrer">
          <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me a Coffee" class="h-10" />
        </a>
      </div>
      <button @click="toggleMenu" class="z-20 flex -order-2 items-center justify-center lg:hidden">
        <Icon v-if="!isMenuOpen" name="ph:list" class="text-3xl" />
        <Icon v-else name="ph:x" class="text-3xl" />
      </button>
    </TheContainer>
  </nav>
</template>