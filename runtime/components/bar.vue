<script lang="ts">
import { useBarUI, type BarUI } from "../ui/bar.ui";
import { useSlots } from "vue";
import type { EnumData } from "../utils/enum";

export interface BarProps {
  position?: "top" | "bottom";
  size?: EnumData<"sizes">;
  ui?: Partial<BarUI>;
}
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<BarProps>(), { position: "top" });
const slots = useSlots();
const ui = useBarUI(props.ui)({
  position: props.position,
  left: !!slots.left,
  center: !!slots.center,
  right: !!slots.right,
});
</script>

<template>
  <div :class="ui.wrapper()">
    <span :class="ui.left()">
      <slot name="left" />
    </span>
    <span :class="ui.center()">
      <slot name="center" />
    </span>
    <span :class="ui.right()">
      <slot name="right" />
    </span>
  </div>
</template>
