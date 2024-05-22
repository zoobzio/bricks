export type ConstantConfig = {
  [key: string]: string | number;
};

export function defineConstants<Constants extends ConstantConfig>(
  constants: Constants,
) {
  return constants;
}
