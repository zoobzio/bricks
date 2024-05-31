// @ts-expect-error not available until runtime
import config from "#build/icons.config.mjs";
import type { IconConfig } from "#build/types/icons.d.ts";

const icons = config as IconConfig;

export type IconAlias = keyof IconConfig;

export function useIcon(icon: IconAlias) {
  return icons[icon];
}
