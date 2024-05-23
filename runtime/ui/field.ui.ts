import { mergeComponentUI, type UITemplate } from "../utils/ui";
import { tv } from "tailwind-variants";

const ui = {
  base: "flex flex-col gap-spacing-xs",
} satisfies UITemplate;

export type FieldUI = typeof ui;

export function useFieldUI(override: Partial<FieldUI> = {}) {
  const merged = mergeComponentUI(override, ui);
  return tv(merged);
}
