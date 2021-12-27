<template>
  <div class="wrapper">
    <Title text="Add TODO" />
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
import { useTodo } from '../libs/useTodo'
import Title from '../components/atoms/Title.vue'

export default defineComponent({
  components: {
    Title
  },
  setup() {
    const { state, addTodo } = useTodo()
    const todoText = ref('')

    return {
      addTodo,
      todoText,
      todoList: state
    }
  }
})
</script>

<style lang="scss">
  .wrapper {
    width: 500px;
    max-width: 85%;
    margin: 16px auto 0;

    .addTodo {
      display: flex;
      justify-content: center;
      margin: 16px -8px 0 0;

      & > * {
        margin-right: 8px;
      }

      &__input {
        border: 1px solid #dddddd;
        border-radius: 4px;
        padding: 8px;
      }

      &__button {
        cursor: pointer;
        border: none;
        border-radius: 4px;
        font-weight: bold;
        padding: 8px;
      }
    }
  }
</style>