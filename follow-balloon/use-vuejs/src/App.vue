<template>
  <div class="wrapper">
    <h1>Follow ballon</h1>
    <p className="pickupComment">
      コメント
      <span className="pickupCommentArrow" ref="arrow" :style="{left: `${arrowPosition}px`}"></span>
    </p>
    <nav className="navWrap">
      <ul className="navList" ref="menuWrap" @scroll="handleScrollNavigation">
        <li v-for="(item, index) in menuList" :key="item.title" :class="{ isCurrent: item.isCurrent }" :ref="element => { if (element) { menuItems[index] = element }}">
          {{ item.title }}
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onBeforeUpdate, onMounted } from 'vue';

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
        isCurrent: true
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
        isCurrent: false
      },
      {
        title: 'menu09',
        isCurrent: false
      },
    ]
    // 矢印のポジションの閾値
    const ARROW_POSITION_THRESHOLD = 4
    const arrow = ref<HTMLSpanElement | null>(null)
    const menuWrap = ref<HTMLUListElement | null>(null)
    const menuWrapPosition = ref<DOMRect | null>(null)
    const menuItems = ref<HTMLLIElement[]>([])
    const currentMenuItem = ref<HTMLLIElement | null>(null)
    const arrowPosition = ref(ARROW_POSITION_THRESHOLD)
    const handleScrollNavigation = () => {
      if (currentMenuItem.value === null) {
        return
      }
      calcArrowPosition()
    }
    const calcArrowPosition = () => {
      if (arrow.value === null) {
        return arrowPosition.value = 0
      }

      if (menuWrap.value === null || menuWrapPosition.value === null || currentMenuItem.value === null) {
        return arrowPosition.value = ARROW_POSITION_THRESHOLD
      }

      const currentItemPosition = currentMenuItem.value.getBoundingClientRect()
      const arrowWidth = arrow.value.offsetWidth ?? 0
      // 対象メニューの左右の座標がリストの幅をはみ出す場合初期値に戻す
      if (
        currentItemPosition.left < menuWrapPosition.value.left ||
        currentItemPosition.right > menuWrapPosition.value.right
      ) {
        return arrowPosition.value = ARROW_POSITION_THRESHOLD
      }

      return arrowPosition.value = currentItemPosition.left - menuWrapPosition.value.left + (currentItemPosition.width / 2) - (arrowWidth / 2)
    }
    onBeforeUpdate(() => {
      menuItems.value = []
    })

    onMounted(() => {
      const findCurrentItem = menuItems.value.filter((item) => item.className === 'isCurrent')
      currentMenuItem.value = findCurrentItem ? findCurrentItem[0] : null
      menuWrapPosition.value = menuWrap.value ? menuWrap.value.getBoundingClientRect() : null
      calcArrowPosition()
    })

    return {
      calcArrowPosition,
      menuList: MENU_LIST,
      arrow,
      menuWrap,
      menuItems,
      handleScrollNavigation,
      arrowPosition
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
  border: 1px solid $color-secondary;
}

.navList {
  overflow: auto;
  list-style: none;
  display: flex;

  li {
    text-align: center;
    width: 120px;
    padding: 8px;

    & + li {
      border-left: 1px solid $color-secondary;
    }

    &.navListCurrentItem {
      color: $color-primary ;
      font-weight: bold;
    }
  }
}
</style>
