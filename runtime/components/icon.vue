<script lang="ts">
import { Primitive, type PrimitiveProps } from "radix-vue";

// this will need to become a module, temporary placement here
const aliases = {
  example: "i-fa6-solid-rocket",
}

export type IconAlias = keyof typeof aliases;
export type IconSize = EnumData<"commonSize">;

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
const ui = useIconUI(props.ui);
</script>

<template>
  <Primitive
    :as="as"
    :class="
      ui({
        size: props.size,
        class: aliases[props.icon],
      })
    "
  />
</template>
