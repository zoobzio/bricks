// @ts-expect-error
import icons from "#build/icons.config.mjs";
import type { Icons } from "#build/types/icons.d.ts";
import { applyIcons } from "../../src/config";

type Icon = keyof Icons;

export type { Icons, Icon };
export const useIcon = applyIcons(icons as Icons);
