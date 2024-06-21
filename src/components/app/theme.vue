<script setup lang="ts">
const { mode, theme, resolve } = useUntheme();
const colors = useEnum("colors");
</script>

<template>
  <Dialog
    title="Themes"
    description="Change the Seerist application color palette"
  >
    <template #trigger>
      <slot name="trigger">
        <Button icon="theme" variant="outlined" />
      </slot>
    </template>
    <template #content>
      <Command v-model="theme" :options="useOptions('themes')">
        <template #item="{ item }">
          <span
            :data-active="theme === item.key"
            class="flex items-center gap-spacing-xs data-[active=true]:(text-ui-primary)"
          >
            <Icon icon="theme" />
            {{ item.label }}
          </span>
          <span class="ml-auto flex items-center gap-spacing-2xs">
            <figure
              v-for="c in colors"
              :key="c"
              class="h-[16px] w-[16px] rounded"
              :style="`background-color: ${resolve(
                `tw-${c}-500`,
                item.key,
                mode
              )}`"
            />
          </span>
        </template>
      </Command>
    </template>
  </Dialog>
</template>
