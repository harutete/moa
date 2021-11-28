<template>
  <div class="wrapper">
    <h1>Follow ballon</h1>
    <p className="pickupComment">
      コメント
      <span className="pickupCommentArrow"></span>
    </p>
    <nav className="navWrap">
      <ul className="navList">
        <li v-for="item in menuList" :key={item.title}>
          {item.title}
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  setup() {
    const MENU_LIST = [
      {
        title: 'menu01',
        isCurrent: false
      },
      {
        title: 'menu02',
        isCurrent: false
      },
      {
        title: 'menu03',
        isCurrent: false
      },
      {
        title: 'menu04',
        isCurrent: false
      },
      {
        title: 'menu05',
        isCurrent: false
      },
      {
        title: 'menu06',
        isCurrent: false
      },
      {
        title: 'menu07',
        isCurrent: false
      },
      {
        title: 'menu08',
        isCurrent: true
      },
      {
        title: 'menu09',
        isCurrent: false
      },
    ]
    return {
      menuList: MENU_LIST
    }
  }
});
</script>

<style>
</style>
