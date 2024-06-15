<script lang="ts">
import {
  TabsContent,
  TabsIndicator,
  TabsList,
  TabsRoot,
  TabsTrigger,
} from "radix-vue";

export const useTabsUI = defineComponentUI({
  slots: {
    wrapper: "px-spacing-m flex items-center gap-spacing-xs",
    tab: "",
    indicator:
      "absolute bg-ui-primary-tonal left-0 h-[2px] bottom-0 w-[--radix-tabs-indicator-size] translate-x-[--radix-tabs-indicator-position] rounded-full transition-[width,transform] duration-300",
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
const ui = useTabsUI(props.ui);
const active = ref("blog");
</script>

<template>
  <TabsRoot v-model="active">
    <TabsList :class="ui.wrapper()">
      <TabsIndicator :class="ui.indicator()" />
      <TabsTrigger
        v-for="t in tabs"
        :key="`${t.key}-trigger`"
        :value="t.key"
        as-child
      >
        <slot name="trigger" :tab="t">
          <Button
            variant="text"
            :link="link"
            :prepend-icon="t.icon ?? t.link?.icon"
            :label="t.label"
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
