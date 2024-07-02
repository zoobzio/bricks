import {
  defineConfig,
  presetUno,
  presetIcons,
  presetTypography,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
  transformerCompileClass,
} from "unocss";
import { presetUntheme } from "unocss-preset-untheme";
import untheme from "./untheme.config";

export default defineConfig({
  content: {
    pipeline: {
      include: [/\.(vue|ts)($|\?)/],
    },
  },
  presets: [
    presetUno(),
    presetIcons(),
    presetTypography({
      cssExtend: {
        h1: {
          "--apply": "font-typesize-heading-1 my-spacing-m",
        },
        h2: {
          "--apply": "font-typesize-heading-2 mt-spacing-xl mb-spacing-m",
        },
        h3: {
          "--apply": "font-typesize-heading-3",
        },
        h4: {
          "--apply": "font-typesize-heading-4",
        },
        h5: {
          "--apply": "font-typesize-heading-5",
        },
        h6: {
          "--apply": "font-typesize-heading-6",
        },
        p: {
          "--apply": "font-typesize-body-m",
        },
        a: {
          "--apply":
            "font-typesize-body-m no-underline hover:(text-ui-primary)",
        },
        pre: {
          "--apply": "rounded border border-ui-outline bg-ui-surface-container",
        },
        table: {
          "--apply": "table table-auto w-full border-separate border-spacing-0",
        },
        thead: {
          "--apply":
            "border border-ui-outline bg-ui-surface-container overflow-hidden",
        },
        tbody: {
          "--apply": "border-b border-x border-ui-outline",
        },
        tr: {
          "--apply": "w-full",
        },
        th: {
          "--apply":
            "not-prose text-left border-y border-ui-outline first:(rounded-tl border-l) last:(rounded-tr border-r)",
        },
      },
    }),
    presetWebFonts({
      provider: "google",
      fonts: {
        inter: "Inter",
        archivo: "Archivo",
      },
    }),
    presetUntheme({
      config: untheme,
      templates: {
        colors: /ui|tw|shiki(-(.*))/,
        spacing: /spacing-(.*)/,
        fontSize: /typesize-(.*)/,
        borderRadius: /shape-(.*)/,
        lineHeight: /line-(.*)/,
        fontFamily: /typeface-(.*)/,
      },
    }),
  ],
  transformers: [
    transformerDirectives({
      applyVariable: ["--apply"],
    }),
    transformerVariantGroup(),
    transformerCompileClass({
      trigger: /(["'`]):ui(?:-)?(?<name>[^\s\1]+)?:\s([^\1]*?)\1/g,
      classPrefix: "ui-",
    }),
  ],
});
