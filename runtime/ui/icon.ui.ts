import { mergeComponentUI, type UITemplate } from "../utils/ui";
import { tv } from "tailwind-variants";

const ui = {
  base: "block",
  variants: {
    size: {
      large: "size-sizing-icon-l",
      medium: "size-sizing-icon-m",
      small: "size-sizing-icon-s",
    },
  },
} satisfies UITemplate;

export type IconUI = typeof ui;

export function useIconUI(override: Partial<IconUI> = {}) {
    const merged = mergeComponentUI(override, ui);
    return tv(merged);
}