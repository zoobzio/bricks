// @ts-expect-error
import options from "#build/options.config.mjs";
import type { Options } from "#build/types/options.d.ts";
import { applyOptions } from "../../config";

type Option = keyof Options;

export type { Options, Option };
export const useOptions = applyOptions(options as Options);
