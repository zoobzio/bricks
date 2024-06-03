import type { ZodType } from "zod";
import type { RecordTemplate } from "./record";

export type FormField = {
  key: string;
  label: string;
  variant: EnumData<"recordVariants">;
  columns: EnumData<"columns">;
  schema: ZodType;
  icon?: IconAlias;
  placeholder?: string;
  hint?: string;
  options?: OptionData<Option>[number][];
  children?: FormField[];
};

export type FormConfig<R extends RecordTemplate> = {
  state: R;
  fields: FormField[];
};

export function defineForm<R extends RecordTemplate>(config: FormConfig<R>) {
  return () => config;
}
