<script setup lang="ts">
const example = useExampleConstant();
</script>

<template>
  <main
    class="h-screen w-screen bg-neutral-bg-m text-neutral-fg-h flex items-center justify-center"
  >
    <section>
      <ZButton prepend-icon="example">
        {{ example }}
      </ZButton>
    </section>
  </main>
</template>
