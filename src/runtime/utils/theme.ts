import { defu } from "defu";
import type { TV } from "tailwind-variants";

export type ThemeVariantConfig = Parameters<TV>[0];

export type ThemeConfig = {
  [key: string]: string | ThemeVariantConfig;
};

export function defineComponentTheme<Theme extends ThemeConfig>(config: Theme) {
  return (theme: Partial<Theme> = {}) => defu(theme, config);
}
