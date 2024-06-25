<script lang="ts">
import { TabsContent, TabsList, TabsRoot, TabsTrigger } from "radix-vue";

export const useTabsUI = defineComponentUI({
  slots: {
    wrapper: "px-spacing-m flex items-center gap-spacing-xs",
    tab: "",
  },
});

export type TabsUI = Parameters<typeof useTabsUI>[0];

export interface TabTemplate extends OptionTemplate {
  icon?: IconAlias;
  link?: Link;
}

export interface TabsProps<Tab extends TabTemplate> {
  modelValue?: Tab["key"];
  tabs?: Tab[];
  ui?: TabsUI;
}
</script>

<script setup lang="ts" generic="Tab extends TabTemplate">
const props = withDefaults(defineProps<TabsProps<Tab>>(), { tabs: () => [] });
const emits = defineEmits<{
  "update:modelValue": [Tab["key"]];
}>();
const ui = useTabsUI(props.ui);
const modelValue = useVModel(props, "modelValue", emits);
</script>

<template>
  <TabsRoot v-model="modelValue">
    <TabsList :class="ui.wrapper()">
      <TabsTrigger v-for="t in tabs" :key="t.key" :value="t.key" as-child>
        <slot name="trigger" :tab="t">
          <Button
            variant="text"
            :prepend-icon="t.icon"
            :link="t.link"
            :label="t.label"
            :tabindex="undefined"
          />
        </slot>
      </TabsTrigger>
    </TabsList>
    <template v-for="t in tabs" :key="t.key">
      <TabsContent v-if="$slots[`${t.key}-content`]" :value="t.key">
        <slot name="content" :tab="t" />
      </TabsContent>
    </template>
  </TabsRoot>
</template>
