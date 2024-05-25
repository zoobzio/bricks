<script lang="ts">
import { useCardUI, type CardUI } from "../ui/card.ui";

export interface CardProps {
  title?: string;
  description?: string;
  ui?: Partial<CardUI>;
}
</script>

<script setup lang="ts">
const props = defineProps<CardProps>();
const ui = useCardUI(props.ui)();
</script>

<template>
  <div :class="ui.root()">
    <div :class="ui.header()">
      <slot name="header" />
    </div>
    <div :class="ui.content()">
      <slot>
        <h3 v-if="title" :class="ui.title()">
          {{ title }}
        </h3>
        <p v-if="description" :class="ui.description()">
          {{ description }}
        </p>
      </slot>
    </div>
    <div :class="ui.footer()">
      <slot name="footer" />
    </div>
  </div>
</template>
