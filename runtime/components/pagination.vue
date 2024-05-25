<script lang="ts">
import {
  PaginationRoot as Pagination,
  PaginationList,
  PaginationListItem,
  PaginationFirst,
  PaginationLast,
  PaginationNext,
  PaginationPrev,
  PaginationEllipsis,
} from "radix-vue";
import { useVModel } from "@vueuse/core";
import { usePaginationUI } from "../ui/pagination.ui";
import Button from "./button.vue";

export interface PaginationProps {
  modelValue: number;
  pageSize: number;
  total: number;
  ui?: Partial<PaginationUI>;
}
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<PaginationProps>(), {
  modelValue: 1,
  pageSize: 10,
  total: 0,
});

const emits = defineEmits<{
  "update:modelValue": [number];
}>();

const modelValue = useVModel(props, "modelValue", emits, {
  passive: true,
});

const ui = usePaginationUI(props.ui)();
</script>

<template>
  <Pagination
    v-model:page="modelValue"
    :items-per-page="pageSize"
    :total="total"
    show-edges
    :sibling-count="1"
  >
    <PaginationList v-slot="{ items }" :class="ui.list()">
      <PaginationFirst as-child>
        <slot name="first">
          <Button icon="first" variant="outlined" />
        </slot>
      </PaginationFirst>
      <PaginationPrev as-child>
        <slot name="prev">
          <Button icon="previous" variant="outlined" />
        </slot>
      </PaginationPrev>
      <template
        v-for="item in items"
        :key="'value' in item ? item.value : 'ellipsis'"
      >
        <slot v-if="item.type === 'page'" :name="String(item.value)">
          <PaginationListItem as-child :value="item.value">
            <Button
              :variant="item.value === modelValue ? 'tonal' : 'outlined'"
              as-icon
            >
              {{ item.value }}
            </Button>
          </PaginationListItem>
        </slot>
        <slot v-else name="more">
          <PaginationEllipsis as-child>
            <Button icon="more" variant="text" disabled />
          </PaginationEllipsis>
        </slot>
      </template>
      <PaginationNext as-child>
        <slot name="next">
          <Button icon="next" variant="outlined" />
        </slot>
      </PaginationNext>
      <PaginationLast as-child>
        <slot name="last">
          <Button icon="last" variant="outlined" />
        </slot>
      </PaginationLast>
    </PaginationList>
  </Pagination>
</template>
