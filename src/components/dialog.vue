<script lang="ts">
import {
  DialogRoot,
  DialogTrigger,
  DialogPortal,
  DialogOverlay,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "radix-vue";

export const useDialogUI = defineComponentUI({
  slots: {
    contentOverlay: "fixed inset-0 z-50 backdrop-blur",
    content:
      "fixed left-1/2 top-1/2 z-50 text-ui-on-surface-container rounded w-full max-w-lg -translate-x-1/2 -translate-y-1/2 border border-ui-outline bg-ui-surface-container pa-spacing-m flex flex-col gap-spacing-m",
  },
});

export type DialogUI = Parameters<typeof useDialogUI>[0];

export interface DialogProps {
  title?: string;
  description?: string;
  ui?: DialogUI;
}
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<DialogProps>(), {
  title: "Dialog",
  description: "A generic dialog window",
});
const ui = useDialogUI(props.ui);
</script>

<template>
  <DialogRoot>
    <DialogTrigger as-child>
      <slot name="trigger" />
    </DialogTrigger>
    <DialogPortal>
      <DialogOverlay :class="ui.contentOverlay()" />
      <DialogContent :class="ui.content()">
        <Article>
          <DialogTitle v-text="title" as="h1" />
          <DialogDescription v-text="description" as="p" />
        </Article>
        <slot name="content" />
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>
