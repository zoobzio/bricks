// @ts-expect-error not available until runtime
import config from "#build/enums.config.mjs";
import type { Enums } from "#build/types/enums.d.ts";

const enums = config as Enums;

export type Enum = keyof Enums;
export type EnumData<E extends Enum> = Enums[E][number];

export function useEnum<E extends Enum>(key: E) {
  return enums[key];
}
