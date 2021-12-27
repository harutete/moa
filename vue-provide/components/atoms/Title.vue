<template>
  <h1 class="title">{{ text }}</h1>
</template>

<script lang="ts">
import { defineComponent, inject } from '@nuxtjs/composition-api'
import { TodoKey } from '../../libs/use-todo'

export default defineComponent({
  props: {
    text: {
      type: String
    }
  },
  setup() {
    const { state } = inject(TodoKey)
  }
})
</script>

<style lang="scss">
  .title {
    font-size: 1.8rem;
    text-align: center;
  }
</style>