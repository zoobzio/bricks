// @ts-expect-error 
import enums from "#build/enums.config.mjs";

export type Enum = keyof typeof enums;

export function useEnum(key: Enum) {
  return enums[key];
}
