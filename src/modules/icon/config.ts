import type fa6 from "@iconify-json/fa6-solid/icons.json";

// TODO look into recursively registering this type based on available icon sets rather than doing it manually
export type IconClass = `i-fa6-solid-${keyof typeof fa6.icons}`;

export type IconAliasTemplate = {
  [alias: string]: IconClass;
};

export function defineIconAliases<A extends IconAliasTemplate>(aliases: A) {
  return aliases;
}
