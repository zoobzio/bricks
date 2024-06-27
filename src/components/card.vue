<script lang="ts">
import { Primitive } from "radix-vue";
import type { PrimitiveProps } from "radix-vue";

const useCardUI = defineComponentUI({
  slots: {
    card: "rounded border border-ui-outline pa-spacing-m",
  },
});

export type CardUI = Parameters<typeof useCardUI>[0];

export interface CardProps extends PrimitiveProps {
  ui?: CardUI;
  extend?: {
    [K in "card"]: string;
  };
}
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<CardProps>(), { as: "div" });
const ui = useCardUI(props.ui);
</script>

<template>
  <Primitive :as="as" :class="ui.card({ class: extend?.card })">
    <slot />
  </Primitive>
</template>
