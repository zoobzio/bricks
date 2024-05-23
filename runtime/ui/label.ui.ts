import { mergeComponentUI, type UITemplate } from "../utils/ui";
import { tv } from "tailwind-variants";

const ui = {
  slots: {
    label: "text-fs-body-m font-bold",
    wrapper: "flex items-center gap-spacing-xs",
  },
  variants: {
    error: {
      true: {
        wrapper: "text-error-bg-m",
      },
      false: {
        wrapper: "text-neutral-fg-h",
      },
    },
  },
} satisfies UITemplate;

export type LabelUI = typeof ui;

export function useLabelUI(override: Partial<LabelUI> = {}) {
  const merged = mergeComponentUI(override, ui);
  return tv(merged);
}
