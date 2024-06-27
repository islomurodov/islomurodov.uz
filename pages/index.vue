<script setup lang="ts">
definePageMeta({
  title: "Home",
});
</script>

<template>
  <div class="w-full md:py-16 py-10">
    <TheContainer>
      <article class="flex flex-col gap-y-4">
        <h1
          class="glitch text-balance font-medium relative uppercase tracking-widest"
          data-text="I'M ISLOM MURODOV"
        >
          I'M ISLOM MURODOV
        </h1>
        <p class="text-ring leading-8">
          Your friendly neighborhood frontend developer and JavaScript engineer.
          I spend my days (often nights) to exploring my potential (how much can
          I handle)
          <NuxtLink
            to="/projects"
            class="interactable font-bold dark:text-white text-black hover:opacity-90 underline uppercase"
          >
            PROJECTS
          </NuxtLink>
          and playing some
          <a
            class="interactable font-bold dark:text-white text-black hover:opacity-90 underline uppercase"
            href="https://iccup.com/dota/gamingprofile/wodota_islom"
            target="_blank"
            >Dota 1</a
          >,
        </p>
        <p class="text-ring leading-8">
          Laptops and keyboards enthusiast. I tread the path of minimalism,
          finding beauty in simplicity and order. Anyways you can
          <NuxtLink
            to="/contact"
            class="interactable font-bold dark:text-white text-black underline hover:opacity-90 uppercase"
            >CONTACT ME</NuxtLink
          >
        </p>
      </article>
      <FooterLink to="/about">See More About Me </FooterLink>
    </TheContainer>
  </div>
</template>

<style scoped>
.glitch {
  font-size: 2.275em;
}

.glitch:before,
.glitch:after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.glitch::before {
  left: 2px;
  text-shadow: -1px 0 #00ffff;
  animation: noise-anim-2 15s infinite linear alternate-reverse;
}

.glitch::after {
  left: -2px;
  text-shadow: 3px 0 #ff69b4;
  animation: noise-anim 2s infinite linear alternate-reverse;
}

@keyframes noise-anim {
  0% {
    clip-path: inset(29% 0 25% 0);
  }

  5% {
    clip-path: inset(9% 0 38% 0);
  }

  10% {
    clip-path: inset(96% 0 1% 0);
  }

  15% {
    clip-path: inset(75% 0 23% 0);
  }

  20% {
    clip-path: inset(46% 0 50% 0);
  }

  25% {
    clip-path: inset(3% 0 46% 0);
  }

  30% {
    clip-path: inset(82% 0 2% 0);
  }

  35% {
    clip-path: inset(88% 0 1% 0);
  }

  40% {
    clip-path: inset(91% 0 8% 0);
  }

  45% {
    clip-path: inset(96% 0 2% 0);
  }

  50% {
    clip-path: inset(59% 0 38% 0);
  }

  55% {
    clip-path: inset(41% 0 53% 0);
  }

  60% {
    clip-path: inset(21% 0 47% 0);
  }

  65% {
    clip-path: inset(89% 0 4% 0);
  }

  70% {
    clip-path: inset(1% 0 95% 0);
  }

  75% {
    clip-path: inset(86% 0 4% 0);
  }

  80% {
    clip-path: inset(95% 0 5% 0);
  }

  85% {
    clip-path: inset(54% 0 36% 0);
  }

  90% {
    clip-path: inset(70% 0 27% 0);
  }

  95% {
    clip-path: inset(6% 0 16% 0);
  }

  100% {
    clip-path: inset(95% 0 2% 0);
  }
}

@keyframes noise-anim-2 {
  0% {
    clip-path: inset(76% 0 21% 0);
  }

  5% {
    clip-path: inset(54% 0 7% 0);
  }

  10% {
    clip-path: inset(55% 0 29% 0);
  }

  15% {
    clip-path: inset(89% 0 3% 0);
  }

  20% {
    clip-path: inset(33% 0 40% 0);
  }

  25% {
    clip-path: inset(17% 0 56% 0);
  }

  30% {
    clip-path: inset(37% 0 51% 0);
  }

  35% {
    clip-path: inset(38% 0 19% 0);
  }

  40% {
    clip-path: inset(93% 0 4% 0);
  }

  45% {
    clip-path: inset(44% 0 14% 0);
  }

  50% {
    clip-path: inset(53% 0 26% 0);
  }

  55% {
    clip-path: inset(67% 0 11% 0);
  }

  60% {
    clip-path: inset(85% 0 13% 0);
  }

  65% {
    clip-path: inset(27% 0 37% 0);
  }

  70% {
    clip-path: inset(87% 0 4% 0);
  }

  75% {
    clip-path: inset(10% 0 8% 0);
  }

  80% {
    clip-path: inset(51% 0 27% 0);
  }

  85% {
    clip-path: inset(10% 0 60% 0);
  }

  90% {
    clip-path: inset(83% 0 3% 0);
  }

  95% {
    clip-path: inset(23% 0 55% 0);
  }

  100% {
    clip-path: inset(1% 0 81% 0);
  }
}
</style>
