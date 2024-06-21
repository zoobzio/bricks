<script setup lang="ts">
const { mode } = useUntheme();
</script>

<template>
  <Button
    :icon="mode === 'dark' ? 'moon' : 'sun'"
    variant="outlined"
    @click="mode = mode === 'dark' ? 'light' : 'dark'"
  />
</template>
