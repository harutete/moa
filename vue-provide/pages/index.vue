<template>
  <div>
    <Title />
    <form @submit.prevent="addTodoItem">
      <div>
        <input v-model="todoText" type="text" />
        <button type="submit">Add todo!</button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, provide } from '@nuxtjs/composition-api'
import { addTodo } from '../libs/todo'
import Title from '../components/atoms/Title.vue'

export default defineComponent({
  components: {
    Title
  },
  setup() {
    const todoText = ref('')
    const addTodoItem = () => {
      if (!todoText.value.length) {
        return
      }
      provide('theme', 'black')

      addTodo(todoText.value)
    }

    return {
      addTodoItem,
      todoText
    }
  }
})
</script>
