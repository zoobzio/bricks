export type IconConfig<Alias extends string> = {
  [A in Alias]: string; // consider string literal type from available icon classes
}

export function defineIcons<Alias extends string>(config: IconConfig<Alias>) {
  return config;
}
