// @ts-expect-error unavailable until runtime
import icons from "#build/icons.config.mjs";

export type IconAlias = keyof typeof icons;

export function useIcons() {
  return icons;
}

export function useIconAliases() {
  return Object.keys(icons) as IconAlias[];
}

export function useIconAlias(alias: IconAlias) {
  return icons[alias];
}
