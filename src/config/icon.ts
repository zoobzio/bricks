export type IconConfig = {
  [key: string]: string;
};

export function defineIcons<Icons extends IconConfig>(icons: Icons) {
  return icons;
}

export function applyIcons<Icons extends IconConfig>(icons: Icons) {
  return <Key extends keyof typeof icons>(key: Key) => icons[key];
}
