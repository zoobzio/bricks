import { mergeComponentUI, type UITemplate } from "../utils/ui";
import { tv } from "tailwind-variants";

const ui = {
  slots: {
    nav: "flex items-center gap-spacing-xs break-words text-sm text-neutral-fg-h",
    separator: "text-neutral-fg-l",
  },
} satisfies UITemplate;

export type BreadcrumbUI = typeof ui;

export function useBreadcrumbUI(override: Partial<BreadcrumbUI> = {}) {
  const merged = mergeComponentUI(override, ui);
  return tv(merged);
}
