import type {
  ICIcon
} from "./types/ic.d"

export type IconAliasTemplate = {
  [alias: string]: ICIcon;
};

export function defineIconAliases<A extends IconAliasTemplate>(aliases: A) {
  return aliases;
}
