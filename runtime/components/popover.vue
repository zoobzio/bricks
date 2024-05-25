<script lang="ts">
import { PopoverRoot, PopoverTrigger, PopoverContent } from "radix-vue";
import { useVModel } from "@vueuse/core";
import { usePopoverUI, type PopoverUI } from "../ui/popover.ui";

export interface PopoverProps {
  modelValue?: boolean;
  ui?: Partial<PopoverUI>;
}
</script>

<script setup lang="ts">
const props = defineProps<PopoverProps>();

const emits = defineEmits<{
  "update:modelValue": [boolean];
}>();

const modelValue = useVModel(props, "modelValue", emits, {
  passive: true,
});

const ui = usePopoverUI(props.ui)();
</script>

<template>
  <PopoverRoot v-model:open="modelValue">
    <PopoverTrigger as-child>
      <slot name="trigger" />
    </PopoverTrigger>
    <PopoverContent :class="ui" align="center" :side-offset="4">
      <slot name="content" />
    </PopoverContent>
  </PopoverRoot>
</template>
