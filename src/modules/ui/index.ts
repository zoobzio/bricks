import {
  defineNuxtModule,
  addImportsDir,
  createResolver,
  installModule,
} from "nuxt/kit";
import unoConfig from "./uno.config";
import unthemeConfig from "./untheme.config";
import { defu } from "defu";

// TODO extend untheme config as well as override
export default defineNuxtModule<Partial<typeof unthemeConfig>>({
  meta: {
    name: "ui",
    configKey: "ui",
  },
  setup(tokens) {
    const { resolve } = createResolver(import.meta.url);
    addImportsDir(resolve("./runtime/utils"));
    installModule("@unocss/nuxt", unoConfig);
    installModule("@untheme/nuxt", {
      config: defu(tokens, unthemeConfig),
    });
  },
});
