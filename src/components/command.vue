<script lang="ts">
import {
  ComboboxRoot,
  ComboboxInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxItem,
} from "radix-vue";

export const useCommandUI = defineComponentUI({
  slots: {
    wrapper: "flex flex-col gap-spacing-m",
    empty: "py-6 text-center text-sm",
    group: "overflow-hidden py-spacing-xs",
    groupLabel:
      "font-bold text-sm text-ui-on-surface opacity-75 px-spacing-xs py-spacing-2xs",
    content: "max-h-[300px] overflow-y-auto overflow-x-hidden",
    item: "relative flex items-center gap-spacing-xs text-nowrap cursor-pointer rounded outline-none px-spacing-xs py-spacing-2xs data-[highlighted]:(bg-ui-outline-variant) data-[disabled]:(opacity-50 pointer-events-none)",
  },
});

export type CommandUI = Parameters<typeof useCommandUI>[0];

export interface CommandProps<O extends OptionTemplate> {
  modelValue?: string;
  placeholder?: string;
  empty?: string;
  options: Readonly<O[]>;
  ui?: CommandUI;
}
</script>

<script setup lang="ts" generic="O extends OptionTemplate">
const { options, ...props } = withDefaults(defineProps<CommandProps<O>>(), {
  placeholder: "Type a command or search...",
  empty: "No results.",
});

const emits = defineEmits<{
  "update:modelValue": [string];
}>();

const modelValue = useVModel(props, "modelValue", emits);
const ui = useCommandUI(props.ui);
</script>

<template>
  <ComboboxRoot v-model="modelValue" :open="true" :class="ui.wrapper()">
    <ComboboxInput auto-focus as-child>
      <Input placeholder="Search for themes..." prepend-icon="search" />
    </ComboboxInput>
    <ComboboxContent :class="ui.content()" :dismissable="false">
      <ComboboxEmpty :class="ui.empty()">
        {{ empty }}
      </ComboboxEmpty>
      <ComboboxGroup :class="ui.group()">
        <ComboboxItem
          v-for="r in options"
          :key="r.key"
          :value="r.key"
          :class="ui.item()"
        >
          <slot name="item" :item="r" :active="modelValue" />
        </ComboboxItem>
      </ComboboxGroup>
    </ComboboxContent>
  </ComboboxRoot>
</template>
