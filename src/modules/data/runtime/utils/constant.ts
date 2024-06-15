import config from "#build/constants.config.mjs";
import type { Constants } from "#build/types/constants.d.ts";
import type { ConstantConfig } from "../../config";

const constants = config as Constants;

export type ConstantTemplate = ConstantConfig[keyof ConstantConfig];
export type Constant = keyof Constants;
export type ConstantData<C extends Constant> = Constants[C];

export function useConstant<C extends Constant>(key: C) {
  return constants[key];
}
