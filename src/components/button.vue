<script lang="ts">
import { Primitive } from "radix-vue";

export const useButtonUI = defineComponentUI({
  base: "rounded-shape-s flex items-center font-bold z-0 border border-transparent gap-spacing-xs px-spacing-xs py-spacing-2xs focus-visible:(ring-2 ring-ui-primary outline-none z-1)",
  variants: {
    variant: {
      primary: "bg-ui-primary text-ui-on-primary",
      tonal: "bg-ui-primary-tonal text-ui-on-primary-tonal",
      outlined: "border-ui-outline",
      text: "",
      destructive: "bg-ui-error text-ui-on-error",
    },
    icon: {
      true: "justify-center aspect-square",
    },
    hover: {
      primary: "hover:(bg-primary-bg-h)",
      tonal: "hover:(bg-tonal-bg-h text-tonal-fg-h)",
      outlined: "hover:(bg-ui-outline-variant)",
      text: "hover:(bg-ui-outline-variant)",
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

const ui = computed(() =>
  useButtonUI(props.ui, {
    variant: props.variant,
    size: props.size,
    icon: !!props.icon || props.asIcon,
    active: !props.disabled ? props.variant : undefined,
    hover: !props.disabled ? props.variant : undefined,
    disabled: props.disabled ? props.variant : undefined,
  }),
);

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
