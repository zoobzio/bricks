<script lang="ts">
import type { EnumData } from "../utils/enum";
import type { IconAlias } from "../utils/icon";
import Icon from "./icon.vue";
import { useVModel } from "@vueuse/core";
import { useInputUI, type InputUI } from "../ui/input.ui";

export interface InputProps {
  modelValue?: string | number;
  name?: string;
  placeholder?: string;
  type?: EnumData<"inputTypes">;
  size?: EnumData<"sizes">;
  error?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  prependIcon?: IconAlias;
  appendIcon?: IconAlias;
  clearable?: boolean;
  ui?: Partial<InputUI>;
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

const ui = useInputUI(props.ui)({
  size: props.size,
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
    <slot name="prepend" :icon="prependIcon" :size="size">
      <Icon v-if="prependIcon" :icon="prependIcon" :size="size" />
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
      :size="size"
      :class="ui.clear()"
      @click="handleClear"
    />
    <slot name="append" :icon="appendIcon" :size="size">
      <Icon v-if="appendIcon" :icon="appendIcon" :size="size" />
    </slot>
  </div>
</template>
