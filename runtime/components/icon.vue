<script lang="ts">
import { Primitive, type PrimitiveProps } from "radix-vue";

export type IconSize = EnumData<"sizes">;

export interface IconProps extends PrimitiveProps {
  icon: IconAlias;
  size?: IconSize;
  ui?: Partial<IconUI>;
}
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<IconProps>(), {
  as: "i",
  size: "medium",
});
const ui = useIconUI(props.ui)({
  size: props.size,
  class: useIcon(props.icon),
});
</script>

<template>
  <Primitive :as="as" :class="ui" />
</template>
