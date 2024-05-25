<script lang="ts">
import { useRecordValue } from "../utils/record";
import type { RecordTemplate } from "../utils/record";

export interface RecordProps<R extends RecordTemplate> {
  header: RecordHeader<R>;
  item: R;
}
</script>

<script setup lang="ts" generic="R extends RecordTemplate">
const props = defineProps<RecordProps<R>>();

const display = computed(() => {
  const value = props.item[props.header.key];
  let option;
  switch (props.header.variant) {
    case "option":
      option = props.header.options?.find((o) => o.key === value);
      return option ? option.label : value;
    /*case "combo":
      options = props.header.options?.filter((o) =>
        useRecordValue<string[]>(value).includes(o.key),
      );
      return options && options.length > 0
        ? options.map((o) => o.label).join(", ")
        : "";*/
    case "switch":
      return useRecordValue<boolean>(value) ? "True" : "False";
    case "number":
      return String(useRecordValue<number>(value));
    default:
      return useRecordValue<string>(value);
  }
});
</script>

<template>
  <div>
    <slot>
      {{ display }}
    </slot>
  </div>
</template>
