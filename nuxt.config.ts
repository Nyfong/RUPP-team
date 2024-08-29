// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/icon", "nuxt-aos", "@nuxt/ui"],

  css: [
    "@/assets/css/client.css",

    "~/assets/css/client.css",
    "~/assets/css/tailwind.css", // Path to your CSS file
  ],
  build: {
    transpile: ["chart.js"],
  },

  tailwindcss: {
    cssPath: ["~/assets/css/tailwind.css", { injectPosition: "first" }],
    configPath: "tailwind.config",
    exposeConfig: {
      level: 2,
    },

    router: {
      linkExactActiveClass: "active",
    },

    config: {},
    viewer: true,
  },
});
