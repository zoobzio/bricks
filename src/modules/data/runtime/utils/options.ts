// @ts-expect-error not available until runtime
import config from "#build/options.config.mjs";
import type { Options } from "#build/types/options.d.ts";

const options = config as Options;

export type Option = keyof Options;
export type OptionData<O extends Option> = Options[O];
export type OptionDataItem<O extends Option> = Options[O][number];

export function useOptions<O extends Option>(key: O) {
  return options[key];
}
