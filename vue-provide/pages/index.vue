<template>
  <form @submit="addTodo">
    <div>
      <input type="text" value="" />
      <button type="submit">Add todo!</button>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
  }
})
</script>
