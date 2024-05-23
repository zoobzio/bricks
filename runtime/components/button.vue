<script lang="ts">
import Icon from "./icon.vue";
import { Primitive } from "radix-vue";

export type ButtonType = EnumData<"buttonTypes">;
export type ButtonVariant = EnumData<"buttonVariants">;
export type ButtonSize = EnumData<"sizes">;

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
  ui?: Partial<ButtonUI>;
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

const ui = useButtonUI(props.ui)({
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
