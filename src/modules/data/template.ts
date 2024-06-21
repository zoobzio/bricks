import { defineNuxtData } from "./config";

export default defineNuxtData({
  constants: {},
  enums: {
    // common
    sizes: ["small", "medium", "large"],
    filters: ["$contains", "$between", "$equals", "$includes", "$is"],
    columns: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    targets: ["_blank", "_self"],
    pageSizes: [5, 10, 25, 50, 100],
    colors: ["primary", "secondary", "surface", "error"],
    // records
    recordVariants: [
      "text",
      "textarea",
      "number",
      "option",
      // "combo",
      "switch",
      "composite",
    ],
    // buttons
    buttonTypes: ["button", "submit", "reset"],
    buttonVariants: ["primary", "tonal", "outlined", "text", "destructive"],
    // inputs
    inputTypes: ["text", "number"],
    // TODO: more enums here...
  },
  options: {
    themes: [
      {
        key: "default",
        label: "Default",
      },
      {
        key: "example",
        label: "Example",
      },
    ],
    languages: [
      {
        key: "en",
        label: "English",
      },
      {
        key: "es",
        label: "Spanish",
      },
      {
        key: "fr",
        label: "French",
      },
    ],
  },
});
