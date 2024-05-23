import { mergeComponentUI, type UITemplate } from "../utils/ui";
import { tv } from "tailwind-variants";

const ui = {
  slots: {
    wrapper: "border-neutral-fg-l pa-spacing-xs",
    left: "flex items-center gap-spacing-xs",
    center: "flex items-center justify-center gap-spacing-xs w-full",
    right: "flex items-center justify-end gap-spacing-xs ml-auto",
  },
  variants: {
    position: {
      top: {
        wrapper: "border-b",
      },
      bottom: {
        wrapper: "border-t",
      },
    },
    left: {
      true: {
        wrapper: "flex items-center",
      },
    },
    center: {
      true: {
        wrapper: "flex items-center justify-center",
      },
    },
    right: {
      true: {
        wrapper: "flex items-center",
      },
    },
  },
  compoundVariants: [
    {
      left: true,
      center: true,
      class: {
        wrapper: "grid grid-cols-3",
      },
    },
    {
      right: true,
      center: true,
      class: {
        wrapper: "grid grid-cols-3",
      },
    },
  ],
} satisfies UITemplate;

export type BarUI = typeof ui;

export function useBarUI(override: Partial<BarUI> = {}) {
  const merged = mergeComponentUI(override, ui);
  return tv(merged);
}
