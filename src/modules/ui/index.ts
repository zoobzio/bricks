import {
  defineNuxtModule,
  addImportsDir,
  createResolver,
  addImports,
  addTemplate,
  addTypeTemplate,
} from "nuxt/kit";
import fs from "fs";

interface UINuxtOptions {
  dir?: string;
}

// TODO this probably needs to be refactored to look for ui files in all nuxt layers
export default defineNuxtModule<UINuxtOptions>({
  meta: {
    name: "@zoobzio/ui",
    configKey: "ui",
  },
  defaults: {
    dir: "./ui",
  },
  setup({ dir }, nuxt) {
    const definitions = fs.readdirSync(`${nuxt.options.srcDir}/${dir}`, {
      recursive: true,
    });

    const names = definitions.map((d) => {
      const chunks = d.toString().split("/");
      return chunks[chunks.length - 1].replace(".ts", "");
    });

    names.forEach((name, i) =>
      addImports({
        name: "default",
        as: `use${
          name.charAt(0).toUpperCase() + name.slice(1).replaceAll("-", "")
        }UI`,
        from: `${nuxt.options.srcDir}/${dir}/${definitions[i]}`,
      }),
    );

    const imports = definitions.map(
      (d, i) => `import ${names[i]} from "${nuxt.options.srcDir}/${d}";`,
    );
    const ui = `const ui = { ${names.join(", ")} };`;

    addTemplate({
      filename: "ui.config.mjs",
      getContents: () => [...imports, ui, "export default ui;"].join("\n"),
    });
    addTypeTemplate({
      filename: "types/ui.d.ts",
      getContents: () =>
        [...imports, ui, "export type UI = typeof ui;"].join("\n"),
    });

    const { resolve } = createResolver(import.meta.url);
    addImportsDir(resolve("./runtime/utils"));
  },
});
