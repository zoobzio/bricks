import { mergeComponentUI, type UITemplate } from "../utils/ui";
import { tv } from "tailwind-variants";

const ui = {
  base: "prose",
} satisfies UITemplate;

export type ArticleUI = typeof ui;

export function useArticleUI(override: Partial<ArticleUI> = {}) {
  const merged = mergeComponentUI(override, ui);
  return tv(merged);
}
