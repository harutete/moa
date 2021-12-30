import { reactive, InjectionKey } from '@nuxtjs/composition-api'

type TodoList = {
  list : {
    id: number,
    value: string
  }[]
}

const todoList = reactive<TodoList>({
  list: []
})

const addTodo = (todoText: string) => {
  if (!todoText.length) {
    return
  }

  todoList.list = [...todoList.list,
  {
    id: todoList.list.length + 1,
    value: todoText
  }]
}

export const useTodo = () => {
  return {
    state: todoList,
    addTodo
  }
}

export type TodoStore = ReturnType<typeof useTodo>

export const TodoKey: InjectionKey<TodoStore> = Symbol('TodoStore')