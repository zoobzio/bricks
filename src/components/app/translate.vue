<script setup lang="ts">
const { locale, loadLocaleMessages } = useI18n();

async function handleTranslate(language: string) {
  await loadLocaleMessages(language);
  locale.value = language;
}
</script>

<template>
  <Dialog
    title="Languages"
    description="Translate the Seerist application to your locale"
  >
    <template #trigger>
      <slot name="trigger">
        <Button icon="translate" variant="outlined" />
      </slot>
    </template>
    <template #content>
      <Command
        :model-value="locale"
        :options="useOptions('languages')"
        @update:model-value="handleTranslate"
      >
        <template #item="{ item }">
          <span
            :data-active="locale === item.key"
            class="flex items-center gap-spacing-xs data-[active=true]:(text-ui-primary)"
          >
            <Icon icon="translate" />
            {{ item.label }}
          </span>
          <span class="ml-auto">
            <Icon :icon="item.key" />
          </span>
        </template>
      </Command>
    </template>
  </Dialog>
</template>
