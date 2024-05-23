import { mergeComponentUI, type UITemplate } from "../utils/ui";
import { tv } from "tailwind-variants";

const ui = {
  base: "grid grid-cols-12 gap-spacing-m py-spacing-m border-y border-neutral-fg-l",
} satisfies UITemplate;

export type CompositeUI = typeof ui;

export function useCompositeUI(override: Partial<CompositeUI> = {}) {
  const merged = mergeComponentUI(override, ui);
  return tv(merged);
}
