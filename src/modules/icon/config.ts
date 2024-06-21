import type { ICIcon } from "./types/ic.d";
import { icons } from "@iconify-json/circle-flags/icons.json";

export type IconAliasTemplate = {
  [alias: string]: ICIcon | `i-circle-flags-${keyof typeof icons}`;
};

export function defineIconAliases<A extends IconAliasTemplate>(aliases: A) {
  return aliases;
}
