import {
  defineNuxtModule,
  createResolver,
  addTemplate,
  addImportsDir,
  addTypeTemplate,
} from "@nuxt/kit";
import type { ConstantTemplate, EnumTemplate, OptionTemplate } from "./config";
import template from "./template";
import { defu } from "defu";

interface DataNuxtOptions {
  constants?: ConstantTemplate & Partial<typeof template.constants>;
  enums?: EnumTemplate & Partial<typeof template.enums>;
  options?: OptionTemplate & Partial<typeof template.options>;
}

export default defineNuxtModule<DataNuxtOptions>({
  meta: {
    name: "@zoobzio/data",
    configKey: "data",
  },
  setup(config) {
    // features
    const common = ["constants", "enums", "options"] as const;
    common.forEach((key) => {
      addTemplate({
        filename: `${key}.config.mjs`,
        getContents: () =>
          [
            `const ${key} = ${JSON.stringify(
              defu(config[key], template[key]),
              null,
              2
            )};`,
            `export default ${key};`,
          ].join("\n"),
      });
      addTypeTemplate({
        filename: `types/${key}.d.ts`,
        getContents: () =>
          [
            `const ${key} = ${JSON.stringify(
              defu(config[key], template[key]),
              null,
              2
            )} as const;`,
            `export type ${
              key.charAt(0).toUpperCase() + key.slice(1)
            } = typeof ${key};`,
          ].join("\n"),
      });
    });

    // runtime
    const { resolve } = createResolver(import.meta.url);
    addImportsDir(resolve("./runtime/utils"));
  },
});
