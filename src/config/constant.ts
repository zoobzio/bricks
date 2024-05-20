export type ConstantConfig = {
  [key: string]: Readonly<string | number>;
};

export function defineConstants<Constants extends ConstantConfig>(
  constants: Constants,
) {
  return constants;
}
