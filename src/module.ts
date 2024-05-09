import {
  defineNuxtModule,
  createResolver,
  addTemplate,
  addComponentsDir,
  addImportsDir,
} from "@nuxt/kit";

export * from "./config";

export interface BricksNuxtOptions {
  prefix?: string;
}

export default defineNuxtModule({
  meta: {
    name: "@zoobzio/bricks",
    configKey: "bricks",
  },
  setup({ prefix }, nuxt) {
    const { resolve } = createResolver(import.meta.url);

    // icons
    addTemplate({
      filename: "icons.config.mjs",
      getContents: () => `
      import icons from "${nuxt.options.srcDir}/${"icons.config"}";
      export default icons;`,
    });

    // enums
    addTemplate({
      filename: "enums.config.mjs",
      getContents: () => `
      import enums from "${nuxt.options.srcDir}/${"enums.config"}";
      export default enums;`,
    });

    // constants
    addTemplate({
      filename: "constants.config.mjs",
      getContents: () => `
      import constants from "${nuxt.options.srcDir}/${"constants.config"}";
      export default constants;`,
    });

    // components
    addComponentsDir({
      path: resolve("./runtime/components"),
      prefix,
    });

    // utils
    addImportsDir(resolve("./runtime/utils"));
  },
});
