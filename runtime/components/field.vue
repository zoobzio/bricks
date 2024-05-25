<script lang="ts">
import { ZodError } from "zod";
import type { CompositeValue, RecordValue } from "../utils/record";
import type { IconAlias } from "../utils/icon";
import type { FormField } from "../utils/form";
import { useFieldUI, type FieldUI } from "../ui/field.ui";
import Label from "./label.vue";
import Hint from "./hint.vue";
import Input from "./input.vue";
import Textarea from "./textarea.vue";
import Select from "./select.vue";
import Switch from "./switch.vue";
import Composite from "./composite.vue";

export interface FieldProps {
  modelValue?: RecordValue;
  field: FormField;
  error?: string;
  prependIcon?: IconAlias;
  appendIcon?: IconAlias;
  compact?: boolean;
  ui?: Partial<FieldUI>;
}
</script>

<script setup lang="ts">
const props = defineProps<FieldProps>();
const ui = useFieldUI(props.ui)();

const emits = defineEmits<{
  "update:modelValue": [RecordValue];
  "update:error": [string | undefined];
  focus: [];
  blur: [];
}>();

function handleUpdate(val?: RecordValue) {
  emits("update:modelValue", val || null);
}

function handleFocus() {
  emits("update:error", undefined);
  emits("focus");
}

function handleBlur() {
  try {
    props.field.schema.parse(props.modelValue);
  } catch (err) {
    if (err instanceof ZodError) {
      emits("update:error", err.issues[0].message);
    }
  }
  emits("blur");
}
</script>

<template>
  <div
    :style="`grid-column: span ${field.columns} / span ${field.columns};`"
    :class="ui"
  >
    <Label
      v-if="!compact"
      :for="field.key"
      :text="field.label"
      :icon="field.icon"
      :error="!!error"
    />
    <slot>
      <Input
        v-if="field.variant === 'text'"
        :model-value="modelValue as string"
        :name="field.key"
        :placeholder="field.placeholder"
        :error="!!error"
        @update:model-value="handleUpdate"
        @focus="handleFocus"
        @blur="handleBlur"
      />
      <Textarea
        v-else-if="field.variant === 'textarea'"
        :model-value="modelValue as string"
        :name="field.key"
        :placeholder="field.placeholder"
        :error="!!error"
        @update:model-value="handleUpdate"
        @focus="handleFocus"
        @blur="handleBlur"
      />
      <Input
        v-else-if="field.variant === 'number'"
        type="number"
        :model-value="modelValue as number"
        :name="field.key"
        :placeholder="field.placeholder"
        :error="!!error"
        @update:model-value="handleUpdate"
        @focus="handleFocus"
        @blur="handleBlur"
      />
      <Select
        v-else-if="field.variant === 'option'"
        :model-value="modelValue as string"
        :name="field.key"
        :placeholder="field.placeholder"
        :items="field.options"
        :error="!!error"
        @update:model-value="handleUpdate"
        @focus="handleFocus"
        @blur="handleBlur"
      />
      <Switch
        v-else-if="field.variant === 'switch'"
        :checked="modelValue as boolean"
        :name="field.key"
        :error="!!error"
        @update:checked="handleUpdate"
        @focus="handleFocus"
        @blur="handleBlur"
      />
      <Composite
        v-else-if="field.variant === 'composite'"
        :model-value="modelValue as CompositeValue"
        :children="field.children"
        @focus="handleFocus"
        @blur="handleBlur"
      />
    </slot>
    <Hint v-if="!compact" :text="field.hint" :error="error" />
  </div>
</template>
