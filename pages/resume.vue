<script setup lang="ts">
import { appCreator } from "~/constants";

definePageMeta({
  title: "Resumé",
});
</script>

<template>
  <div class="w-full md:py-16 py-10">
    <TheContainer>
      <div class="mb-10 space-y-5">
        <TheTitle />
        <p class="text-ring text-sm sm:text-base">
          Reach out to me via my
          <b class="text-black dark:text-white">
            <NuxtLink to="/contact" class="interactable hover:underline">
              contact page.
            </NuxtLink>
          </b>
          <b class="text-black dark:text-white">
            <a
              href="https://drive.google.com/file/d/10zdPD4JXenoUFRk5R-vQQO6Fuem16Y63/view?usp=sharing"
              target="_blank"
              class="interactable hover:underline"
            >
              View or download
            </a>
          </b>
          the resume.
        </p>
      </div>
      <embed
        src="https://drive.google.com/file/d/10zdPD4JXenoUFRk5R-vQQO6Fuem16Y63/preview"
        type="application/pdf"
        width="740"
        height="780"
        :title="`${appCreator} Resumé`"
      />
      <FooterLink to="/contact">
        Are you convinced to contact me now ?
      </FooterLink>
    </TheContainer>
  </div>
</template>

<style>
embed {
  width: 100%;
  border: none;
  height: 44.5rm;
}

@media (min-width: 768px) {
  width: 82.8% !important;
  height: 70.4rem !important;
}
</style>
