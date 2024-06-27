import type { ICIcon } from "./types/ic.d";
import type { SimpleIcons } from "./types/simple";
import fa from "@iconify-json/circle-flags/icons.json";

export type IconAliasTemplate = {
  [alias: string]:
    | ICIcon
    | SimpleIcons
    | `i-circle-flags-${keyof typeof fa.icons}`;
};

export function defineIconAliases<A extends IconAliasTemplate>(aliases: A) {
  return aliases;
}
