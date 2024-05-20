export type EnumConfig = {
  [key: string]: Readonly<string[] | number[]>;
};

export function defineEnums<Enums extends EnumConfig>(enums: Enums) {
  return enums;
}
