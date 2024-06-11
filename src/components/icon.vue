<script lang="ts">
import { Primitive, type PrimitiveProps } from "radix-vue";

export const useIconUI = defineComponentUI({
  base: "block",
  variants: {
    size: {
      large: "size-sizing-icon-l",
      medium: "size-sizing-icon-m",
      small: "size-sizing-icon-s",
    },
  },
});

export type IconUI = Parameters<typeof useIconUI>[0];
export type IconSize = EnumDataItem<"sizes">;

export interface IconProps extends PrimitiveProps {
  icon: IconAlias;
  size?: IconSize;
  ui?: IconUI;
}
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<IconProps>(), {
  as: "i",
  size: "medium",
});
const ui = computed(() =>
  useIconUI(props.ui, {
    size: props.size,
    class: useIcon(props.icon),
  })
);
</script>

<template>
  <Primitive :as="as" :class="ui" />
</template>
