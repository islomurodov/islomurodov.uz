import { pwa } from "./config/pwa";
import { appCreator, appDescription, appName } from "./constants";

export default defineNuxtConfig({
  modules: [
    "@vueuse/nuxt",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "shadcn-nuxt",
    "@nuxt/eslint",
    "nuxt-icon",
    "@nuxtjs/sitemap",
    "@nuxt/content",
    "@pinia/nuxt",
    "@nuxt/image",
    "@vite-pwa/nuxt",
    "@nuxtjs/seo",
  ],

  runtimeConfig: {
    PUBLIC_URL: import.meta.env.NUXT_APP_PUBLIC_URL,
    BOT_TOKEN: import.meta.env.NUXT_APP_BOT_TOKEN,
    CHAT_ID: import.meta.env.NUXT_APP_CHAT_ID,
  },

  site: {
    name: appName,
    url: import.meta.env.NUXT_APP_PUBLIC_URL,
  },

  content: {
    highlight: {
      theme: {
        default: "github-light",
        dark: "one-dark-pro",
      },
      langs: [
        "js",
        "javascript",
        "typescript",
        "markdown",
        "ts",
        "vue",
        "css",
        "scss",
        "sass",
        "html",
        "bash",
        "md",
        "mdc",
        "json",
        "cmd",
        "powershell",
      ],
    },
  },

  experimental: {
    payloadExtraction: false,
    renderJsonPayloads: true,
    typedPages: true,
  },

  css: ["@/assets/css/tailwind.css"],

  colorMode: {
    classSuffix: "",
  },

  nitro: {
    esbuild: {
      options: {
        target: "esnext",
      },
    },
    prerender: {
      routes: ["/", "/rss.xml"],
    },
  },

  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      title: appName,
      htmlAttrs: { lang: "en" },
      viewport: "width=device-width,initial-scale=1",
      link: [
        { rel: "icon", href: "/logo.png", sizes: "any" },
        { rel: "preconnect", href: "https://i.ibb.co/" },
        { rel: "canonical", href: import.meta.env.NUXT_APP_PUBLIC_URL },
      ],
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: appDescription },
        { name: "creator", content: appCreator },
        { name: "author", content: appCreator },
        {
          name: "keywords",
          content:
            "Islom Murodov, islomurodov, islomurodov.uz, islom.dev, islom.pro, murodov.uz, murodov.pro, murodov.dev, islom.uz, Islom, Murodov, developer, portfolio, web developer, frontend developer, backend developer",
        },
        { name: "mobile-web-app-capable", content: "yes" },
        { name: "twitter:site", content: "@islomurodov" },
        {
          name: "twitter:image",
          content: "https://i.ibb.co/2scLw3H/og-image.png",
        },
        { name: "twitter:title", content: appName },
        { name: "twitter:description", content: appDescription },
        { name: "twitter:creator", content: appCreator },
        { property: "og:title", content: appName },
        { property: "og:description", content: appDescription },
        {
          property: "og:image",
          content: "https://i.ibb.co/2scLw3H/og-image.png",
        },
        { property: "og:url", content: import.meta.env.NUXT_APP_PUBLIC_URL },
        { property: "og:site:name", content: appName },
        { property: "og:locale", content: "en_US" },
        { property: "og:locale:alternate", content: "en_UK" },
        { property: "og:type", content: "website" },
        { name: "apple-mobile-web-app-title", content: "Islom Murodov" },
        {
          name: "apple-mobile-web-app-status-bar-style",
          content: "black-translucent",
        },
        {
          name: "theme-color",
          media: "(prefers-color-scheme: light)",
          content: "#fffdfc",
        },
        {
          name: "theme-color",
          media: "(prefers-color-scheme: dark)",
          content: "#020a13",
        },
        { name: "robots", content: "index, nofollow" },
      ],
      script: [
        {
          src: "https://mc.yandex.ru/metrika/tag.js",
          async: true,
          defer: true,
          innerHTML: `
             (function (d, w, c) {
        (w[c] = w[c] || []).push(function () {
          try {
            w.yaCounter98517510 = new Ya.Metrika({
              id: 98517510,
              clickmap: true,
              trackLinks: true,
              accurateTrackBounce: true,
              webvisor: true,
              trackHash: true,
              ecommerce: "dataLayer",
            });
          } catch (e) {}
        });
        var n = d.getElementsByTagName("script")[0],
          x = "https://mc.webvisor.org/metrika/watch_ww.js",
          s = d.createElement("script"),
          f = function () {
            n.parentNode.insertBefore(s, n);
          };
        for (var i = 0; i < document.scripts.length; i++) {
          if (document.scripts[i].src === x) {
            return;
          }
        }
        s.type = "text/javascript";
        s.async = true;
        s.src = x;
        if (w.opera == "[object Opera]") {
          d.addEventListener("DOMContentLoaded", f, false);
        } else {
          f();
        }
      })(document, window, "yandex_metrika_callbacks");
          `,
          type: "text/javascript",
        },
      ],
    },
  },

  pwa,

  devtools: { enabled: true },

  eslint: {
    config: {
      standalone: false,
    },
  },
});
