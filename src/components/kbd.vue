<script lang="ts">
export type KbdUI = UIOverride<"kbd">;

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
