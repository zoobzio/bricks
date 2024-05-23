import { mergeComponentUI, type UITemplate } from "../utils/ui";
import { tv } from "tailwind-variants";

const ui = {
  slots: {
    table: "w-full caption-bottom text-sm",
    thead: "[&_tr]:border-b",
    tbody: "[&_tr:last-child]:border-0",
    tr: "border-b border-neutral-fg-l hover:bg-neutral-bg-h data-[state=selected]:bg-neutral-bg-m",
    th: "h-12 px-spacing-s text-left align-middle font-bold text-neutral-fg-xh [&:has([role=checkbox])]:pr-0",
    thWrapper: "flex items-center gap-spacing-xs",
    td: "pa-spacing-s align-middle [&:has([role=checkbox])]:pr-0",
    tfoot:
      "border-t border-neutral-fg-l bg-neutral-bg-m font-medium [&>tr]:last:border-b-0",
  },
} satisfies UITemplate;

export type TableUI = typeof ui;

export function useTableUI(override: Partial<TableUI> = {}) {
  const merged = mergeComponentUI(override, ui);
  return tv(merged);
}
