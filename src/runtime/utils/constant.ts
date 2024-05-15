// @ts-expect-error
import constants from "#build/constants.config.mjs";
import type { Constants } from "#build/types/constants.d.ts";
import { applyConstants } from "../../src/config";

type Constant = keyof Constants;

export type { Constants, Constant };
export const useConstant = applyConstants(constants as Constants);
