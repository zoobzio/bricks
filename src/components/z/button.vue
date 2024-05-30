<script lang="ts">
import { Primitive } from "radix-vue";

export const useButtonUI = defineComponentUI({
  base: "rounded-shape-s flex items-center font-bold z-0 border border-transparent gap-spacing-xs focus-visible:(ring-2 ring-primary-bg-m ring-offset-2 ring-offset-neutral-bg-m outline-none z-1)",
  variants: {
    variant: {
      primary: "bg-primary-bg-m text-primary-fg-h",
      tonal: "bg-tonal-bg-m text-tonal-fg-m",
      outlined: "text-neutral-fg-h border-neutral-fg-l",
      text: "text-neutral-fg-h",
      destructive: "bg-error-bg-h text-error-fg-h ",
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
      size: "large" as const,
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
});

export type ButtonUI = Parameters<typeof useButtonUI>[0];
export type ButtonType = EnumDataItem<"buttonTypes">;
export type ButtonVariant = EnumDataItem<"buttonVariants">;
export type ButtonSize = EnumDataItem<"sizes">;

export interface ButtonProps {
  label?: string;
  type?: ButtonType;
  disabled?: boolean;
  variant?: ButtonVariant;
  size?: ButtonSize;
  link?: {
    label: string;
    to: string;
    target?: EnumData<"targets">;
    icon?: IconAlias;
    external?: boolean;
  };
  icon?: IconAlias;
  asIcon?: boolean;
  prependIcon?: IconAlias;
  appendIcon?: IconAlias;
  ui?: ButtonUI;
}
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<ButtonProps>(), {
  label: "",
  type: "button",
  disabled: false,
  variant: "primary",
  size: "medium",
});

const ui = useButtonUI(props.ui, {
  variant: props.variant,
  size: props.size,
  icon: !!props.icon || props.asIcon,
  active: !props.disabled ? props.variant : undefined,
  hover: !props.disabled ? props.variant : undefined,
  disabled: props.disabled ? props.variant : undefined,
});

const buttonProps = {
  as: "button",
  type: props.type,
};

const linkProps = {
  to: props.link?.to,
  target: props.link?.target,
  external: props.link?.external,
};

const NuxtLink = defineNuxtLink({});
</script>

<template>
  <Primitive
    :as="!link ? 'button' : NuxtLink"
    v-bind="!link ? buttonProps : linkProps"
    :disabled="disabled"
    :class="ui"
  >
    <slot v-if="!icon" name="prepend">
      <ZIcon v-if="prependIcon" :icon="prependIcon" :size="size" />
    </slot>
    <slot v-if="!icon">
      {{ label }}
    </slot>
    <ZIcon v-else :icon="icon" :size="size" />
    <slot v-if="!icon" name="append">
      <ZIcon v-if="appendIcon" :icon="appendIcon" :size="size" />
    </slot>
  </Primitive>
</template>
