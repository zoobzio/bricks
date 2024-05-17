import { defineUnthemeConfig } from "untheme";
import { useColorPack, referenceColorTokens } from "@untheme/colors";

export default defineUnthemeConfig({
  tokens: {
    // colors
    "sr-black": "#000",
    "sr-white": "#FFF",
    ...useColorPack(
      "tw",
      [
        "amber",
        "blue",
        "cyan",
        "emerald",
        "fuchsia",
        "gray",
        "green",
        "indigo",
        "lime",
        "neutral",
        "orange",
        "pink",
        "purple",
        "red",
        "rose",
        "sky",
        "slate",
        "stone",
        "teal",
        "violet",
        "yellow",
        "zinc",
      ],
      "-"
    ),
    // spacing
    "spacing-2xs": "4px",
    "spacing-xs": "8px",
    "spacing-s": "12px",
    "spacing-m": "16px",
    "spacing-l": "20px",
    "spacing-xl": "24px",
    "spacing-2xl": "28px",
    // shape
    "shape-none": "0px",
    "shape-xs": "2px",
    "shape-s": "4px",
    "shape-m": "6px",
    "shape-l": "8px",
    "shape-xl": "12px",
    "shape-full": "9999px",
    // typeface
    "typeface-archivo": "Archivo",
    "typeface-inter": "Inter",
    // typesize
    "typesize-heading-1": "1.5em",
    "typesize-heading-2": "1.25em",
    "typesize-heading-3": "1em",
    "typesize-heading-4": "0.875em",
    "typesize-heading-5": "0.75em",
    "typesize-heading-6": "0.6875em",
    "typesize-title-s": "0.875em",
    "typesize-title-m": "1em",
    "typesize-title-l": "1.125em",
    "typesize-body-s": "0.6875em",
    "typesize-body-m": "0.875em",
    "typesize-body-l": "1em",
  },
  themes: {
    seerist: {
      ...referenceColorTokens("tw", "emerald", "primary", "-"),
      ...referenceColorTokens("tw", "stone", "surface", "-"),
      ...referenceColorTokens("tw", "rose", "error", "-"),
      "typeface-content": "typeface-inter",
    },
    example: {
      ...referenceColorTokens("tw", "fuchsia", "primary", "-"),
      ...referenceColorTokens("tw", "slate", "surface", "-"),
      ...referenceColorTokens("tw", "red", "error", "-"),
      "typeface-content": "typeface-archivo",
    },
  },
  roles: {
    // colors - default to "dark" and toggle shades internally
  },
});
