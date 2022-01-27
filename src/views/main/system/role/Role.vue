<template>
  <div class="role">
    <page-search :search-config="searchConfig" @handleQuery="handleQuery" />
    <page-content
      ref="pageContentRef"
      :content-config="contentConfig"
      page-name="role"
      @handleInsert="handleInsert"
      @handleEdit="handleEdit"
    />
    <page-dialog
      ref="pageDialogRef"
      page-name="role"
      :default-data="defaultData"
      v-bind="dialogConfig"
      :other-info="otherInfo"
    >
      <div class="tree">
        <div class="label">分配权限</div>
        <el-tree
          ref="treeRef"
          :data="menuList"
          node-key="id"
          :props="treeProps"
          :default-checked-keys="defaultKeys"
          show-checkbox
          @check-change="treeNodeClick"
        />
      </div>
    </page-dialog>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, nextTick, ref } from 'vue'

import { contentConfig } from '@/views/main/system/role/config/content-config'
import { searchConfig } from '@/views/main/system/role/config/search-config'
import { dialogConfig } from '@/views/main/system/role/config/dialog-config'

import { usePageSearch } from '@/hook/usePageSearch'
import { usePageDialog } from '@/hook/usePageDialog'
import { useStore } from '@/store'

import { ElTree } from 'element-plus'
import { treeKeysToMenus } from '@/utils/map-menus'

export default defineComponent({
  name: 'Role',
  setup() {
    const store = useStore()
    const treeRef = ref<InstanceType<typeof ElTree>>()
    const defaultKeys = ref<number[]>([])

    // page-search hook
    const [pageContentRef, handleQuery] = usePageSearch()
    // usePageDialog的回调函数
    const updateCbFn = (row: any) => {
      dialogConfig.title = '修改角色'
      const menuKeys = treeKeysToMenus(row.menuList)
      nextTick(() => treeRef.value?.setCheckedKeys(menuKeys, false))
    }

    const insertCbFn = () => {
      dialogConfig.title = '添加角色'
    }
    // page-dialog hook
    const [pageDialogRef, defaultData, handleInsert, handleEdit] =
      usePageDialog(updateCbFn, insertCbFn)

    // tree
    const treeProps = { children: 'children', label: 'name' }
    const menuList = computed(() => store.state.menuList)
    const otherInfo = ref<any>({ menuList: [] })
    const treeNodeClick = () => {
      if (treeRef.value) {
        otherInfo.value.menuList = [
          ...treeRef.value?.getCheckedKeys(false),
          ...treeRef.value?.getHalfCheckedKeys()
        ]
      }
    }
    return {
      pageContentRef,
      pageDialogRef,
      defaultData,
      treeProps,
      menuList,
      treeRef,
      otherInfo,
      defaultKeys,
      handleInsert,
      handleEdit,
      handleQuery,
      treeNodeClick,
      contentConfig,
      searchConfig,
      dialogConfig
    }
  }
})
</script>

<style scoped lang="less">
:deep(.el-table .el-table__cell) {
  padding: 6px 0;
}
.tree {
  display: flex;
  margin-left: 33px;
  .label {
    margin-right: 12px;
  }
}
</style>
