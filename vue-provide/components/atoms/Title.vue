<template>
  <div>
    <h1 class="title">{{ text }}</h1>
    <p>{{ state.list }}</p>
  </div>
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
    return {
      state
    }
  }
})
</script>

<style lang="scss">
  .title {
    font-size: 1.8rem;
    text-align: center;
  }
</style>