<script lang="ts">
import {
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionRoot,
  AccordionTrigger,
} from "radix-vue";

export const useAccordionUI = defineComponentUI({
  slots: {
    wrapper: "",
    item: "",
    trigger:
      "flex items-center gap-spacing-xs py-spacing-xs font-bold text-ui-on-surface w-full cursor-pointer outline-none focus-visible:(ring-2 ring-ui-primary rounded) group",
    content: "",
    indicator:
      "ml-auto text-ui-on-surface opacity-60 group-hover:(opacity-100)",
  },
});

export type AccordionUI = Parameters<typeof useAccordionUI>[0];

export interface AccordionGroup extends OptionTemplate {
  icon?: IconAlias;
}

export interface AccordionProps<G extends AccordionGroup> {
  modelValue: G["key"][];
  groups: G[];
  ui?: AccordionUI;
  extend?: {
    [E in "wrapper" | "item" | "trigger" | "content" | "indicator"]?: string;
  };
}
</script>

<script setup lang="ts" generic="G extends AccordionGroup">
const props = defineProps<AccordionProps<G>>();
const emits = defineEmits<{
  "update:modelValue": [G["key"][]];
}>();
const ui = useAccordionUI(props.ui);
const modelValue = useVModel(props, "modelValue", emits);
</script>

<template>
  <AccordionRoot
    v-model="modelValue"
    :class="ui.wrapper({ class: extend?.wrapper })"
  >
    <AccordionItem
      v-for="g in groups"
      :key="g.key"
      :value="g.key"
      :class="ui.item({ class: extend?.item })"
    >
      <AccordionHeader>
        <AccordionTrigger :class="ui.trigger({ class: extend?.trigger })">
          <Icon v-if="g.icon" :icon="g.icon" />
          {{ g.label }}
          <Icon
            :class="ui.indicator({ class: extend?.indicator })"
            :icon="modelValue.includes(g.key) ? 'down' : 'right'"
          />
        </AccordionTrigger>
      </AccordionHeader>
      <AccordionContent :class="ui.content({ class: extend?.content })">
        <slot name="content" :group="g" />
      </AccordionContent>
    </AccordionItem>
  </AccordionRoot>
</template>
