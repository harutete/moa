<script setup lang="ts">
const props = defineProps<{
  count: number
}>()
const emit = defineEmits<{
  (event: "click"): void
}>()
</script>

<template>
  <button type="button" @click="emit('click')">count is {{ props.count }}</button>
</template>
