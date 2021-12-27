<template>
  <div class="wrapper">
    <Title />
    <form @submit.prevent="addTodoItem">
      <div class="addTodoContent">
        <input v-model="todoText" type="text" />
        <input type="submit" value="Add todo!" class="addTodoButton" />
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

<style lang="scss">
  .wrapper {
    width: 500px;
    max-width: 85%;
    margin: auto;

    .addTodoContent {
      display: flex;
      justify-content: center;
    }

    .addTodoButton {
      border: none;
      border-radius: 4px;
      padding: 8px;
    }
  }
</style>