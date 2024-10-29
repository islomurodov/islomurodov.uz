<script setup lang="ts">
const navigation = ref<{ url: string; icon: string, title: string }[]>([
  {
    url: "https://t.me/islom_power",
    icon: "ph:telegram-logo-duotone",
    title: 'Telegram'
  },
  {
    url: "https://github.com/islomurodov",
    icon: "ph:github-logo-duotone",
    title: 'GitHub'
  },
  {
    url: "https://youtube.com/@islomurodov",
    icon: "ph:youtube-logo-duotone",
    title: 'YouTube'
  },
  {
    url: "https://x.com/islomurodov",
    icon: "ph:x-logo-duotone",
    title: 'X (Twitter)'
  },
  {
    url: "https://instagram.com/islomurodov",
    icon: "ph:instagram-logo-duotone",
    title: 'Instagram'
  },
  {
    url: "https://www.linkedin.com/in/islomurodov",
    icon: "ph:linkedin-logo-duotone",
    title: 'Linkedin'
  },
]);
</script>

<template>
  <footer class="fixed bottom-0 left-0 lg:static w-full bg-background lg:bg-transparent z-10 lg:mb-10">
    <div class="lg:hidden">
      <Separator />
    </div>
    <TheContainer class="p-4">
      <ul class="flex w-full lg:justify-start justify-between md:justify-around gap-x-8 sm:gap-x-10 gap-y-4 lg:px-4">
        <li v-for="(item, i) in navigation" :key="i" class="interactable" :title="item.title">
          <a :href="item.url" target="_blank">
            <Icon :name="item.icon" class="text-2xl hover:scale-125 lg:hover:scale-150 duration-300" />
          </a><br>
          <span class="sr-only">{{ item.title }}</span>
        </li>
      </ul>
    </TheContainer>
  </footer>
</template>
