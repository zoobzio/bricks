// @ts-expect-error 
import constants from "#build/constants.config.mjs";

export type Constant = keyof typeof constants;

export function useConstant(key: Constant) {
  return constants[key];
}
