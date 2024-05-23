import { mergeComponentUI, type UITemplate } from "../utils/ui";
import { tv } from "tailwind-variants";

const ui = {
  slots: {
    contentOverlay: "fixed inset-0 z-50 backdrop-blur-sm",
    content:
      "fixed left-1/2 top-1/2 z-50 text-neutral-fg-xh rounded grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border border-neutral-fg-m bg-neutral-bg-m",
    footer: "flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2",
    header: "flex flex-col gap-y-1.5 text-center sm:text-left",
    title: "",
    description: "",
    scrollOverlay:
      "fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
    scrollContent:
      "relative z-50 grid w-full max-w-lg my-8 gap-4 border border-border bg-neutral-bg-m p-6 shadow-lg duration-200 sm:rounded-lg md:w-full",
    scrollClose:
      "absolute top-3 right-3 p-0.5 transition-colors rounded-md hover:bg-secondary",
  },
} satisfies UITemplate;

export type DialogUI = typeof ui;

export function useDialogUI(override: Partial<DialogUI> = {}) {
  const merged = mergeComponentUI(override, ui);
  return tv(merged);
}
