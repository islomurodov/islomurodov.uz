<script setup lang="ts">
import confetti from "canvas-confetti";

const state = reactive<{
  name: string;
  email: string;
  message: string;
  isLoading: boolean
}>({
  name: "",
  email: "",
  message: "",
  isLoading: false
});

async function handleSubmit() {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  if (state.name && emailPattern.test(state.email) && state.message) {
    state.isLoading = true
    try {
      state.isLoading = true
      const { status } = await useFetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: {
          text: `*Name: * ${state.name}\n*Email: * ${state.email}\n*Message: * ${state.message}`,
        },
      });

      if (status.value === "success") {
        state.name = "";
        state.email = "";
        state.message = "";
        confetti({
          particleCount: 180,
          spread: 100,
          origin: { y: 0.6 },
        });
        state.isLoading = false
      } else if (status.value === "error") {
        state.name = "";
        state.email = "";
        state.message = "";
        state.isLoading = false
      }
    } catch (error) {
      state.isLoading = false
      throw error;
    }
  }
}

definePageMeta({
  title: "Contact",
});
</script>

<template>
  <div class="w-full md:py-16 py-10">
    <TheContainer>
      <div class="mb-10 space-y-5">
        <TheTitle />
        <p class="text-ring text-sm sm:text-base">
          Get in touch or shoot me an email directly on
          <b class="text-black dark:text-white">
            <a href="mailto:hi@islomurodov.uz" target="_blank" class="interactable underline">
              hi@islomurodov.uz
            </a>
          </b>
        </p>
      </div>
      <form @submit.prevent="handleSubmit" autocomplete="off">
        <div class="space-y-4">
          <div>
            <Input type="text" v-model="state.name" autocomplete="name" required placeholder="Name" />
          </div>
          <div>
            <Input type="email" autocomplete="email" v-model="state.email" required placeholder="Email" />
          </div>
          <div>
            <Textarea v-model="state.message" rows="5" required placeholder="Message" />
          </div>
          <Button :disabled="state.isLoading" type="submit" @click="handleSubmit"
            class="interactable inline-flex items-center gap-2 ">
            Send Message
            <Icon v-if="state.isLoading" name="svg-spinners:180-ring-with-bg"
              class="dark:text-black text-white text-lg" />
          </Button>
        </div>
      </form>
      <FooterLink to="/">Go Back Home</FooterLink>
    </TheContainer>
  </div>
</template>
