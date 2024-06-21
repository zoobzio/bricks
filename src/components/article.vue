<script lang="ts">
export const useArticleUI = defineComponentUI({
  slots: {
    article: "prose",
  },
});

export type ArticleUI = Parameters<typeof useArticleUI>[0];

export interface ArticleProps {
  ui?: ArticleUI;
}
</script>

<script setup lang="ts">
const props = defineProps<ArticleProps>();
const ui = useArticleUI(props.ui);
</script>

<template>
  <article :class="ui.article()">
    <slot />
  </article>
</template>
