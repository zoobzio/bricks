<script lang="ts">
import { Primitive } from "radix-vue";

export const useButtonUI = defineComponentUI({
  base: "rounded-shape-s flex items-center font-bold z-0 border border-transparent gap-spacing-xs px-spacing-xs py-spacing-2xs focus-visible:(ring-2 ring-ui-primary outline-none z-1)",
  variants: {
    variant: {
      primary: "bg-ui-primary text-ui-on-primary",
      tonal: "bg-ui-primary-tonal text-ui-on-primary-tonal",
      outlined: "border-ui-outline bg-ui-surface",
      text: "",
      destructive: "bg-ui-error text-ui-on-error",
    },
    icon: {
      true: "justify-center aspect-square",
    },
    hover: {
      primary: "hover:(bg-ui-primary-tonal text-ui-on-primary-tonal)",
      tonal: "hover:(bg-ui-primary text-ui-on-primary)",
      outlined: "hover:(bg-ui-outline-variant)",
      text: "hover:(bg-ui-outline-variant)",
      destructive: "hover:(bg-error-bg-m)",
    },
    disabled: {
      primary: "disabled:(opacity-40)",
      tonal: "disabled:(opacity-40)",
      outlined: "disabled:(opacity-40)",
      text: "disabled:(opacity-40)",
      destructive: "disabled:(opacity-40)",
    },
    grow: {
      true: "w-full",
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
  link?: Link;
  icon?: IconAlias;
  asIcon?: boolean;
  prependIcon?: IconAlias;
  appendIcon?: IconAlias;
  ui?: ButtonUI;
  extend?: string;
  shortcut?: string;
  grow?: boolean;
}
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<ButtonProps>(), {
  label: "",
  type: "button",
  disabled: false,
  variant: "primary",
  size: "medium",
  grow: false,
});

const button = ref<InstanceType<typeof Primitive> | null>(null);

const ui = computed(() =>
  useButtonUI(props.ui, {
    variant: props.variant,
    size: props.size,
    icon: !!props.icon || props.asIcon,
    active: !props.disabled ? props.variant : undefined,
    hover: !props.disabled ? props.variant : undefined,
    disabled: props.disabled ? props.variant : undefined,
    grow: props.grow,
    class: props.extend,
  })
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

if (props.shortcut) {
  const keys = useMagicKeys();
  const shortcut = keys[props.shortcut];
  watch(shortcut, (active) => {
    if (active && button.value) {
      button.value.$el.click();
    }
  });
}
</script>

<template>
  <Primitive
    :as="link && !disabled ? NuxtLink : 'button'"
    v-bind="link && !disabled ? linkProps : buttonProps"
    :disabled="disabled"
    :class="ui"
    ref="button"
  >
    <slot v-if="!icon" name="prepend">
      <Icon v-if="prependIcon" :icon="prependIcon" :size="size" />
    </slot>
    <slot v-if="!icon">
      {{ label }}
    </slot>
    <Icon v-else :icon="icon" :size="size" />
    <span v-if="!icon && $slots.append" class="ml-auto">
      <slot v-if="!icon" name="append">
        <Icon v-if="appendIcon" :icon="appendIcon" :size="size" />
      </slot>
    </span>
  </Primitive>
</template>
