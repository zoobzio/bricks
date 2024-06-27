<script lang="ts">
const useLinksUI = defineComponentUI({
  slots: {
    wrapper: "flex flex-col",
    link: "text-ui-on-surface py-spacing-2xs px-spacing-m opacity-60 hover:(rounded-r bg-ui-outline-variant) data-[active=false]:hover:(opacity-100 border-ui-on-surface) data-[active=true]:(opacity-100 border-ui-primary) border-l-[2px] border-ui-outline outline-none focus-visible:(ring-2 ring-ui-primary rounded opacity-100)",
  },
});

export type LinksUI = Parameters<typeof useLinksUI>[0];

export interface LinksLink extends Link {
  prependIcon?: IconAlias;
  appendIcon?: IconAlias;
  children?: LinksLink[];
}

export interface LinksProps {
  active: string | string[];
  links: LinksLink[];
  ui?: LinksUI;
}
</script>

<script setup lang="ts">
const props = defineProps<LinksProps>();
const ui = useLinksUI(props.ui);
const links = computed(() =>
  props.links.reduce((x, y) => {
    const extract = (z: typeof y) => {
      const { children, ...link } = z;
      x.push(link);
      if (children) {
        children.forEach((c) => extract(c));
      }
    };
    extract(y);
    return x;
  }, [] as LinksLink[])
);
</script>

<template>
  <div :class="ui.wrapper()">
    <NuxtLink
      v-for="l in links"
      :key="l.to"
      :to="l.to"
      :data-active="l.to === active || active.includes(l.to)"
      :class="ui.link()"
    >
      {{ l.label }}
    </NuxtLink>
  </div>
</template>
