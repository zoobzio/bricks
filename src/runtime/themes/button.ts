import { tv } from "tailwind-variants";
import { defineComponentTheme } from "../utils/theme";

const theme = {
  button: tv({
    base: "",
  }),
};

export type ButtonTheme = typeof theme;

export const useButtonTheme = defineComponentTheme(theme);
