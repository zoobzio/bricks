<script lang="ts">
export const useBarUI = defineComponentUI({
  slots: {
    wrapper: "border-ui-outline bg-ui-surface-container",
    inner: "py-spacing-xs",
    left: "flex items-center gap-spacing-xs",
    center: "flex items-center justify-center gap-spacing-xs w-full col-span-2",
    right: "flex items-center justify-end gap-spacing-xs ml-auto",
  },
  variants: {
    sticky: {
      true: {
        wrapper: "sticky top-0 z-10",
      },
    },
    container: {
      true: {
        inner: "container mx-auto",
      },
    },
    flexible: {
      true: {
        inner: "flex items center",
      },
      false: {
        inner: "grid grid-cols-4",
      },
    },
    reverse: {
      true: {
        wrapper: "border-t",
      },
      false: {
        wrapper: "border-b",
      },
    },
  },
});

export type BarUI = Parameters<typeof useBarUI>[0];

export interface BarProps {
  container?: boolean;
  sticky?: boolean;
  flexible?: boolean;
  reverse?: boolean;
  ui?: BarUI;
  extend?: {
    [K in "wrapper" | "inner" | "left" | "center" | "right"]: string;
  };
}
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<BarProps>(), {
  container: false,
  sticky: false,
  flexible: false,
  reverse: false,
});
const ui = useBarUI(props.ui, {
  sticky: props.sticky,
  container: props.container,
  flexible: props.flexible,
  reverse: props.reverse,
});
</script>

<template>
  <div :class="ui.wrapper({ class: extend?.wrapper })">
    <div :class="ui.inner({ class: extend?.inner })">
      <span :class="ui.left({ class: extend?.left })">
        <slot name="left" />
      </span>
      <span :class="ui.center({ class: extend?.center })">
        <slot name="center" />
      </span>
      <span :class="ui.right({ class: extend?.right })">
        <slot name="right" />
      </span>
    </div>
  </div>
</template>
