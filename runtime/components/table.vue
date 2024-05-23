<script lang="ts">
export interface TableProps<R extends RecordTemplate> {
  headers: RecordHeader<R>[];
  items: R[];
  ui?: Partial<TableUI>;
}
</script>

<script setup lang="ts" generic="R extends RecordTemplate">
const props = defineProps<TableProps<R>>();
const ui = useTableUI(props.ui)();
</script>

<template>
  <ZScroller orientation="horizontal">
    <table :class="ui.table()">
      <thead :class="ui.thead()">
        <tr :class="ui.tr()">
          <th
            v-for="column in headers"
            :key="`${String(column.key)}-header`"
            :class="ui.th()"
          >
            <slot name="header" :column="column" :ui="ui">
              <span :class="ui.thWrapper()">
                <ZIcon v-if="column.icon" :icon="column.icon" size="small" />
                {{ column.label }}
              </span>
            </slot>
          </th>
        </tr>
      </thead>
      <tbody :class="ui.tbody()">
        <tr v-for="record in items" :key="String(record.id)" :class="ui.tr()">
          <td
            v-for="column in headers"
            :key="`${String(column.key)}-${String(record.id)}`"
            :class="ui.td()"
          >
            <slot :name="String(column.key)">
              <ZRecord :item="record" :header="column" />
            </slot>
          </td>
        </tr>
      </tbody>
      <tfoot v-if="$slots.footer" :class="ui.tfoot()">
        <slot name="footer" />
      </tfoot>
    </table>
  </ZScroller>
</template>
