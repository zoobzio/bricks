import { defineComponentUI } from "../modules/ui/config";

export default defineComponentUI({
  base: "rounded-shape-s flex items-center font-bold z-0 border border-transparent gap-spacing-xs px-spacing-xs py-spacing-2xs focus-visible:(ring-2 ring-sr-primary outline-none z-1)",
  variants: {
    variant: {
      primary: "bg-sr-primary text-sr-on-primary",
      tonal: "bg-sr-primary-tonal text-sr-on-primary-tonal",
      outlined: "border-sr-outline",
      text: "",
      destructive: "bg-sr-error text-sr-on-error",
    },
    icon: {
      true: "justify-center aspect-square",
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
});
