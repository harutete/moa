<template>
  <h1 class="title">{{ text }}</h1>
</template>

<script lang="ts">
import { defineComponent, inject } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    text: {
      type: String
    }
  },
  setup() {
    inject('theme')
  }
})
</script>

<style lang="scss">
  .title {
    font-size: 1.8rem;
    text-align: center;
  }
</style>