<!--
  TODO: fix weird bug where ComboboxContent dismisses itself
-->

<script lang="ts">
import {
  ComboboxRoot,
  ComboboxInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxLabel,
  ComboboxItem,
  ComboboxSeparator,
} from "radix-vue";

export interface CommandProps<O extends Option> {
  placeholder?: string;
  empty?: string;
  items?: OptionData<O>[number][] | { [key: string]: OptionData<O>[number][] };
  ui?: Partial<CommandUI>;
}
</script>

<script setup lang="ts" generic="O extends Option">
const props = withDefaults(defineProps<CommandProps<O>>(), {
  placeholder: "Type a command or search...",
  empty: "No results.",
  items: () => [],
});

const emits = defineEmits<{
  select: [string | number];
}>();

const ui = useCommandUI(props.ui)();

const groups = computed(() => {
  return Array.isArray(props.items)
    ? {
        Results: props.items,
      }
    : props.items;
});

function handleSelect(option: string | number) {
  emits("select", option);
}
</script>

<template>
  <ComboboxRoot>
    <div :class="ui.inputWrapper()" cmdk-input-wrapper>
      <ZIcon icon="search" />
      <ComboboxInput auto-focus :class="ui.input()" />
    </div>
    <ComboboxContent :class="ui.list()" :dismissable="false">
      <div role="presentation">
        <ComboboxEmpty :class="ui.empty()">
          {{ empty }}
        </ComboboxEmpty>
        <template v-for="(g, i) in Object.keys(groups)" :key="g">
          <ComboboxGroup :class="ui.group()">
            <ComboboxLabel :class="ui.groupLabel()">
              {{ g }}
            </ComboboxLabel>
            <ComboboxItem
              v-for="r in groups[g]"
              :key="r.key"
              :value="r.key"
              :class="ui.item()"
              @select="() => handleSelect(r.key)"
            >
              {{ r.label }}
            </ComboboxItem>
          </ComboboxGroup>
          <ComboboxSeparator
            v-if="i !== Object.keys(groups).length - 1"
            :class="ui.separator()"
          />
        </template>
      </div>
    </ComboboxContent>
  </ComboboxRoot>
</template>
