import {
  defineNuxtModule,
  createResolver,
  addTypeTemplate,
  addTemplate,
  addImportsDir,
  installModule,
} from "@nuxt/kit";
import type { IconAliasTemplate } from "./config";
import template from "./template";
import { defu } from "defu";

export default defineNuxtModule<Partial<typeof template> & IconAliasTemplate>({
  meta: {
    name: "@zoobzio/icon",
    configKey: "icon",
  },
  async setup(aliases) {
    const icons = JSON.stringify(defu(aliases, template), null, 2);

    installModule("@unocss/nuxt", {
      content: {
        inline: [icons],
      },
    });

    addTemplate({
      filename: "icons.config.mjs",
      getContents: () => [`export default ${icons};`].join("\n"),
    });
    addTypeTemplate({
      filename: "types/icons.d.ts",
      getContents: () =>
        [
          `const icons = ${icons} as const;`,
          `export type IconConfig = typeof icons;`,
        ].join("\n"),
    });

    const { resolve } = createResolver(import.meta.url);
    addImportsDir(resolve("./runtime/utils"));
  },
});
