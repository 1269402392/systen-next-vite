<template>
  <div class="nav-menu">
    <el-menu
      mode="vertical"
      :collapse="isCollapse"
      collapse-transition
      :default-active="defaultValue"
      :default-openeds="defaultOpends"
      router
      unique-opened
      background-color="rgb(0,21,41)"
      text-color="rgb(166,178,196)"
      active-text-color="rgb(255,255,255)"
      class="el-menu-vertical-demo"
    >
      <el-sub-menu
        v-for="(menu, index) in menus"
        :key="menu.id"
        :index="menu.id + ''"
      >
        <template #title>
          <el-icon>
            <component :is="icons[index]"></component>
          </el-icon>
          <span>{{ menu.name }}</span>
        </template>
        <el-menu-item
          v-for="child in menu.children"
          :key="child.id"
          :index="child.url + ''"
          @click="menuClick()"
        >
          <span>{{ child.name }}</span>
        </el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { pathToMenus } from '@/utils/map-menus'
import { emitter } from '@/mitt'
import { firstPath } from '@/utils/map-menus'

export default defineComponent({
  name: 'NavMenu',
  props: {
    isCollapse: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const route = useRoute()
    const icons = ['Histogram', 'Tools', 'GoodsFilled', 'VideoCameraFilled']
    const store = useStore()
    const menus = computed(() => store.state.login.userMenus)

    const defaultValue = ref('') // 默认选中菜单
    const defaultOpends = ref<string[]>([]) // 默认展开菜单数组
    const menuClick = () => {
      defaultValue.value = route.fullPath
      const currentMenu = pathToMenus(menus.value, route.fullPath)
      defaultOpends.value = [currentMenu.parentId]
    }
    menuClick()

    // 退出清空默认选中菜单
    emitter.on('login-menu', () => {
      defaultValue.value = firstPath
      defaultOpends.value = []
      emitter.off('login-menu')
    })
    return {
      menus,
      icons,
      defaultValue,
      defaultOpends,
      menuClick
    }
  }
})
</script>

<style scoped lang="less">
.nav-menu {
  height: 100%;
  .is-active {
    background-color: #2e569e !important;
  }
  .el-menu {
    height: 100%;
    border-right: 1px;
  }
  :deep(.el-menu-item) {
    background-color: rgb(12, 33, 53);
  }
  :deep(.el-menu-item:hover) {
    background-color: rgb(12, 33, 53);
    color: white;
  }
}
</style>
