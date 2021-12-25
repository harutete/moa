<template>
  <div>
    <Title />
    <form @submit.prevent="addTodoItem">
      <div>
        <input v-model="todoText" type="text" />
        <input type="submit" value="Add todo!" />
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
      const theme = ref('black')
      provide('theme', theme)

      addTodo(todoText.value)
    }

    return {
      addTodoItem,
      todoText
    }
  }
})
</script>
