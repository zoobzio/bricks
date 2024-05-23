import { mergeComponentUI, type UITemplate } from "../utils/ui";
import { tv } from "tailwind-variants";

const ui = {
  base: "z-50 w-full rounded text-neutral-fg-xh bg-neutral-bg-h border border-neutral-fg-l outline-none shadow-lg shadow-neutral-bg-h",
} satisfies UITemplate;

export type PopoverUI = typeof ui;

export function usePopoverUI(override: Partial<PopoverUI> = {}) {
  const merged = mergeComponentUI(override, ui);
  return tv(merged);
}
