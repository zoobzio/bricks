<script lang="ts">
export const useKbdUI = defineComponentUI({
  base: "flex items-center rounded bg-ui-outline-variant text-ui-on-surface border border-ui-outline text-xs px-spacing-2xs",
});

export type KbdUI = Parameters<typeof useKbdUI>[0];

export interface KbdProps {
  label?: string;
  ui?: KbdUI;
}
</script>

<script setup lang="ts">
const props = defineProps<KbdProps>();
const ui = useKbdUI(props.ui);
</script>

<template>
  <kbd :class="ui">
    <slot>
      {{ label }}
    </slot>
  </kbd>
</template>
