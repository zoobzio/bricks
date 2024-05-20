export type OptionTemplate = {
  key: string | number;
  label: string;
};

export type OptionConfig = {
  [key: string]: Readonly<OptionTemplate[]>;
};

export function defineOptions<Options extends OptionConfig>(options: Options) {
  return options;
}
