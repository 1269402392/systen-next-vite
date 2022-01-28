<template>
  <div class="nav-header">
    <div class="left">
      <el-icon :size="15" :class="{ isSkew: isSkewFlag }" @click="iconClick">
        <fold />
      </el-icon>
      <nav-breadcrumb :breadcrumb="breadcrumb" />
    </div>
    <div class="utils">
      <div class="icon-box">
        <el-icon><map-location /></el-icon>
      </div>
      <div class="icon-box">
        <el-icon><data-line /></el-icon>
      </div>
      <div class="icon-box">
        <el-icon><credit-card /></el-icon>
      </div>
    </div>
    <el-dropdown class="right">
      <div class="user-info">
        <el-avatar :size="32" src="/src/assets/images/head.jpg"></el-avatar>
        <span style="font-size: 14px">杨枝甘露</span>
        <el-icon class="el-icon--right">
          <arrow-down />
        </el-icon>
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>
            <el-icon><user-filled /></el-icon>
            <span>个人信息</span>
          </el-dropdown-item>
          <el-dropdown-item @click="backLogin">
            <el-icon><circle-close-filled /></el-icon>
            <span>退出登陆</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import NavBreadcrumb from '@/components/nav-breadcrumb/src/NavBreadcrumb.vue'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'
import { pathMenuToBreadcrumb } from '@/utils/map-menus'
import { emitter } from '@/mitt'
import cache from '@/utils/cache'

export default defineComponent({
  name: 'NavHeader',
  components: { NavBreadcrumb },
  emits: ['handleCollapse'],
  setup(props, { emit }) {
    const isSkewFlag = ref(false)
    const iconClick = () => {
      isSkewFlag.value = !isSkewFlag.value
      emit('handleCollapse', isSkewFlag.value)
    }
    const breadcrumb = computed(() => {
      const store = useStore()
      const route = useRoute()
      const menus = store.state.login.userMenus
      return pathMenuToBreadcrumb(menus, route.path)
    })

    const router = useRouter()
    const backLogin = () => {
      cache.deleteCache('token')
      cache.deleteCache('userInfo')
      emitter.emit('login-menu')
      router.push('/login')
    }
    return {
      isSkewFlag,
      breadcrumb,
      iconClick,
      backLogin
    }
  }
})
</script>

<style scoped lang="less">
:deep(.el-icon) {
  font-size: 22px;
  cursor: pointer;
}
.isSkew {
  transform: rotate(180deg);
  color: #f56c6c;
  transition: all 0.8s;
}
.nav-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 15px;
  .left {
    display: flex;
    align-items: center;
    .nav-breadcrumb {
      margin-left: 10px;
    }
    .icon {
      cursor: pointer;
    }
  }
  .utils {
    margin-left: 848px;
    width: 126px;
    display: flex;
    justify-content: space-between;
    .icon-box {
      padding: 5px 8px;
      &:hover {
        background-color: rgb(242, 242, 242);
      }
    }
  }
  .right {
    .user-info {
      display: flex;
      align-items: center;
      cursor: pointer;
      :deep(.el-avatar) {
        margin-right: 5px;
      }
      span {
        font-size: 15px;
      }
    }
  }
}
</style>
