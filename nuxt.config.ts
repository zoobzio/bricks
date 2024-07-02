import content from "./config/content.config";
import unocss from "./config/uno.config";
import untheme from "./config/untheme.config";

export default defineNuxtConfig({
  srcDir: "src/",
  css: ["@unocss/reset/tailwind.css"],
  modules: [
    "@pinia/nuxt",
    "@unocss/nuxt",
    "@untheme/nuxt",
    "@vueuse/nuxt",
    "@nuxt/eslint",
    "@nuxt/content",
    "@nuxtjs/i18n",
  ],
  // @ts-expect-error custom theme breaks type
  content,
  unocss,
  untheme,
});
