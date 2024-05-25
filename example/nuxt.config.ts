import { defineNuxtConfig } from "nuxt/config";
import constants from "./config/constants.config";
import enums from "./config/enums.config";
import options from "./config/options.config";

export default defineNuxtConfig({
  modules: ["zui"],
  css: ["@unocss/reset/tailwind.css"],
  zui: {
    constants,
    enums,
    options,
  },
});
