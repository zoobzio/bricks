<script lang="ts">
import type { FormField } from "../utils/form";
import type { CompositeValue } from "../utils/record";
import { useCompositeUI, type CompositeUI } from "../ui/composite.ui";

export interface CompositeProps {
  modelValue: CompositeValue;
  error?: string;
  children: FormField["children"];
  ui?: Partial<CompositeUI>;
}
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<CompositeProps>(), {
  children: () => [],
});

const emits = defineEmits<{
  "update:modelValue": [CompositeValue];
  focus: [];
  blur: [];
}>();

const ui = useCompositeUI(props.ui)();

const modelValue = useVModel(props, "modelValue", emits, {
  passive: true,
});

const errors = ref<Record<string, string | undefined>>({});

function handleFocus() {
  emits("focus");
}

function handleBlur() {
  emits("blur");
}
</script>

<template>
  <div :class="ui">
    <template v-for="field in children" :key="field.key">
      <slot :name="field.key" :ui="ui">
        <ZField
          v-model="modelValue[field.key]"
          v-model:error="errors[field.key]"
          :field="field"
          @focus="handleFocus"
          @blur="handleBlur"
        />
      </slot>
    </template>
  </div>
</template>
