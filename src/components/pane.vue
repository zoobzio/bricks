<script lang="ts">
export const usePaneUI = defineComponentUI({
  slots: {
    section: "grid grid-cols-5 gap-spacing-2xl",
    left: "",
    right: "",
    content: "",
  },
  variants: {
    panels: {
      1: {
        content: "col-span-5",
      },
      2: {
        content: "col-span-4",
      },
      3: {
        content: "col-span-3",
      },
    },
  },
});

export type PaneUI = Parameters<typeof usePaneUI>[0];

export interface PaneProps {
  ui?: PaneUI;
}
</script>

<script setup lang="ts">
const props = defineProps<PaneProps>();
const slots = Object.keys(useSlots());
const ui = usePaneUI(props.ui, {
  panels: slots.length,
});
</script>

<template>
  <section :class="ui.section()">
    <aside v-if="$slots.left" :class="ui.left()">
      <slot name="left" />
    </aside>
    <div :class="ui.content()">
      <slot />
      <Bar reverse flexible :extend="{ inner: 'bg-ui-surface' }">
        <template #left>
          <span class="opacity-60 text-nowrap">
            &copy; {{ new Date().getFullYear() }} Alex Thorwaldson
          </span>
        </template>
        <template #right>
          <Socials />
        </template>
      </Bar>
    </div>
    <aside v-if="$slots.right" :class="ui.right()">
      <slot name="right" />
    </aside>
  </section>
</template>
