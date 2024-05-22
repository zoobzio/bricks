export type EnumConfig = {
  [key: string]: string[] | number[];
};

export function defineEnums<Enums extends EnumConfig>(enums: Enums) {
  return enums;
}
