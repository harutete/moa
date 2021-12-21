<template>
  <form @submit.prevent="addTodoItem">
    <div>
      <input v-model="todoText" type="text" />
      <button type="submit">Add todo!</button>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
import { addTodo } from '../libs/todo'

export default defineComponent({
  setup() {
    const todoText = ref('')
    const addTodoItem = () => {
      if (!todoText.value.length) {
        return
      }

      addTodo(todoText.value)
    }

    return {
      addTodoItem,
      todoText
    }
  }
})
</script>
