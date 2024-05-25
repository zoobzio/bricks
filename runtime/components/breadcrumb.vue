<script lang="ts">
import type { IconAlias } from "../utils/icon";
import { useBreadcrumbUI, type BreadcrumbUI } from "../ui/breadcrumb.ui";
import type { EnumData } from "../utils/enum";

export interface BreadcrumbProps {
  links: {
    to: string;
    label: string;
    icon?: IconAlias;
    target?: EnumData<"targets">;
    external?: boolean;
  }[];
  ui?: Partial<BreadcrumbUI>;
}
</script>

<script setup lang="ts">
const props = defineProps<BreadcrumbProps>();
const route = useRoute();
const ui = useBreadcrumbUI(props.ui)();
</script>

<template>
  <nav :class="ui.nav()">
    <template v-for="(l, i) in links" :key="l.to">
      <ZButton
        :to="l.to"
        variant="text"
        :disabled="l.to === route.path"
        :prepend-icon="l.icon"
      >
        {{ l.label }}
      </ZButton>
      <ZIcon v-if="i + 1 < links.length" icon="right" :class="ui.separator()" />
    </template>
  </nav>
</template>
