import {
  defineNuxtModule,
  createResolver,
  addTemplate,
  addComponentsDir,
  addImportsDir,
  addTypeTemplate,
} from "@nuxt/kit";

export * from "./config";

export interface BricksNuxtOptions {
  prefix?: string;
}

export default defineNuxtModule<BricksNuxtOptions>({
  meta: {
    name: "@zoobzio/bricks",
    configKey: "bricks",
  },
  defaults: {
    prefix: "z",
  },
  setup({ prefix }, nuxt) {
    const { resolve } = createResolver(import.meta.url);

    // common configurations
    const common = ["constants", "enums", "icons", "options"];
    common.forEach((key) => {
      addTemplate({
        filename: `${key}.config.mjs`,
        getContents: () => `
        import ${key} from "${nuxt.options.srcDir}/${key}.config";
        export default ${key};`,
      });
      addTypeTemplate({
        filename: `types/${key}.d.ts`,
        getContents: () => `
        import ${key} from "${nuxt.options.srcDir}/${key}.config";
        export type ${
          key.charAt(0).toUpperCase() + key.slice(1)
        } = typeof ${key};`,
      });
    });

    // components
    addComponentsDir({
      path: resolve("./runtime/components"),
      prefix,
    });

    // utils
    addImportsDir(resolve("./runtime/utils"));

    // themes
    addImportsDir(`${nuxt.options.srcDir}/themes`);
  },
});
