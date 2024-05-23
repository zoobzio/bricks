<script lang="ts">
export interface ArticleProps {
  ui?: Partial<ArticleUI>;
}
</script>

<script setup lang="ts">
const props = defineProps<ArticleProps>();
const ui = useArticleUI(props.ui)();
</script>

<template>
  <article :class="ui">
    <slot />
  </article>
</template>
