export type IconConfig = {
  [key: string]: Readonly<string>;
};

export function defineIcons<Icons extends IconConfig>(icons: Icons) {
  return icons;
}
