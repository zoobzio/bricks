<script lang="ts">
export interface HintProps {
  text?: string;
  error?: string;
  ui?: HintUI;
}
</script>

<script setup lang="ts">
const props = defineProps<HintProps>();
const ui = useHintUI(props.ui)();
</script>

<template>
  <small :class="ui.wrapper()">
    <slot name="hint">
      <span v-if="text" :class="ui.hint()">
        {{ text }}
      </span>
    </slot>
    <slot name="error">
      <span v-if="error" :class="ui.error()">
        {{ error }}
      </span>
    </slot>
  </small>
</template>
