import { defineNuxtModule, addImportsDir, createResolver } from "nuxt/kit";

export default defineNuxtModule({
  meta: {
    name: "@zoobzio/ui",
    configKey: "ui",
  },
  setup() {
    const { resolve } = createResolver(import.meta.url);
    addImportsDir(resolve("./runtime/utils"));
  },
});
