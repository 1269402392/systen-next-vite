<template>
  <div class="main">
    <el-container>
      <el-aside :width="isCollapse ? '60px' : '200px'">
        <div class="header">
          <img alt="none" src="~@/assets/images/logo.svg" />
          <h3>故河十九年春</h3>
        </div>
        <nav-menu :is-collapse="isCollapse" />
      </el-aside>
      <el-container>
        <el-header>
          <nav-header @handleCollapse="handleCollapse" />
        </el-header>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import NavMenu from '@/components/nav-menu'
import NavHeader from '@/components/nav-header'

export default defineComponent({
  name: 'Main',
  components: {
    NavHeader,
    NavMenu
  },
  setup() {
    const isCollapse = ref(false)
    const handleCollapse = (value: boolean) => {
      isCollapse.value = value
    }
    return {
      isCollapse,
      handleCollapse
    }
  }
})
</script>

<style lang="less" scoped>
.el-header {
  background-color: white;
  color: var(--el-text-color-primary);
}

.el-aside {
  background-color: #d3dce6;
  color: var(--el-text-color-primary);
  text-align: center;
  height: 100%;
  overflow: hidden;
  transition: all 0.3s;
}
.el-main {
  padding: 18px;
}
.main {
  background-color: #e9eef3;
  color: var(--el-text-color-primary);
  height: 100%;
  .header {
    width: 200px;
    height: 55px;
    background-color: rgb(4, 21, 37);
    color: white;
    display: flex;
    align-items: center;
    img {
      width: 30px;
      margin: 0 15px 0 17px;
    }
    h3 {
      font-weight: 500;
      font-size: 17px;
    }
  }
}

.el-container {
  min-width: 1190px;
  height: 100%;
}
</style>
