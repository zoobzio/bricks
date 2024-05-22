import { mergeComponentUI, type UITemplate } from "../utils/ui";
import { tv } from "tailwind-variants";

const ui = {
  base: "rounded-shape-s flex items-center font-bold z-0 border border-transparent gap-spacing-xs focus-visible:(ring-2 ring-primary-bg-m ring-offset-2 ring-offset-neutral-bg-m outline-none z-1)",
  variants: {
    variant: {
      primary: "bg-primary-bg-m text-primary-fg-h",
      tonal: "bg-tonal-bg-m text-tonal-fg-m",
      outlined: "text-neutral-fg-h border-neutral-fg-l",
      text: "text-neutral-fg-h",
      destructive: "bg-error-bg-h text-error-fg-h",
    },
    size: {
      small: "gap-spacing-xs",
      medium: "gap-spacing-xs",
      large: "gap-spacing-xs",
    },
    icon: {
      true: "justify-center",
    },
    active: {
      primary: "active:(bg-primary-bg-l)",
      tonal: "active:(bg-tonal-bg-l text-tonal-fg-h)",
      outlined:
        "active:(bg-neutral-fg-m text-neutral-fg-xh border-neutral-fg-m)",
      text: "active:(bg-neutral-fg-l text-neutral-fg-2xh)",
      destructive: "active:(bg-error-bg-l)",
    },
    hover: {
      primary: "hover:(bg-primary-bg-h)",
      tonal: "hover:(bg-tonal-bg-h text-tonal-fg-h)",
      outlined: "hover:(bg-neutral-fg-l text-neutral-fg-xh)",
      text: "hover:(bg-neutral-fg-xl text-neutral-fg-xh)",
      destructive: "hover:(bg-error-bg-m)",
    },
    disabled: {
      primary: "disabled:(bg-neutral-bg-l text-neutral-fg-m)",
      tonal: "disabled:(bg-neutral-bg-l text-neutral-fg-m)",
      outlined: "disabled:(text-neutral-fg-l border-neutral-fg-l)",
      text: "disabled:(text-neutral-fg-l)",
      destructive: "disabled:(bg-neutral-bg-l text-neutral-fg-m)",
    },
  },
  compoundVariants: [
    {
      size: "large" as const, // tv expects string literals for variant keys
      icon: true,
      class: "pa-spacing-s",
    },
    {
      size: "large" as const,
      icon: false,
      class: "px-spacing-xl py-spacing-s",
    },
    {
      size: "medium" as const,
      icon: true,
      class: "pa-spacing-xs",
    },
    {
      size: "medium" as const,
      icon: false,
      class: "px-spacing-m py-spacing-2xs",
    },
    {
      size: "small" as const,
      icon: true,
      class: "pa-spacing-2xs",
    },
    {
      size: "small" as const,
      icon: false,
      class: "px-spacing-xs",
    },
    {
      variant: "text" as const,
      icon: true,
      class: "text-neutral-fg-m",
    },
    {
      variant: "text" as const,
      icon: false,
      class: "text-neutral-fg-h",
    },
  ],
} satisfies UITemplate;

export type ButtonUI = typeof ui;

export function useButtonUI(override: Partial<ButtonUI> = {}) {
  const merged = mergeComponentUI(ui, override);
  return tv(merged);
}
