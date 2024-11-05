import { pwa } from "./config/pwa";
import { useNuxt } from "nuxt/kit";
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
    "@pinia/nuxt",
    "@nuxt/image",
    "@vite-pwa/nuxt",
    "@nuxtjs/seo",
  ],

  routeRules: {
    "/api/**": { cors: true },
  },

  $production: {
    experimental: {
      noVueServer: true,
    },
    modules: ["nuxt-security"],
    image: {
      domains: ["i.ibb.co", "islomurodov.vercel.app", "islomurodov.uz"],
      format: ["webp"],
    },
  },

  $test: {
    experimental: {
      componentIslands: true,
    },
  },

  runtimeConfig: {
    PUBLIC_URL: import.meta.env.NUXT_APP_PUBLIC_URL,
    BOT_TOKEN: import.meta.env.NUXT_APP_BOT_TOKEN,
    CHAT_ID: import.meta.env.NUXT_APP_CHAT_ID,
  },

  site: {
    name: appName,
    url: import.meta.env.NUXT_APP_PUBLIC_URL,
  },

  hooks: {
    "components:extend": (components) => {
      const nuxt = useNuxt();
      for (const comp of components) {
        if (comp.pascalName === "StaticMarkdownRender" && nuxt.options.dev) {
          comp.mode = "all";
        }
      }
    },
  },

  experimental: {
    payloadExtraction: false,
    renderJsonPayloads: true,
    typedPages: true,
    viewTransition: true,
    headNext: true,
    cookieStore: true,
  },

  sourcemap: false,

  security: {
    headers: {
      crossOriginEmbedderPolicy: false,
      contentSecurityPolicy: {
        "script-src-attr": ["'self'", "'unsafe-inline'"],
      },
    },
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
      crawlLinks: true,
      routes: ["/"],
    },
    hooks: {
      "prerender:generate"(route) {
        if (route.fileName)
          route.fileName = route.fileName.replace(
            /(\.\w{3})\/index.html$/,
            "$1"
          );

        if (route.fileName?.endsWith(".html") && route.contents) {
          route.contents = route.contents.replace(
            /(src|href|srcset)="\/_ipx[^"]+"/g,
            (r) => r.replaceAll("//", "/")
          );
        }

        if (route.error) {
          if (route.route.startsWith("/_ipx")) {
            console.warn("Could not prerender", route.route);
            // ignore IPX rendering errors
            delete route.error;
          } else {
            console.error(route.route, route.error, route);
            process.exit(1);
          }
        }
      },
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
      ]
    },
  },

  pwa,
  devtools: { enabled: true },

  eslint: {
    config: {
      standalone: false,
    },
  },

  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: "2024-10-27",
});
