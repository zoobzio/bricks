import { defu } from "defu";

export function defineComponentTheme<Theme extends object>(config: Theme) {
  return (theme: Partial<Theme> = {}) => defu(theme, config);
}
