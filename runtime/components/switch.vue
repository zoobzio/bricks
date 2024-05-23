<script lang="ts">
import {
  SwitchRoot,
  type SwitchRootEmits,
  type SwitchRootProps,
  SwitchThumb,
  useForwardPropsEmits,
} from "radix-vue";

export interface SwitchProps extends SwitchRootProps {
  ui?: Partial<SwitchUI>;
}
</script>

<script setup lang="ts">
const props = defineProps<SwitchProps>();

const emits = defineEmits<
  SwitchRootEmits & {
    focus: [];
    blur: [];
  }
>();

const forwarded = useForwardPropsEmits(props, emits);

const ui = useSwitchUI(props.ui)();

function handleFocus() {
  emits("focus");
}

function handleBlur() {
  emits("blur");
}
</script>

<template>
  <div :class="ui.wrapper()">
    <SwitchRoot
      v-bind="forwarded"
      :class="ui.root()"
      @focus="handleFocus"
      @blur="handleBlur"
    >
      <SwitchThumb :class="ui.toggle()" />
    </SwitchRoot>
  </div>
</template>
