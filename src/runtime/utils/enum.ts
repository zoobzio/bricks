// @ts-expect-error
import enums from "#build/enums.config.mjs";
import type { Enums } from "#build/types/enums.d.ts";
import { applyEnums } from "../../src/config";

type Enum = keyof Enums;

export type { Enums, Enum };
export const useEnum = applyEnums(enums as Enums);
