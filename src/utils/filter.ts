export type Filter = EnumData<"filters">;

export type FilterPayload = {
  text?: string;
  textarea?: string;
  number?: {
    after?: number;
    before?: number;
  };
  option?: string;
  combo?: string[];
  switch?: boolean;
  composite?: {
    [key: string]: FilterPayload;
  };
};
