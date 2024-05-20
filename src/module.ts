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
import templates from "./templates";
import type { UserConfig } from "unocss";
import type {
  ConstantConfig,
  EnumConfig,
  IconConfig,
  OptionConfig,
} from "./config";

export * from "./config";

export interface BricksNuxtOptions {
  prefix?: string;
  uno?: UserConfig;
  untheme?: Partial<typeof templates.untheme>;
  constants?: Partial<typeof templates.constants> & ConstantConfig;
  enums?: Partial<typeof templates.enums> & EnumConfig;
  icons?: Partial<typeof templates.icons> & IconConfig;
  options?: Partial<typeof templates.options> & OptionConfig;
}

export default defineNuxtModule<BricksNuxtOptions>({
  meta: {
    name: "bricks",
    configKey: "bricks",
  },
  defaults: {
    prefix: "z",
  },
  setup({ prefix, uno, untheme, constants, enums, icons, options }) {
    // configurations
    const config = {
      uno: defu(uno ?? {}, templates.uno),
      untheme: defu(untheme ?? {}, templates.untheme),
      constants: defu(constants ?? {}, templates.constants),
      enums: defu(enums ?? {}, templates.enums),
      icons: defu(icons ?? {}, templates.icons),
      options: defu(options ?? {}, templates.options),
    };

    // paths
    const { resolve } = createResolver(import.meta.url);

    // color mode
    installModule("@nuxtjs/color-mode");

    // unocss
    installModule("@unocss/nuxt", config.uno);

    // untheme
    installModule("@untheme/nuxt", config.untheme);

    // features
    const common = ["constants", "enums", "icons", "options"] as const;
    common.forEach((key) => {
      addTemplate({
        filename: `${key}.config.mjs`,
        getContents: () =>
          [
            // `import ${key} from "${nuxt.options.srcDir}/${configSrc}/${key}.config";`,
            `const ${key} = ${JSON.stringify(config[key], null, 2)} as const;`,
            `export default ${key};`,
          ].join("\n"),
      });
      addTypeTemplate({
        filename: `types/${key}.d.ts`,
        getContents: () =>
          [
            // `import ${key} from "${nuxt.options.srcDir}/${configSrc}/${key}.config";`,
            `const ${key} = ${JSON.stringify(config[key], null, 2)} as const;`,
            `export type ${
              key.charAt(0).toUpperCase() + key.slice(1)
            } = typeof ${key};`,
          ].join("\n"),
      });
    });

    // components
    addComponentsDir({
      path: resolve("../runtime/components"),
      prefix,
    });

    // utils
    addImportsDir(resolve("../runtime/utils"));
  },
});
