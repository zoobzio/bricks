import { mergeComponentUI, type UITemplate } from "../utils/ui";
import { tv } from "tailwind-variants";

const ui = {
  slots: {
    wrapper: "flex items-center gap-spacing-xs w-full text-fs-body-s font-bold",
    hint: "text-neutral-fg-m",
    error: "text-error-bg-h ml-auto",
  },
} satisfies UITemplate;

export type HintUI = typeof ui;

export function useHintUI(override: Partial<HintUI> = {}) {
  const merged = mergeComponentUI(override, ui);
  return tv(merged);
}
