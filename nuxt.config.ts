export default defineNuxtConfig({
  srcDir: "src/",
  css: ["@unocss/reset/tailwind.css"],
  modules: [
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "@unocss/nuxt",
    "@untheme/nuxt",
    "@nuxt/eslint",
  ],
});
