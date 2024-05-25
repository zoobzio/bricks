<script lang="ts">
import {
  DialogRoot,
  DialogTrigger,
  DialogPortal,
  DialogOverlay,
  DialogContent,
} from "radix-vue";
import { useDialogUI, type DialogUI } from "../ui/dialog.ui";

export interface DialogProps {
  title?: string;
  description?: string;
  ui?: Partial<DialogUI>;
}
</script>

<script setup lang="ts">
const props = defineProps<DialogProps>();
const ui = useDialogUI(props.ui)();
</script>

<template>
  <DialogRoot>
    <DialogTrigger as-child>
      <slot name="trigger" />
    </DialogTrigger>
    <DialogPortal>
      <DialogOverlay :class="ui.contentOverlay()" />
      <DialogContent :class="ui.content()">
        <div v-if="$slots.header" :class="ui.header()">
          <slot name="header" />
        </div>
        <slot name="content" />
        <div v-if="$slots.footer" :class="ui.footer()">
          <slot name="footer" />
        </div>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>
