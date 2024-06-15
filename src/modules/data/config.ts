export type ConstantConfig = {
  [key: string]: string | number;
};

export type EnumConfig = {
  [key: string]: string[] | number[];
};

export type OptionConfig = {
  [key: string]: {
    key: string | number;
    label: string;
  }[];
};

export interface NuxtData {
  <
    C extends ConstantConfig,
    E extends EnumConfig,
    O extends OptionConfig
  >(data: {
    constants: C;
    enums: E;
    options: O;
  }): typeof data;
}

export const defineNuxtData: NuxtData = (data) => data;
