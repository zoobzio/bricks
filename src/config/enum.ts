export type EnumValue<K = unknown> = {
  key: K extends string ? K : string;
  label: string;
}

export type EnumConfig<Enum extends string> = {
  [E in Enum]: EnumValue[];
};

export function defineEnums<Enum extends string>(config: EnumConfig<Enum>) {
  return config;
}
