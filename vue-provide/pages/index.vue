<template>
  <div class="wrapper">
    <Title />
    <form @submit.prevent="addTodoItem">
      <div class="addTodo">
        <input v-model="todoText" type="text" class="addTodo__input" />
        <input type="submit" value="Add todo!" class="addTodo__button" />
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

    .addTodo {
      display: flex;
      justify-content: center;
      margin-right: -8px;

      & > * {
        margin-right: 8px;
      }

      &__input {
        border: 1px solid #dddddd;
        border-radius: 4px;
        padding: 8px;
      }

      &__button {
        border: none;
        border-radius: 4px;
        font-weight: bold;
        padding: 8px;
      }
    }
  }
</style>