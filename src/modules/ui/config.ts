import { createDefu } from "defu";
import { tv } from "tailwind-variants";
import type {
  TVVariants,
  TVCompoundVariants,
  TVCompoundSlots,
  TVReturnType,
  TVProps,
} from "tailwind-variants";
import type { ClassNameValue } from "tailwind-merge";

type ClassValue = ClassNameValue;
type TVSlots = Record<string, ClassValue> | undefined;
type TVIgnore = Record<string, never>;

export type TVOverride<
  V extends TVVariants<S, B>,
  B extends ClassValue = undefined,
  S extends TVSlots = undefined,
> = {
  slots?: S extends TVSlots
    ? {
        [KS in keyof S]?: ClassValue;
      }
    : never;
  variants?: {
    [KV in keyof V]?: {
      [OKV in keyof V[KV]]: S extends TVSlots
        ? {
            [KS in keyof S]?: ClassValue; // override any slot, not just defaults
          }
        : ClassValue;
    };
  };
  compoundVariants?: TVCompoundVariants<V, S, B, TVIgnore, TVIgnore>;
  compoundSlots?: S extends TVSlots ? TVCompoundSlots<V, S, B> : never;
};

export type ComponentUI = {
  <
    V extends TVVariants<S, B>,
    B extends ClassValue = undefined,
    S extends TVSlots = undefined,
  >(template: {
    base?: B;
    slots?: S;
    variants?: V;
    compoundVariants?: TVCompoundVariants<V, S, B, TVIgnore, TVIgnore>;
    compoundSlots?: TVCompoundSlots<V, S, B>;
  }): (
    override?: TVOverride<V, B, S>,
    props?: TVProps<V, S, TVIgnore, TVIgnore, TVIgnore>,
  ) => ComputedRef<
    ReturnType<TVReturnType<V, S, B, TVIgnore, TVIgnore, TVIgnore>>
  >;
};

// right now, supplying and compoundSlots or compoundVariants replaces all items
// TODO add logic to merge arrays based on slots/variants to allow explicit override
export const mergeComponentUI = createDefu((obj, key, value) => {
  // compound slots
  if (
    key === "compoundSlots" &&
    Array.isArray(obj[key]) &&
    Array.isArray(value)
  ) {
    obj[key] = value;
    return true;
  }
  // compound variants
  if (
    key === "compoundVariants" &&
    Array.isArray(obj[key]) &&
    Array.isArray(value)
  ) {
    obj[key] = value;
    return true;
  }
});

export const defineComponentUI: ComponentUI = (template) => (override, props) =>
  // @ts-expect-error the `override` prop is adding `nullish` types somewhere which `defu` thinks is a conflict
  computed(() => tv(mergeComponentUI(override, template))(props));
