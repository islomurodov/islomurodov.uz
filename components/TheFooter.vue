<script setup lang="ts">
const navigation = ref<{ url: string; icon: string }[]>([
  {
    url: "https://t.me/islom_here",
    icon: "ph:telegram-logo-duotone",
  },
  {
    url: "https://github.com/islomurodov",
    icon: "ph:github-logo-duotone",
  },
  {
    url: "https://youtube.com/@islomurodov",
    icon: "ph:youtube-logo-duotone",
  },
  {
    url: "https://x.com/islomurodov",
    icon: "ph:x-logo-duotone",
  },
  {
    url: "https://instagram.com/islomurodov",
    icon: "ph:instagram-logo-duotone",
  },
  {
    url: "https://www.linkedin.com/in/islomurodov",
    icon: "ph:linkedin-logo-duotone",
  },
]);
</script>

<template>
  <footer
    class="fixed bottom-0 left-0 lg:static w-full bg-background lg:bg-transparent z-10 lg:mb-10"
  >
    <div class="lg:hidden">
      <Separator />
    </div>
    <TheContainer class="p-4">
      <ul
        class="flex w-full lg:justify-start justify-between md:justify-around gap-x-8 sm:gap-x-10 gap-y-4 lg:px-4"
      >
        <li v-for="(item, i) in navigation" :key="i" class="interactable">
          <a :href="item.url" target="_blank">
            <Icon
              :name="item.icon"
              class="text-2xl hover:scale-125 lg:hover:scale-150 duration-300"
            />
          </a>
        </li>
      </ul>
    </TheContainer>
  </footer>
</template>
