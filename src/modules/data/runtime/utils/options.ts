import config from "#build/options.config.mjs";
import type { Options } from "#build/types/options.d.ts";
import type { OptionConfig } from "../../config";

const options = config as Options;

export type OptionTemplate = OptionConfig[keyof OptionConfig][number];
export type Option = keyof Options;
export type OptionData<O extends Option> = Options[O];
export type OptionDataItem<O extends Option> = Options[O][number];

export function useOptions<O extends Option>(key: O) {
  return options[key];
}
