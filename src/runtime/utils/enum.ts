// @ts-expect-error
import config from "#build/enums.config.mjs";
import type { Enums as Config } from "#build/types/enums.d.ts";
import { defu } from "defu";
import { applyEnums, defineEnums } from "../../config";

const system = defineEnums({
  // common
  commonSize: ["small", "medium", "large"],
  // buttons
  buttonTypes: ["button", "submit", "reset"],
  buttonVariants: ["primary", "tonal", "outlined", "text", "destructive"],
} as const);
const enums = defu(config as Config, system);

export type Enums = typeof system;
export type Enum = keyof Enums;
export type EnumData<E extends Enum> = Enums[E][number];

export const useEnum = applyEnums(enums as Enums);
