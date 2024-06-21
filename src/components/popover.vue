<script lang="ts">
import {
  PopoverContent,
  PopoverPortal,
  PopoverRoot,
  PopoverTrigger,
} from "radix-vue";

const usePopoverUI = defineComponentUI({
  slots: {
    content: "bg-ui-surface-container border border-ui-outline rounded",
  },
});

export type PopoverUI = Parameters<typeof usePopoverUI>[0];

export interface PopoverProps {
  modelValue?: boolean;
  ui?: PopoverUI;
}
</script>

<script setup lang="ts">
const props = defineProps<PopoverProps>();
const emits = defineEmits<{
  "update:modelValue": [boolean];
}>();
const ui = usePopoverUI(props.ui);
const modelValue = useVModel(props, "modelValue", emits, {
  passive: true,
});
</script>

<template>
  <PopoverRoot v-model:open="modelValue">
    <PopoverTrigger as-child>
      <slot name="trigger" />
    </PopoverTrigger>
    <PopoverPortal>
      <PopoverContent
        :class="ui.content()"
        align="center"
        side="bottom"
        :side-offset="4"
        modal
      >
        <slot />
      </PopoverContent>
    </PopoverPortal>
  </PopoverRoot>
</template>
