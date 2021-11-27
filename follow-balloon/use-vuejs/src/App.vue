<template>
  <div class="wrapper">
    <h1>Follow ballon</h1>
    <p className="pickupComment">
      コメント
      <span className="pickupCommentArrow"></span>
    </p>
    <nav className="navWrap">
      <ul className="navList">
        <li></li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts">
import {
  createComponent,
  reactive,
  SetupContext
} from '@vue/composition-api'

export default {
  name: 'App'
};
</script>

<style>
</style>
