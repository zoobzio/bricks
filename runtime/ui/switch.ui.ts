import { mergeComponentUI, type UITemplate } from "../utils/ui";
import { tv } from "tailwind-variants";

const ui = {
  slots: {
    wrapper: "h-sizing-input-m flex items-center gap-spacing-xs",
    root: "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-neutral-fg-l bg-neutral-fg-l focus-visible:focus:(outline-none ring-2 ring-primary-bg-m ring-offset-2 ring-offset-neutral-bg-m) disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:(bg-primary-bg-m border-primary-bg-m)",
    toggle:
      "pointer-events-none block h-5 w-5 rounded-full bg-neutral-bg-m ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0",
  },
} satisfies UITemplate;

export type SwitchUI = typeof ui;

export function useSwitchUI(override: Partial<SwitchUI> = {}) {
  const merged = mergeComponentUI(override, ui);
  return tv(merged);
}
