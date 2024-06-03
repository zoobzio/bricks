import unocss from "./config/uno.config";

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
  untheme: {
    config: "./config/untheme.config", // TODO fix this, should be relative to rootDir and w/o the file name
  },
  unocss,
  watch: ["./ui"],
});
