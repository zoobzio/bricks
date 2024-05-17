import {
  defineNuxtModule,
  createResolver,
  addTemplate,
  addComponentsDir,
  addImportsDir,
  addTypeTemplate,
  installModule,
} from "@nuxt/kit";
import { defu } from "defu";
import type { UserConfig } from "unocss";
import unoTemplate from "./uno.template";
import unthemeTemplate from "./untheme.template";

export * from "./config";

export interface BricksNuxtOptions {
  prefix?: string;
  uno?: UserConfig;
  untheme?: Partial<typeof unthemeTemplate>;
}

export default defineNuxtModule<BricksNuxtOptions>({
  meta: {
    name: "@zoobzio/bricks",
    configKey: "bricks",
  },
  defaults: {
    prefix: "z",
  },
  setup({ prefix, uno, untheme }, nuxt) {
    const { resolve } = createResolver(import.meta.url);

    // color mode
    installModule("@nuxtjs/color-mode");

    // unocss
    installModule("@unocss/nuxt", defu(uno, unoTemplate));

    // untheme
    installModule("@untheme/nuxt", defu(untheme, unthemeTemplate));

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
    addImportsDir(resolve("./runtime/themes"));
    addImportsDir(`${nuxt.options.srcDir}/themes`);
  },
});
