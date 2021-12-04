<template>
  <div class="wrapper">
    <h1>Follow ballon</h1>
    <p className="pickupComment">
      コメント
      <span className="pickupCommentArrow" :style="calcArrowPosition"></span>
    </p>
    <nav className="navWrap">
      <ul className="navList">
        <li v-for="item in menuList" :key="item.title" :class="{ isCurrent: item.isCurrent }" ref="menuItems">
          {{ item.title }}
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';

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
    const menuItems = ref(null)

    onMounted(() => {
      console.log(menuItems)
    })
    return {
      menuList: MENU_LIST,
      menuItems
    }
  }
});
</script>

<style lang="scss">
.wrapper {
  width: 500px;
  max-width: 85%;
  margin: auto;
}

.pickupComment {
  position: relative;
  border-radius: 4px;
  background-color: $color-secondary;
  color: $color-primary ;
  margin-bottom: 16px;
  padding: 8px;
}

.pickupCommentArrow {
  position: absolute;
  border: 8px solid transparent;
  bottom: -16px;
  border-top: 8px solid $color-secondary;
}

.navWrap {
  overflow: hidden;
}

.navList {
  overflow: auto;
  list-style: none;
  display: flex;
  border: 1px solid $color-secondary;
  border-left: none;

  li {
    border-left: 1px solid $color-secondary;
    text-align: center;
    width: 120px;
    padding: 8px;

    &.navListCurrentItem {
      color: $color-primary ;
      font-weight: bold;
    }
  }
}
</style>
