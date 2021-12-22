<template>
  <p>{{ theme }}</p>
</template>

<script lang="ts">
import { defineComponent, inject } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const theme = inject('theme')

    return {
      theme
    }
  }
})
</script>
