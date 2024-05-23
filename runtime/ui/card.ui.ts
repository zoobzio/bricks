import { mergeComponentUI, type UITemplate } from "../utils/ui";
import { tv } from "tailwind-variants";

const ui = {
  slots: {
    root: "bg-neutral-bg-m text-neutral-fg-xh w-full",
    content: "",
    title: "text-2xl font-semibold leading-none tracking-tight",
    description: "text-sm text-neutral-fg-m",
    header: "",
    footer: "flex items-center",
  },
} satisfies UITemplate;

export type CardUI = typeof ui;

export function useCardUI(override: Partial<CardUI> = {}) {
  const merged = mergeComponentUI(override, ui);
  return tv(merged);
}
