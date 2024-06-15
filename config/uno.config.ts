import {
  defineConfig,
  presetUno,
  presetIcons,
  presetTypography,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
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
          "--apply": "text-neutral-fg-xh font-typesize-heading-1",
        },
        h2: {
          "--apply": "text-neutral-fg-xh font-typesize-heading-2",
        },
        h3: {
          "--apply": "text-neutral-fg-xh font-typesize-heading-3",
        },
        h4: {
          "--apply": "text-neutral-fg-xh font-typesize-heading-4",
        },
        h5: {
          "--apply": "text-neutral-fg-xh font-typesize-heading-5",
        },
        h6: {
          "--apply": "text-neutral-fg-xh font-typesize-heading-6",
        },
        p: {
          "--apply": "text-neutral-fg-h font-typesize-body-m",
        },
        a: {
          "--apply":
            "text-neutral-fg-h font-typesize-body-m hover:(text-primary-bg-m)",
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
        colors: /ui|tw(-(.*))/,
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
  ],
});
