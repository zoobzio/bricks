import {
  defineConfig,
  presetUno,
  presetIcons,
  presetTypography,
  presetWebFonts,
} from "unocss";
import { presetUntheme } from "unocss-preset-untheme";
/**
 * unocss only cares about the token names and not the values
 * using the template here instead of the overwritten user config should be fine
 */
import config from "./untheme.template";

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
        h1: { "--apply": "" },
        h2: { "--apply": "" },
        h3: { "--apply": "" },
        h4: { "--apply": "" },
        h5: { "--apply": "" },
        h6: { "--apply": "" },
        p: { "--apply": "" },
        a: { "--apply": "" },
        // add more as needed
      },
    }),
    presetWebFonts({
      provider: "google",
      // turn this into a configuration
      fonts: {
        archivo: "Archivo",
        inter: "Inter",
      },
    }),
    presetUntheme({
      config,
      templates: {
        // add these
      },
    }),
  ],
});
