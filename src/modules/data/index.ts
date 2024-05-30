import {
  defineNuxtModule,
  createResolver,
  addTemplate,
  addImportsDir,
  addTypeTemplate,
} from "nuxt/kit";
import type { ConstantTemplate, EnumTemplate, OptionTemplate } from "./config";

interface DataNuxtOptions {
  constants?: ConstantTemplate;
  enums?: EnumTemplate;
  options?: OptionTemplate;
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
            `const ${key} = ${JSON.stringify(config[key], null, 2)};`,
            `export default ${key};`,
          ].join("\n"),
      });
      addTypeTemplate({
        filename: `types/${key}.d.ts`,
        getContents: () =>
          [
            `const ${key} = ${JSON.stringify(config[key], null, 2)} as const;`,
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
