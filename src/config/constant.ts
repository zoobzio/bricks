export type ConstantConfig = {
  [key: string]: string | number;
};

export function defineConstants<Constants extends ConstantConfig>(
  constants: Constants,
) {
  return constants;
}

export function applyConstants<Constants extends ConstantConfig>(
  constants: Constants,
) {
  return <Key extends keyof typeof constants>(key: Key) => constants[key];
}
