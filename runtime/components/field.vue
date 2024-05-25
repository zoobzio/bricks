<script lang="ts">
import { ZodError } from "zod";
import type { CompositeValue, RecordValue } from "../utils/record";
import type { IconAlias } from "../utils/icon";
import type { FormField } from "../utils/form";
import { useFieldUI, type FieldUI } from "../ui/field.ui";

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
    <ZLabel
      v-if="!compact"
      :for="field.key"
      :text="field.label"
      :icon="field.icon"
      :error="!!error"
    />
    <slot>
      <ZInput
        v-if="field.variant === 'text'"
        :model-value="modelValue as string"
        :name="field.key"
        :placeholder="field.placeholder"
        :error="!!error"
        @update:model-value="handleUpdate"
        @focus="handleFocus"
        @blur="handleBlur"
      />
      <ZTextarea
        v-else-if="field.variant === 'textarea'"
        :model-value="modelValue as string"
        :name="field.key"
        :placeholder="field.placeholder"
        :error="!!error"
        @update:model-value="handleUpdate"
        @focus="handleFocus"
        @blur="handleBlur"
      />
      <ZInput
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
      <ZSelect
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
      <ZSwitch
        v-else-if="field.variant === 'switch'"
        :checked="modelValue as boolean"
        :name="field.key"
        :error="!!error"
        @update:checked="handleUpdate"
        @focus="handleFocus"
        @blur="handleBlur"
      />
      <ZComposite
        v-else-if="field.variant === 'composite'"
        :model-value="modelValue as CompositeValue"
        :children="field.children"
        @focus="handleFocus"
        @blur="handleBlur"
      />
    </slot>
    <ZHint v-if="!compact" :text="field.hint" :error="error" />
  </div>
</template>
