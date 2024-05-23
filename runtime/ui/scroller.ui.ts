import { mergeComponentUI, type UITemplate } from "../utils/ui";
import { tv } from "tailwind-variants";

const ui = {
  slots: {
    root: "relative overflow-hidden h-full",
    viewport: "h-full w-full rounded-[inherit]",
    content: "grid grid-cols-3",
    bar: "flex touch-none select-none transition-colors",
    thumb: "relative flex-1 rounded-full bg-neutral-fg-l",
  },
  variants: {
    orientation: {
      vertical: {
        bar: "h-full w-2.5 border-l border-l-transparent p-px",
      },
      horizontal: {
        bar: "h-2.5 flex-col border-t border-t-transparent p-px",
      },
    },
  },
} satisfies UITemplate;

export type ScrollerUI = typeof ui;

export function useScrollerUI(override: Partial<ScrollerUI> = {}) {
  const merged = mergeComponentUI(override, ui);
  return tv(merged);
}
