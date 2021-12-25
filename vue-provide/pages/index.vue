<template>
  <div>
    <Title />
    <form @submit.prevent="addTodoItem">
      <div>
        <input v-model="todoText" type="text" />
        <input type="submit" value="Add todo!" />
      </div>
    </form>
    <ul v-if="todoList.length" class="listTodo">
      <li v-for="(item, index) in todoList" :key="index">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, provide } from '@nuxtjs/composition-api'
import { todoList, addTodo } from '../libs/todo'
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
      todoText,
      todoList
    }
  }
})
</script>
