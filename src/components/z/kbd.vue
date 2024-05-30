<script lang="ts">
export const useKbdUI = defineComponentUI({
  base: "rounded bg-neutral-bg-m text-neutral-fg-xh border border-neutral-fg-l text-sm px-spacing-2xs",
});

export interface KbdProps {
  label?: string;
  ui?: Parameters<typeof useKbdUI>[0];
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
