export type ConstantTemplate = Record<string, string | number>;

export function defineConstants<Constants extends ConstantTemplate>(config: Constants) {
  return config;
}
