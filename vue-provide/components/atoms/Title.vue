<template>
  <div>
    <h1 class="title">{{ text }}</h1>
    <p>{{ list }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, computed } from '@nuxtjs/composition-api'
import { TodoKey } from '../../libs/use-todo'

export default defineComponent({
  props: {
    text: {
      type: String,
      default: ''
    }
  },
  setup() {
    const todoStore = inject(TodoKey)
    const todoList = computed(() => todoStore?.state.list)

    return {
      list: todoList
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