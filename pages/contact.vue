<script setup lang="ts">
import confetti from "canvas-confetti";

const state = reactive<{
  name: string;
  email: string;
  message: string;
}>({
  name: "",
  email: "",
  message: "",
});

async function handleSubmit() {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  if (state.name && emailPattern.test(state.email) && state.message) {
    try {
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
      } else if (status.value === "error") {
        state.name = "";
        state.email = "";
        state.message = "";
      }
    } catch (error) {
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
            <a
              href="mailto:hi@islomurodov.uz"
              target="_blank"
              class="interactable underline"
            >
              hi@islomurodov.uz
            </a>
          </b>
        </p>
      </div>
      <form @submit.prevent="handleSubmit" autocomplete="off">
        <div class="space-y-4">
          <div>
            <Input
              type="text"
              v-model="state.name"
              autocomplete="name"
              required
              placeholder="Name"
            />
          </div>
          <div>
            <Input
              type="email"
              autocomplete="email"
              v-model="state.email"
              required
              placeholder="Email"
            />
          </div>
          <div>
            <Textarea
              v-model="state.message"
              rows="5"
              required
              placeholder="Message"
            />
          </div>
          <Button type="submit" @click="handleSubmit" class="interactable">
            Send Message
          </Button>
        </div>
      </form>
      <FooterLink to="/">Go Back Home</FooterLink>
    </TheContainer>
  </div>
</template>
