<script lang="ts">
import { AvatarImage, AvatarRoot, AvatarFallback } from "radix-vue";

const useAvatarUI = defineComponentUI({
  slots: {
    root: "rounded-full overflow-hidden bg-ui-primary-tonal",
    image: "h-34px w-34px", // TODO make this a prop
    fallback: "bg-ui-primary-tonal",
  },
});

export type AvatarUI = Parameters<typeof useAvatarUI>[0];

export interface AvatarProps {
  src: string;
  alt: string;
  ui?: AvatarUI;
}
</script>

<script setup lang="ts">
const props = defineProps<AvatarProps>();
const ui = useAvatarUI(props.ui);
</script>

<template>
  <AvatarRoot :class="ui.root()">
    <AvatarImage :src="src" :alt="alt" :class="ui.image()" />
    <AvatarFallback :class="ui.fallback()" />
  </AvatarRoot>
</template>
