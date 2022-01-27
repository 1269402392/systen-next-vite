<template>
  <div class="nav-breadcrumb">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item v-for="item in breadcrumb" :key="item.title">
        {{ item.title }}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { IBreadcrumb } from '@/components/nav-breadcrumb'
export default defineComponent({
  name: 'NavBreadcrumb',
  props: {
    breadcrumb: {
      type: Array as PropType<IBreadcrumb[]>
    }
  },
  components: {},
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
.nav-breadcrumb {
  :deep(.el-breadcrumb__inner) {
    cursor: pointer !important;
    &:hover {
      color: #409eff;
    }
    &:first-child {
      font-weight: bold;
    }
  }
}
</style>
