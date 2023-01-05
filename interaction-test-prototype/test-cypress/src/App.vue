<script setup lang="ts">
import CounterButton from "./components/CounterButton/index.vue"
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <counter-button @click="count++" :count="count" />
</template>
