<script lang="ts">
import { useKbdUI, type KbdUI } from "../ui/kbd.ui";

export interface KbdProps {
  label?: string;
  ui?: Partial<KbdUI>;
}
</script>

<script setup lang="ts">
const props = defineProps<KbdProps>();
const ui = useKbdUI(props.ui)();
</script>

<template>
  <kbd :class="ui">
    <slot>
      {{ label }}
    </slot>
  </kbd>
</template>
