export type Link = {
  label: string;
  to: string; // TODO add literal type for available paths
  target?: EnumDataItem<"targets">;
  external?: boolean;
  localized?: boolean;
};

export {};
