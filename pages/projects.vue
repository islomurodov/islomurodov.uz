<script setup lang="ts">
definePageMeta({
  title: "Projects",
});

const projects = ref<
  {
    title: string;
    about: string;
    imageUrl: string;
    link: string;
    github: string;
    technologies: string[];
  }[]
>([
  {
    title: "Imovi.uz",
    about: "Totally free cinema app. Just visit and watch.",
    imageUrl: "https://i.ibb.co/drb6b41/image-2024-06-27-10-30-25.png",
    link: "https://www.imovi.uz/",
    github: "https://github.com/islomurodov/imovi",
    technologies: ["Vue", "Nuxt", "Supabase"],
  },
  {
    title: "Pomodoro App",
    about: "Pomodoro app organize your work efficiently.",
    imageUrl: "https://i.ibb.co/GnVVVXy/Screenshot-26.png",
    link: "https://pomodoro-app-islom.netlify.app/",
    github: "https://github.com/islomurodov/pomodoro-app",
    technologies: ["Vue", "Pinia"],
  },
  {
    title: "Movie App v2",
    about: "Movie, TV Shows or People browsing web app.",
    imageUrl: "https://i.ibb.co/8895CzV/Screenshot-27.png",
    link: "https://movie-app-v2-gray.vercel.app/",
    github: "https://github.com/islomurodov/movie-app-v2",
    technologies: ["Vue", "Nuxt", "TMDB API"],
  },
  {
    title: "Todo App v2",
    about: "List your things that you do daily and control.",
    imageUrl: "https://i.ibb.co/RYgzqrF/Screenshot-28.png",
    link: "https://todo-islom.netlify.app/",
    github: "https://github.com/islomurodov/todo-app-v2",
    technologies: ["Vue"],
  },
  {
    title: "Google Sign-up",
    about: "Just Google Sign-Up page clone.",
    imageUrl: "https://i.ibb.co/SJpnszz/Screenshot-29.png",
    link: "https://google-sign-up.netlify.app/",
    github: "",
    technologies: ["React"],
  },
  {
    title: "GitHub user browser",
    about: "Browse users profile from GitHub.",
    imageUrl: "https://i.ibb.co/n3t23HQ/Screenshot-31.png",
    link: "https://github-search-app-islom.vercel.app/",
    github: "https://github.com/islomurodov/github-user-search-app",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Smart Home",
    about: "Landing page called 'Smart Home'",
    imageUrl: "https://i.ibb.co/Wngjsg4/Screenshot-30.png",
    link: "https://lighthearted-kulfi-0dff34.netlify.app/",
    github: "https://github.com/islomurodov/smart-home-landing-page",
    technologies: ["HTML", "CSS", "TailwindCSS", "jQuery"],
  },
  {
    title: "Arxiv.uz",
    about:
      "Archiving helpful and useful data such as e-books or articles and etc.",
    imageUrl: "https://i.ibb.co/BBfP6Fn/Screenshot-32.png",
    link: "https://www.arxiv.uz/",
    github: "",
    technologies: ["Vue", "CSS", "Bootstrap"],
  },
]);
</script>

<template>
  <div class="w-full md:py-16 py-10">
    <TheContainer>
      <TheTitle />
      <ul class="grid sm:grid-cols-2 mt-5 gap-3 md:gap-4 w-full max-w-4xl">
        <a target="_blank" v-for="project in projects" :key="project.title" :href="project.link">

          <Head>
            <Link rel="prefetch" :href="project.imageUrl" />
          </Head>
          <li class="relative group overflow-hidden rounded-xl interactable cursor-pointer shadow-md">
            <div>
              <NuxtImg loading="eager" :src="project.imageUrl" :alt="project.title" />
            </div>
            <div
              class="absolute opacity-0 duration-300 group-hover:opacity-100 bottom-0 flex items-end left-0 w-full h-full pb-4 sm:pb-8 bg-gradient-to-b from-transparent from-0% to-90% to-black">
              <div class="container space-y-1 duration-300 translate-y-3 group-hover:translate-y-0">
                <h3 class="text-xl sm:text-xl lg:text-3xl font-bold text-white">
                  {{ project.title }}
                </h3>
                <p class="text-gray-300 text-xs sm:text-sm">
                  {{ project.about }}
                </p>
                <div class="py-1"></div>
                <ul class="flex flex-wrap gap-4">
                  <li v-for="technology in project.technologies" :key="technology"
                    class="rounded-xl px-3 py-1 text-xs bg-gray-700 text-white">
                    {{ technology }}
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </a>
      </ul>
      <FooterLink to="/resume">Lets Go To My Resume</FooterLink>
    </TheContainer>
  </div>
</template>
