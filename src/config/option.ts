export type OptionTemplate = {
  key: string;
  label: string;
};

export type OptionConfig = {
  [key: string]: OptionTemplate[];
};

export function defineOptions<Options extends OptionConfig>(options: Options) {
  return options;
}

export function applyOptions<Options extends OptionConfig>(options: Options) {
  return <Key extends keyof typeof options>(key: Key) => options[key];
}
