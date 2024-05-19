// @ts-expect-error
import icons from "#build/icons.config.mjs";
import type { Icons } from "#build/types/icons.d.ts";
import { applyIcons } from "../../config";

type IconAlias = keyof Icons;

export type { Icons, IconAlias };
export const useIcon = applyIcons(icons as Icons);
