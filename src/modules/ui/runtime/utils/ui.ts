// @ts-expect-error unavailable until runtime
import ui from "#build/ui.config.mjs";
import type { UI } from "#build/types/ui.d.ts";

type UIKey = keyof UI;

export type UIOverride<K extends UIKey> = Parameters<UI[K]>[0];

export function useComponentUI<K extends UIKey>(key: K) {
  return (ui as UI)[key];
}
