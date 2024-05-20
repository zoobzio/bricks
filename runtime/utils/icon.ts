// @ts-expect-error
import config from "#build/icons.config.mjs";
import type { Icons as IconAliases } from "#build/types/icons.d.ts";

const icons = config as IconAliases;

export type IconAlias = keyof IconAliases;
export type IconAliasData<I extends IconAlias> = IconAliases[I];

export function useIcon<I extends IconAlias>(key: I) {
  return icons[key];
}
