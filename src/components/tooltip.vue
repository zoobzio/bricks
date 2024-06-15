<script lang="ts">
import {
  TooltipContent,
  TooltipProvider,
  TooltipRoot,
  TooltipTrigger,
} from "radix-vue";

export const useTooltipUI = defineComponentUI({
  slots: {
    tip: "text-sm rounded flex items-center gap-spacing-xs px-spacing-xs py-spacing-2xs bg-ui-surface text-ui-on-surface-container border border-ui-outline",
  },
});

export type TooltipUI = Parameters<typeof useTooltipUI>[0];

export interface TooltipProps {
  ui?: TooltipUI;
}
</script>

<script setup lang="ts">
const props = defineProps<TooltipProps>();
const ui = useTooltipUI(props.ui);
</script>

<template>
  <ClientOnly>
    <TooltipProvider :delay-duration="0">
      <TooltipRoot>
        <TooltipTrigger as-child>
          <slot />
        </TooltipTrigger>
        <TooltipContent :side-offset="6" :class="ui.tip()">
          <slot name="tip" />
        </TooltipContent>
      </TooltipRoot>
    </TooltipProvider>
    <template #fallback>
      <slot />
    </template>
  </ClientOnly>
</template>
