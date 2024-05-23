<!--
  TODO: make this generic & do a general cleanup/refactor

  removing the `~/internal` directory introduced a bug where the window doesn't display correctly, 
  but this component isn't used yet so it will have to be fixed when it becomes required
-->

<script lang="ts">
import {
  SelectRoot,
  SelectTrigger,
  SelectIcon,
  SelectPortal,
  SelectContent,
  SelectViewport,
  SelectScrollUpButton,
  SelectScrollDownButton,
  SelectGroup,
  SelectItem,
  SelectItemText,
  SelectItemIndicator,
  SelectLabel,
} from "radix-vue";

export interface SelectOption {
  key: string;
  label: string;
}

export interface SelectProps {
  modelValue?: string;
  label?: string;
  placeholder?: string;
  items?: SelectOption[];
  error?: boolean;
  prependIcon?: IconAlias;
  appendIcon?: IconAlias;
  ui?: Partial<SelectUI>;
}
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<SelectProps>(), {
  placeholder: "Select an option",
  items: () => [],
});

const emits = defineEmits<{
  "update:modelValue": [string | undefined];
  focus: [];
  blur: [];
}>();

defineOptions({
  inheritAttrs: false,
});

const modelValue = useVModel(props, "modelValue", emits, {
  passive: true,
});

const ui = useSelectUI(props.ui)();
const open = ref(false);

const ignoreKey = "_";
const groups = computed(() => {
  return {
    [ignoreKey]: props.items,
  };
});
const groupKeys = computed(
  () => Object.keys(groups.value) as (keyof typeof groups.value)[],
);

const active = computed(() =>
  props.modelValue
    ? props.items.find((i) => i.key === props.modelValue)?.label
    : props.placeholder,
);

function handleFocus() {
  emits("focus");
}

function handleBlur() {
  nextTick(() => {
    if (!open.value) {
      emits("blur");
    }
  });
}
</script>

<template>
  <SelectRoot v-model="modelValue" v-model:open="open">
    <SelectTrigger
      :class="ui.trigger({ error })"
      @focus="handleFocus"
      @blur="handleBlur"
    >
      <span :class="ui.placeholder({ active: !!modelValue })">
        {{ active }}
      </span>
      <SelectIcon as-child>
        <ZIcon :icon="open ? 'up' : 'down'" :class="ui.icon()" />
      </SelectIcon>
    </SelectTrigger>
    <SelectPortal>
      <SelectContent :class="ui.content({ position: 'popper' })">
        <SelectScrollUpButton :class="ui.button()">
          <ZIcon icon="up" />
        </SelectScrollUpButton>
        <SelectViewport :class="ui.viewport({ position: 'popper' })">
          <SelectGroup v-for="key in groupKeys" :key="key" :class="ui.group()">
            <SelectLabel v-if="key !== ignoreKey" :class="ui.label()">
              {{ key }}
            </SelectLabel>
            <SelectItem
              v-for="item in groups[key]"
              :key="item.key"
              :value="item.key"
              :class="ui.item()"
            >
              <span :class="ui.indicator()">
                <SelectItemIndicator>
                  <ZIcon icon="check" :class="ui.check()" />
                </SelectItemIndicator>
              </span>

              <SelectItemText>
                {{ item.label }}
              </SelectItemText>
            </SelectItem>
          </SelectGroup>
        </SelectViewport>
        <SelectScrollDownButton :class="ui.button">
          <ZIcon icon="down" />
        </SelectScrollDownButton>
      </SelectContent>
    </SelectPortal>
  </SelectRoot>
</template>
