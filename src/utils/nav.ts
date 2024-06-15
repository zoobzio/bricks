export type Link = {
  label: string;
  to: string; // TODO add literal type for available paths
  target?: EnumDataItem<"targets">;
  icon?: IconAlias;
  external?: boolean;
};

export {};
