<script lang="ts">
import { useVModel } from "@vueuse/core";

export const useInputUI = defineComponentUI({
  slots: {
    wrapper:
      "flex items-center rounded gap-spacing-xs px-spacing-xs py-spacing-2xs border-1 border-ui-outline text-ui-on-surface bg-ui-surface",
    input:
      "appearance-none outline-none bg-transparent grow text-neutral-fg-xh placeholder-neutral-fg-m",
    clear: "cursor-pointer text-neutral-fg-h hover:text-neutral-fg-xh",
  },
  variants: {
    error: {
      true: {
        wrapper: "text-error-bg-m border-error-bg-m",
      },
      false: {
        wrapper:
          "hover:(bg-ui-outline-variant) focus-within:(ring-2 ring-ui-primary)",
      },
    },
  },
});

export type InputUI = Parameters<typeof useInputUI>[0];

export interface InputProps {
  modelValue?: string | number;
  name?: string;
  placeholder?: string;
  type?: EnumDataItem<"inputTypes">;
  error?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  prependIcon?: IconAlias;
  appendIcon?: IconAlias;
  clearable?: boolean;
  ui?: InputUI;
}
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<InputProps>(), {
  size: "medium",
  clearable: () => true,
});

const emits = defineEmits<{
  "update:modelValue": [string | number | undefined];
  focus: [];
  blur: [];
}>();

const modelValue = useVModel(props, "modelValue", emits, {
  passive: true,
});

const ui = useInputUI(props.ui, {
  error: props.error,
});

function handleFocus() {
  emits("focus");
}

function handleBlur() {
  emits("blur");
}

function handleClear() {
  emits("update:modelValue", undefined);
}
</script>

<template>
  <div :class="ui.wrapper()">
    <slot name="prepend" :icon="prependIcon">
      <Icon v-if="prependIcon" :icon="prependIcon" />
    </slot>
    <input
      v-model="modelValue"
      :name="name"
      :type="type"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly || disabled"
      :class="ui.input()"
      @focus="handleFocus"
      @blur="handleBlur"
    />
    <Icon
      v-if="clearable && modelValue"
      icon="clear"
      :class="ui.clear()"
      @click="handleClear"
    />
    <slot name="append" :icon="appendIcon">
      <Icon v-if="appendIcon" :icon="appendIcon" />
    </slot>
  </div>
</template>
