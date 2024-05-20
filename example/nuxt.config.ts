import { defineNuxtConfig } from "nuxt/config";
import constants from "./config/constants.config";
import enums from "./config/enums.config";
import icons from "./config/icons.config";
import options from "./config/options.config";

export default defineNuxtConfig({
  modules: ["bricks"],
  bricks: {
    constants,
    enums,
    icons,
    options,
  },
});
