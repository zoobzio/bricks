import { mergeComponentUI, type UITemplate } from "../utils/ui";
import { tv } from "tailwind-variants";

const ui = {
  slots: {
    textarea:
      "appearance-none outline-none bg-transparent grow text-neutral-fg-xh h-auto placeholder-neutral-fg-m",
    wrapper:
      "flex items-center gap-spacing-xs rounded pl-spacing-xs pt-spacing-xs border-1 border-neutral-fg-l text-fs-body-m text-neutral-fg-m bg-neutral-bg-h",
    clear: "cursor-pointer text-neutral-fg-h hover:text-neutral-fg-xh",
  },
  variants: {
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

export type TextareaUI = typeof ui;

export function useTextareaUI(override: Partial<TextareaUI> = {}) {
  const merged = mergeComponentUI(override, ui);
  return tv(merged);
}
