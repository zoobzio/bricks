<script lang="ts">
import type { EnumData } from "../utils/enum";
import { type IconAlias, useIcon } from "../utils/icon";
import { Primitive, type PrimitiveProps } from "radix-vue";
import { tv } from "tailwind-variants";
import { defineComponentTheme } from "../utils/theme";

const theme = {
  icon: tv({
    base: "block",
    variants: {
      size: {
        large: "size-sizing-icon-l",
        medium: "size-sizing-icon-m",
        small: "size-sizing-icon-s",
      },
    },
  }),
};

export type IconTheme = typeof theme;
export type IconSize = EnumData<"commonSize">;

export interface IconProps extends PrimitiveProps {
  icon: IconAlias;
  size?: IconSize;
  theme?: Partial<IconTheme>;
}

export const useIconTheme = defineComponentTheme(theme);
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<IconProps>(), {
  as: "i",
  size: "medium",
});
const theme = useIconTheme(props.theme);
</script>

<template>
  <Primitive
    :as="as"
    :class="
      theme.icon({
        size: props.size,
        class: useIcon(props.icon),
      })
    "
  />
</template>
