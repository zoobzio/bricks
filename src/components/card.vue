<script lang="ts">
  import { Primitive } from 'radix-vue';

const useCardUI = defineComponentUI({
  slots: {
    card: "rounded border border-ui-outline pa-spacing-m",
  },
});

export type CardUI = Parameters<typeof useCardUI>[0];

export interface CardProps {
  ui?: CardUI;
}
</script>

<script setup lang="ts">
  const props = defineProps<CardProps>();
  const ui = useCardUI(props.ui);
</script>

</script>

<template>
  <Primitive as="div" :class="ui.card()">
    <slot>

    </slot>
  </Primitive>
</template>
