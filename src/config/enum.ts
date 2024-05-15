export type EnumConfig = {
  [key: string]: string[] | number[];
};

export function defineEnums<Enums extends EnumConfig>(enums: Enums) {
  return enums;
}

export function applyEnums<Enums extends EnumConfig>(enums: Enums) {
  return <Key extends keyof typeof enums>(key: Key) => enums[key];
}
