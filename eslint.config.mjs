// @ts-check
import parser from "vue-eslint-parser";
import parserOptions from "@typescript-eslint/parser";
import prettierConfig from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier/recommended";

export default [
  {
  files: ["**/*.ts", "**/*.vue"],
  plugins: {
    vitest: {},
  },
  rules: {
    "vue/multi-word-component-names": "off", // components are multi-word via directory structure and not file name, this check is not needed
    "vue/require-default-prop": "off", // we use withDefaults, but sometimes props should stay undefined
  },
  languageOptions: {
    parser,
    parserOptions,
  },
  },
  prettierConfig,
  prettierPlugin,
];
