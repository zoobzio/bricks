// @ts-expect-error
import constants from "#build/constants.config.mjs";
import type { Constants } from "#build/types/constants.d.ts";
import { applyConstants, defineConstants } from "../../config";

const systemConstants = defineConstants({
  // add some of these
} as const);

export type Constant = keyof Constants;
export type SystemConstants = typeof systemConstants;
export type SystemConstant = keyof SystemConstants;
export type ConstantData<C extends Constant> = Constants[C];
export type SystemConstantData<S extends SystemConstant> = SystemConstants[S];

export const useConstant = applyConstants(constants as Constants);
export const useSystemConstant = applyConstants(systemConstants);
