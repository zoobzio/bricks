import { defu } from "defu";
import type { ClassNameValue } from "tailwind-merge";

export type ClassValue = ClassNameValue | ClassNameValue[];

// WIP - may not cover all use cases
export type UITemplate = {
  base?: ClassValue;
  slots?: {
    [key: string]: ClassValue;
  };
  variants?: {
    [key: string]: {
      [key: string]: ClassValue | {
        [key: string]: ClassValue;
      }
    }
  };
  compoundSlots?: ({
    slots: string[];
    class: ClassValue;
  } & {
    [key: string]: Readonly<string> | boolean;
  })[]
  compoundVariants?: ({
    class: ClassValue;
  } & {
    [key: string]: Readonly<string> | boolean | undefined;
  })[];
}

export function mergeComponentUI<UI extends UITemplate>(config: UI, override: Partial<UI> = {}) {
  return defu(override, config) as UI;
}