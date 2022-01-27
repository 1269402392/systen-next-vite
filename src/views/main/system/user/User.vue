<template>
  <div class="user">
    <page-search :search-config="searchConfig" @handleQuery="handleQuery" />
    <page-content
      ref="pageContentRef"
      :content-config="contentConfig"
      page-name="users"
      @handleInsert="handleInsert"
      @handleEdit="handleEdit"
    >
      <template #departmentId="scope">
        {{ $department(scope.row.departmentId) }}
      </template>
      <template #roleId="scope">
        {{ $role(scope.row.roleId) }}
      </template>
    </page-content>
    <page-dialog
      ref="pageDialogRef"
      page-name="users"
      :default-data="defaultData"
      v-bind="afterDialogConfig"
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import searchConfig from '@/views/main/system/user/config/search-config'
import contentConfig from '@/views/main/system/user/config/content-config'
import dialogConfig from '@/views/main/system/user/config/dialog-config'

import { useStore } from '@/store'
import { usePageSearch } from '@/hook/usePageSearch'
import { usePageDialog } from '@/hook/usePageDialog'

export default defineComponent({
  name: 'User',
  setup() {
    /*
     * dialog-hook
     * pageContentRef: page-content组件实例
     * handleQuery: 查询按钮事件
     * */
    const [pageContentRef, handleQuery] = usePageSearch()

    // usePageDialog的回调函数
    const updateCbFn = () => {
      dialogConfig.title = '修改用户'
      const pwdItem = dialogConfig.form.formItems.find(
        (item) => item.type === 'password'
      )
      pwdItem!.isShow = true
    }

    const insertCbFn = () => {
      dialogConfig.title = '添加用户'
      const pwdItem = dialogConfig.form.formItems.find(
        (item) => item.type === 'password'
      )
      pwdItem!.isShow = false
    }

    /*
     * dialog-hook
     * pageDialogRef: page-dialog组件实例
     * defaultData: 表单默认值
     * handleInsert: 添加按钮事件
     * handleEdit: 修改按钮事件
     * */
    const [pageDialogRef, defaultData, handleInsert, handleEdit] =
      usePageDialog(updateCbFn, insertCbFn)

    // 当依赖的数据时异步请求时, 使用计算属性(computed)包裹起来
    const afterDialogConfig = computed(() => {
      // store请求数据
      const store = useStore()
      const formItems = dialogConfig.form.formItems
      // 添加时候角色下拉框的数据
      const departmentList = store.state.departmentList
      const department = formItems.find((item) => item.filed === 'departmentId')
      department!.options = departmentList.map((item) => ({
        label: item.name,
        value: item.id
      }))

      const roleList = store.state.roleList
      const role = formItems.find((item) => item.filed === 'roleId')
      role!.options = roleList.map((item) => ({
        label: item.name,
        value: item.id
      }))

      return dialogConfig
    })

    return {
      searchConfig,
      contentConfig,
      afterDialogConfig,
      pageContentRef,
      pageDialogRef,
      defaultData,
      handleQuery,
      handleInsert,
      handleEdit
    }
  }
})
</script>

<style scoped lang="less">
.user {
  :deep(.el-input__inner) {
    width: 100%;
  }
  :deep(.el-select) {
    width: 100%;
  }
  :deep(.el-table .el-table__cell) {
    padding: 6px 0;
  }
}
</style>
