<script lang="ts">
import {
  DropdownMenuRoot,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "radix-vue";

export interface MenuItem<R extends string | number> {
  key: R;
  label: string;
  icon?: IconAlias;
  shortcut?: string;
}

export interface MenuProps<R extends string | number, I extends MenuItem<R>> {
  modelValue?: R;
  label?: string;
  icon?: IconAlias;
  items: I[];
  ui?: Partial<MenuUI>;
}
</script>

<script
  setup
  lang="ts"
  generic="R extends string | number, I extends MenuItem<R>"
>
const props = withDefaults(defineProps<MenuProps<R, I>>(), { label: "Menu" });

const emits = defineEmits<{
  "update:modelValue": [R];
}>();

const ui = useMenuUI(props.ui)();

const open = ref(false);

function handleSelect(key: R) {
  emits("update:modelValue", key);
}
</script>

<template>
  <DropdownMenuRoot v-model:open="open">
    <DropdownMenuTrigger as-child>
      <slot name="trigger">
        <ZButton
          variant="outlined"
          :prepend-icon="icon"
          :append-icon="open ? 'up' : 'down'"
        >
          {{ label }}
        </ZButton>
      </slot>
    </DropdownMenuTrigger>
    <DropdownMenuContent :class="ui.content()">
      <slot name="content">
        <div :class="ui.list()">
          <template v-for="item in items" :key="item.key">
            <DropdownMenuItem
              :class="ui.item()"
              :disabled="item.key === modelValue"
              tabindex="0"
              @select="() => handleSelect(item.key)"
            >
              <ZIcon v-if="item.icon" :icon="item.icon" />
              {{ item.label }}
            </DropdownMenuItem>
          </template>
        </div>
      </slot>
    </DropdownMenuContent>
  </DropdownMenuRoot>
</template>
