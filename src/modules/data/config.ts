export type ConstantTemplate = {
  [key: string]: string | number;
};

export type EnumTemplate = {
  [key: string]: string[] | number[];
};

export type OptionTemplate = {
  [key: string]: {
    key: string | number;
    label: string;
  }[];
};

export interface NuxtData {
  <
    C extends ConstantTemplate,
    E extends EnumTemplate,
    O extends OptionTemplate,
  >(data: {
    constants: C;
    enums: E;
    options: O;
  }): typeof data;
}

export const defineNuxtData: NuxtData = (data) => data;
