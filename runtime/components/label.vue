<script lang="ts">
import { Label, type LabelProps as RadixLabelProps } from "radix-vue";
import { useLabelUI, type LabelUI } from "../ui/label.ui";
import Icon from "./icon.vue";
import type { IconAlias } from "../utils/icon";

export interface LabelProps extends RadixLabelProps {
  text?: string;
  error?: boolean;
  icon?: IconAlias;
  ui?: Partial<LabelUI>;
}
</script>

<script setup lang="ts">
const props = defineProps<LabelProps>();
const ui = useLabelUI(props.ui)({ error: props.error });
</script>

<template>
  <Label v-bind="props" :class="ui.label()">
    <slot>
      <span :class="ui.wrapper()">
        <Icon v-if="icon" :icon="icon" size="small" />
        {{ text }}
      </span>
    </slot>
  </Label>
</template>
