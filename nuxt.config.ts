import data from "./config/data.config";
import icon from "./config/icon.config";
import unocss from "./config/uno.config";

export default defineNuxtConfig({
  srcDir: "src/",
  css: ["@unocss/reset/tailwind.css"],
  imports: {
    dirs: ["ui"],
  },
  modules: [
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "@unocss/nuxt",
    "@untheme/nuxt",
    "@nuxt/eslint",
  ],
  data,
  icon,
  untheme: {
    config: "./config/untheme.config", // TODO fix this, should be relative to rootDir and w/o the file name
  },
  unocss,
});
