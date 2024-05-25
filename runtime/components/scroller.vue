<script lang="ts">
import {
  ScrollAreaCorner,
  ScrollAreaRoot,
  ScrollAreaViewport,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
} from "radix-vue";
import { useScrollerUI, type ScrollerUI } from "../ui/scroller.ui";

export interface ScrollerProps {
  orientation?: "vertical" | "horizontal";
  ui?: Partial<ScrollerUI>;
}
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<ScrollerProps>(), {
  orientation: "vertical",
});
const ui = useScrollerUI(props.ui)();
</script>

<template>
  <ScrollAreaRoot :class="ui.root()">
    <ScrollAreaViewport :class="ui.viewport()">
      <slot />
    </ScrollAreaViewport>
    <ScrollAreaScrollbar
      :class="ui.bar({ orientation })"
      :orientation="orientation"
    >
      <ScrollAreaThumb :class="ui.thumb()" />
    </ScrollAreaScrollbar>
    <ScrollAreaCorner />
  </ScrollAreaRoot>
</template>
