<script setup lang="ts">
import type { RouteLocation } from "vue-router/auto";

const open = ref(false);

const keys = useMagicKeys();
const AltK = keys["Alt+K"];

function handleOpenChange() {
  open.value = !open.value;
}

const navigation = ref<
  {
    name: string;
    slug: RouteLocation;
  }[]
>([
  {
    name: "Home",
    slug: "/",
  },
  {
    name: "About",
    slug: "/about",
  },
  {
    name: "Projects",
    slug: "/projects",
  },
  {
    name: "Resume",
    slug: "/resume",
  },
  {
    name: "Contact",
    slug: "/contact",
  },
]);

const socials = ref<
  {
    name: string;
    url: string;
    icon: string;
  }[]
>([
  {
    name: "Telegram",
    url: "https://t.me/islom_here",
    icon: "ph:telegram-logo-duotone",
  },
  {
    name: "GitHub",
    url: "https://github.com/islomurodov",
    icon: "ph:github-logo-duotone",
  },
  {
    name: "YouTube",
    url: "https://youtube.com/@islomurodov",
    icon: "ph:youtube-logo-duotone",
  },
  {
    name: "X (Twitter)",
    url: "https://x.com/islomurodov",
    icon: "ph:x-logo-duotone",
  },
  {
    name: "Instagram",
    url: "https://instagram.com/islomurodov",
    icon: "ph:instagram-logo-duotone",
  },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/islomurodov",
    icon: "ph:linkedin-logo-duotone",
  },
]);

function toggleDark() {
  const color = useColorMode();

  useHead({
    meta: [
      {
        id: "theme-color",
        name: "theme-color",
        content: () => (color.value === "dark" ? "#020a13" : "#fffdfc"),
      },
    ],
  });

  color.preference = color.value === "dark" ? "light" : "dark";
}

watch(AltK, (v) => {
  if (v) handleOpenChange();
});
</script>

<template>
  <div>
    <CommandDialog :open="open" @update:open="handleOpenChange">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Navigation">
          <NuxtLink :to="nav.slug" v-for="nav in navigation" :key="nav.name">
            <CommandItem :value="nav.name" class="flex items-center gap-3 interactable">
              <Icon name="ph:arrow-bend-up-right-bold" />
              {{ nav.name }}
            </CommandItem>
          </NuxtLink>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Socials">
          <a :href="social.url" target="_blank" v-for="social in socials" :key="social.name">
            <CommandItem :value="social.name" class="flex items-center gap-3 interactable">
              <Icon :name="social.icon" />
              {{ social.name }}
            </CommandItem>
          </a>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Look & Feel">
          <CommandItem value="toggle theme" class="flex items-center gap-3 interactable" @click="toggleDark">
            <Icon name="ph:circle-half-duotone" />
            Toggle theme
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
    <TheContainer class="mb-5 hidden lg:block">
      <p class="text-base text-muted-foreground text-center">
        Press
        <kbd @click="open = true"
          class="interactable cursor-pointer min-h-[30px] min-w-[30px] inline-flex justify-center items-center py-1 px-1.5 bg-white border border-gray-200 font-mono text-sm text-gray-800 rounded-md dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200">
          Alt + K
        </kbd>
        to open up command pallette menu.
      </p>
    </TheContainer>
  </div>
</template>
