import { mergeComponentUI, type UITemplate } from "../utils/ui";
import { tv } from "tailwind-variants";

const ui = {
  slots: {
    content:
      "z-50 min-w-32 overflow-hidden rounded-md border border-neutral-fg-l bg-neutral-bg-m p-1 text-neutral-fg-xh shadow-md translate-y-spacing-xs",
    label: "p-spacing-xs text-neutral-fg-h text-sm font-semibold",
    separator: "-mx-1 my-1 h-px bg-neutral-fg-l",
    item: "relative flex cursor-pointer rounded items-center py-spacing-xs px-spacing-s text-sm outline-none hover:bg-neutral-fg-l focus:bg-neutral-fg-l active:bg-neutral-fg-m data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
    list: "pa-spacing-xs",
    shortcut: "ml-auto text-xs tracking-widest opacity-60",
  },
} satisfies UITemplate;

export type MenuUI = typeof ui;

export function useMenuUI(override: Partial<MenuUI> = {}) {
  const merged = mergeComponentUI(override, ui);
  return tv(merged);
}
