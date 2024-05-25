<script setup lang="ts">
const { mode } = useUntheme();
const example = useExampleConstant();

const isDark = computed(() => mode.value === "dark");

function toggleMode() {
  mode.value = isDark.value ? "light" : "dark";
}
</script>

<template>
  <main
    class="h-screen w-screen bg-neutral-bg-m text-neutral-fg-h flex items-center justify-center"
  >
    <section>
      <ZButton :prepend-icon="isDark ? 'moon' : 'sun'" @click="toggleMode">
        {{ example }}
      </ZButton>
    </section>
  </main>
</template>
