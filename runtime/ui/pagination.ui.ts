import { mergeComponentUI, type UITemplate } from "../utils/ui";
import { tv } from "tailwind-variants";

const ui = {
  slots: {
    list: "flex items-center gap-spacing-xs",
    more: "w-sizing-button-m h-sizing-button-m flex justify-center items-center text-neutral-fg-h",
  },
} satisfies UITemplate;

export type PaginationUI = typeof ui;

export function usePaginationUI(override: Partial<PaginationUI> = {}) {
  const merged = mergeComponentUI(override, ui);
  return tv(merged);
}
