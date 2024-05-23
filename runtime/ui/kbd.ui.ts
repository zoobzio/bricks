import { mergeComponentUI, type UITemplate } from "../utils/ui";
import { tv } from "tailwind-variants";

const ui = {
  base: "rounded bg-neutral-bg-m text-neutral-fg-xh border border-neutral-fg-l text-sm px-spacing-2xs",
} satisfies UITemplate;

export type KbdUI = typeof ui;

export function useKbdUI(override: Partial<KbdUI> = {}) {
  const merged = mergeComponentUI(override, ui);
  return tv(merged);
}
