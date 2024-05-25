<script lang="ts">
import { useVModel } from "@vueuse/core";
import { useTextareaUI, type TextareaUI } from "../ui/textarea.ui";
import type { IconAlias } from "../utils/icon";

export interface TextareaProps {
  modelValue?: string;
  name?: string;
  label?: string;
  error?: boolean;
  placeholder?: string;
  appendIcon?: IconAlias;
  prependIcon?: IconAlias;
  ui?: Partial<TextareaUI>;
}
</script>

<script setup lang="ts">
const props = defineProps<TextareaProps>();

const emits = defineEmits<{
  "update:modelValue": [string];
  focus: [];
  blur: [];
}>();

const modelValue = useVModel(props, "modelValue", emits, {
  passive: true,
});

const ui = useTextareaUI(props.ui)();

function handleFocus() {
  emits("focus");
}

function handleBlur() {
  emits("blur");
}
</script>

<template>
  <div :class="ui.wrapper({ error })">
    <slot name="prepend" :icon="prependIcon">
      <ZIcon v-if="prependIcon" :icon="prependIcon" />
    </slot>
    <textarea
      v-model="modelValue"
      :class="ui.textarea()"
      :name="name"
      :placeholder="placeholder"
      rows="4"
      @focus="handleFocus"
      @blur="handleBlur"
    />
    <slot name="append" :icon="prependIcon">
      <ZIcon v-if="prependIcon" :icon="prependIcon" />
    </slot>
  </div>
</template>
