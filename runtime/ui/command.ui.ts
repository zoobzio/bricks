import { mergeComponentUI, type UITemplate } from "../utils/ui";
import { tv } from "tailwind-variants";

const ui = {
  slots: {
    dialogContent: "overflow-hidden p-0",
    dialogCommand:
      "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-neutral-fg-m [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5",
    empty: "py-6 text-center text-sm",
    group:
      "overflow-hidden p-1 text-neutral-fg-xh [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-neutral-fg-m",
    groupLabel: "px-2 py-1.5 text-xs font-medium text-neutral-fg-m",
    inputWrapper:
      "flex items-center gap-spacing-xs border-b border-neutral-fg-m px-3",
    input:
      "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-neutral-fg-m disabled:cursor-not-allowed disabled:opacity-50",
    list: "max-h-[300px] overflow-y-auto overflow-x-hidden",
    item: "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[highlighted]:bg-neutral-fg-l data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
    separator: "-mx-1 h-px bg-neutral-fg-m",
    shortcut: "ml-auto text-xs tracking-widest text-neutral-fg-m",
    wrapper:
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-neutral-bg-m text-neutral-fg-h",
  },
} satisfies UITemplate;

export type CommandUI = typeof ui;

export function useCommandUI(override: Partial<CommandUI> = {}) {
  const merged = mergeComponentUI(override, ui);
  return tv(merged);
}
