<script lang="ts">
export const useBarUI = defineComponentUI({
  slots: {
    wrapper: "border-b border-ui-outline backdrop-blur-xl",
    inner: "grid grid-cols-4 py-spacing-xs",
    left: "flex items-center gap-spacing-xs",
    center: "flex items-center justify-center gap-spacing-xs w-full col-span-2",
    right: "flex items-center justify-end gap-spacing-xs ml-auto",
  },
  variants: {
    sticky: {
      true: {
        wrapper: "sticky top-0",
      },
    },
    container: {
      true: {
        inner: "container mx-auto",
      },
    },
  },
});

export type BarUI = Parameters<typeof useBarUI>[0];

export interface BarProps {
  container?: boolean;
  sticky?: boolean;
  ui?: BarUI;
}
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<BarProps>(), {
  container: true,
  sticky: true,
});
const ui = useBarUI(props.ui, {
  sticky: props.sticky,
  container: props.container,
});
</script>

<template>
  <div :class="ui.wrapper()">
    <div :class="ui.inner()">
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
  </div>
</template>
