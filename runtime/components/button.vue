<script lang="ts">
import type { EnumData } from "../utils/enum";
import type { IconAlias } from "../utils/icon";
import Icon from "./icon.vue";
import { Primitive } from "radix-vue";
import { tv } from "tailwind-variants";
import { defineComponentTheme } from "../utils/theme";

const theme = {
  button: tv({
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
        size: "large",
        icon: true,
        class: "pa-spacing-s",
      },
      {
        size: "large",
        icon: false,
        class: "px-spacing-xl py-spacing-s",
      },
      {
        size: "medium",
        icon: true,
        class: "pa-spacing-xs",
      },
      {
        size: "medium",
        icon: false,
        class: "px-spacing-m py-spacing-2xs",
      },
      {
        size: "small",
        icon: true,
        class: "pa-spacing-2xs",
      },
      {
        size: "small",
        icon: false,
        class: "px-spacing-xs",
      },
      {
        variant: "text",
        icon: true,
        class: "text-neutral-fg-m",
      },
      {
        variant: "text",
        icon: false,
        class: "text-neutral-fg-h",
      },
    ],
  }),
};

export type ButtonTheme = typeof theme;
export type ButtonType = EnumData<"buttonTypes">;
export type ButtonVariant = EnumData<"buttonVariants">;
export type ButtonSize = EnumData<"commonSize">;

export interface ButtonProps {
  label?: string;
  type?: ButtonType;
  disabled?: boolean;
  variant?: ButtonVariant;
  size?: ButtonSize;
  // extract this type & include strongly-typed urls for `to` field
  link?: {
    label: string;
    to: string;
    icon?: IconAlias;
    target?: "_blank" | "_self";
    external?: boolean;
  };
  icon?: IconAlias;
  asIcon?: boolean;
  prependIcon?: IconAlias;
  appendIcon?: IconAlias;
  theme?: Partial<ButtonTheme>;
}

export const useButtonTheme = defineComponentTheme(theme);
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<ButtonProps>(), {
  label: "",
  type: "button",
  disabled: false,
  variant: "primary",
  size: "medium",
});

const theme = useButtonTheme(props.theme);

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
    :class="
      theme.button({
        variant: props.variant,
        size: props.size,
        icon: !!props.icon || props.asIcon,
        active: !props.disabled ? props.variant : undefined,
        hover: !props.disabled ? props.variant : undefined,
        disabled: props.disabled ? props.variant : undefined,
      })
    "
  >
    <slot v-if="!icon" name="prepend">
      <Icon v-if="prependIcon" :icon="prependIcon" :size="size" />
    </slot>
    <slot v-if="!icon">
      {{ label }}
    </slot>
    <Icon v-else :icon="icon" :size="size" />
    <slot v-if="!icon" name="append">
      <Icon v-if="appendIcon" :icon="appendIcon" :size="size" />
    </slot>
  </Primitive>
</template>
