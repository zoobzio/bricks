import { mergeComponentUI, type UITemplate } from "../utils/ui";
import { tv } from "tailwind-variants";

const ui = {
  slots: {
    wrapper:
      "flex items-center rounded border-1 border-neutral-fg-l text-fs-body-m text-neutral-fg-m bg-neutral-bg-h",
    input:
      "appearance-none outline-none bg-transparent grow text-neutral-fg-xh placeholder-neutral-fg-m",
    clear: "cursor-pointer text-neutral-fg-h hover:text-neutral-fg-xh",
  },
  variants: {
    size: {
      small: {
        wrapper: "gap-spacing-2xs px-spacing-xs",
      },
      medium: {
        wrapper: "gap-spacing-xs px-spacing-s py-spacing-2xs",
      },
      large: {
        wrapper: "gap-spacing-s px-spacing-m py-spacing-xs",
      },
    },
    error: {
      true: {
        wrapper: "text-error-bg-m border-error-bg-m",
      },
      false: {
        wrapper:
          "hover:(border-primary-bg-m) focus-within:(ring-2 ring-offset-2 ring-offset-neutral-bg-m ring-primary-bg-m) active:(border-primary-bg-l)",
      },
    },
  },
} satisfies UITemplate;

export type InputUI = typeof ui;

export function useInputUI(override: Partial<InputUI> = {}) {
  const merged = mergeComponentUI(override, ui);
  return tv(merged);
}
