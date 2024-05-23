import { mergeComponentUI, type UITemplate } from "../utils/ui";
import { tv } from "tailwind-variants";

const ui = {
  slots: {
    content:
      "relative z-50 max-h-96 min-w-32 overflow-hidden rounded-md border border-primary-bg-m text-neutral-fg-h ring-1 ring-primary-bg-m",
    viewport: "bg-neutral-bg-h",
    group: "pa-spacing-xs w-full",
    item: "relative flex w-full cursor-pointer select-none items-center rounded py-spacing-xs px-spacing-s gap-spacing-xs text-sm outline-none hover:bg-neutral-fg-l focus-visible:focus:bg-neutral-fg-l",
    indicator: "flex items-center justify-center",
    label: "py-spacing-xs px-spacing-s text-sm font-semibold",
    check: "h-4 w-4",
    button: "flex cursor-default items-center justify-center py-1",
    separator: "-mx-1 my-1 h-px bg-muted",
    trigger:
      "w-full flex items-center gap-spacing-xs h-sizing-input-m border-1 border-neutral-fg-l rounded pa-spacing-xs bg-neutral-bg-h outline-none focus-visible:focus:(ring-2 ring-offset-2 ring-offset-neutral-bg-m ring-primary-bg-m) hover:border-primary-bg-m",
    icon: "ml-auto text-neutral-fg-h",
    placeholder: "",
  },
  variants: {
    position: {
      popper: {
        content:
          "data-[side=bottom]:translate-y-spacing-xs data-[side=left]:-translate-x-spacing-xs data-[side=right]:translate-x-spacing-xs data-[side=top]:-translate-y-spacing-xs",
        viewport:
          "h-[--radix-select-trigger-height] w-full min-w-[--radix-select-trigger-width]",
      },
      "item-aligned": {
        content: "",
        viewport: "",
      },
    },
    disabled: {
      true: {
        item: "pointer-events-none opacity-50",
      },
    },
    error: {
      true: {
        trigger: "border-error-bg-m",
      },
    },
    active: {
      true: {
        placeholder: "text-neutral-fg-xh",
      },
      false: {
        placeholder: "text-neutral-fg-m",
      },
    },
  },
} satisfies UITemplate;

export type SelectUI = typeof ui;

export function useSelectUI(override: Partial<SelectUI> = {}) {
  const merged = mergeComponentUI(override, ui);
  return tv(merged);
}
