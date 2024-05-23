import type { EnumData } from "./enum";
import type { OptionData, Option } from "./options";
import type { IconAlias } from "./icon";

export type Value =
  | string
  | string[]
  | number
  | number[]
  | Date
  | Date[]
  | boolean
  | null
  | undefined;

export type CompositeValue = {
  [key: string]: Value | CompositeValue;
};

export type RecordValue = Value | CompositeValue;

export type RecordTemplate = {
  [key: string]: RecordValue;
} & {
  id?: number;
};

export type RecordKey<R extends RecordTemplate> = string & keyof R;

export interface RecordHeader<R extends RecordTemplate> {
  key: RecordKey<R>;
  label: string;
  variant: EnumData<"recordVariants">;
  icon?: IconAlias;
  options?: OptionData<Option>[number][];
}

export function useRecordValue<T extends RecordValue>(val?: RecordValue) {
  return val as T;
}
