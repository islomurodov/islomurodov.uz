<script setup lang="ts">
const route = useRoute();

const navigation = ref<{ name: string; slug: string; isLarge: boolean }[]>([
  {
    name: "Home",
    slug: "/",
    isLarge: false,
  },
  {
    name: "About",
    slug: "/about",
    isLarge: true,
  },
  {
    name: "Resume",
    slug: "/resume",
    isLarge: false,
  },
  {
    name: "Projects",
    slug: "/projects",
    isLarge: true,
  },
  {
    name: "Contact",
    slug: "/contact",
    isLarge: true,
  },
]);

const isMenuOpen = ref<boolean>(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}
</script>

<template>
  <nav class="py-10 lg:py-16 w-full z-10 relative">
    <TheContainer class="flex gap-10 items-center justify-between max-w-4xl">
      <ul
        class="fixed lg:static left-0 -top-8 lg:visible overflow-y-auto lg:overflow-hidden overflow-x-hidden duration-300 lg:opacity-100 lg:scale-100 lg:-translate-y-0 flex flex-col bg-background lg:bg-transparent py-20 lg:p-0 h-screen w-full lg:w-auto lg:h-auto z-10 lg:flex-row items-center gap-10"
        :class="[
          isMenuOpen
            ? 'visible opacity-100 -translate-y-0 scale-100'
            : 'opacity-0 invisible -translate-y-5 scale-95',
        ]"
      >
        <li
          v-for="item in navigation"
          :key="item.name"
          v-show="item.slug !== route.fullPath"
          class="relative interactable lg:text-base grid lg:hover:underline place-items-center text-2xl lg:font-medium font-semibold after:content-[''] after:absolute after:w-[150%] after:scale-x-0 after:h-px after:-bottom-2 after:origin-bottom after:transition-transform after:duration-300 after:ease-out after:bg-black dark:after:bg-white hover:after:scale-x-100"
          :class="{ 'lg:hidden': !item.isLarge }"
        >
          <NuxtLink :to="item.slug" @click="toggleMenu">
            {{ item.name }}
          </NuxtLink>
        </li>
        <li class="grid place-items-center lg:hidden space-y-4 mt-4">
          <a
            href="https://www.buymeacoffee.com/islom"
            target="_blank"
            class="z-10 interactable hover:opacity-90"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
              alt="Buy Me a Coffee"
              class="h-11"
            />
          </a>
          <a
            href="https://github.com/sponsors/islomurodov"
            target="_blank"
            class="interactable z-10"
          >
            <Button class="text-base gap-2">
              <Icon name="ph:hand-heart-duotone" class="text-2xl" />
              Support me
            </Button>
          </a>
        </li>
      </ul>
      <div class="flex items-center">
        <NuxtLink
          aria-label="Islom Murodov Home"
          to="/"
          class="absolute interactable transition-transform duration-300 ease-linear hover:scale-105 active:scale-100 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 whitespace-nowrap select-none text-2xl font-extrabold"
        >
          Islomurodov
        </NuxtLink>
      </div>
      <div class="flex items-center gap-10">
        <div
          class="block z-20"
          :class="{ 'fixed top-10 right-10': isMenuOpen }"
        >
          <DarkToggle />
        </div>
        <a
          href="https://www.buymeacoffee.com/islom"
          target="_blank"
          class="lg:block hidden z-10 interactable hover:opacity-90"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
            alt="Buy Me a Coffee"
            class="h-10"
          />
        </a>
      </div>
      <button
        @click="toggleMenu"
        class="z-20 flex -order-2 items-center justify-center lg:hidden"
        :class="{ 'fixed top-10 left-10': isMenuOpen }"
      >
        <Icon v-if="!isMenuOpen" name="ph:list" class="text-3xl" />
        <Icon v-else name="ph:x" class="text-3xl" />
      </button>
    </TheContainer>
  </nav>
</template>
