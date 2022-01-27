<template>
  <div class="department">
    <page-search :search-config="searchConfig" @handleQuery="handleQuery" />
    <page-content
      ref="pageContentRef"
      :content-config="contentConfig"
      page-name="department"
      @handleInsert="handleInsert"
      @handleEdit="handleEdit"
    >
      <template #parentId="scope">
        {{ $department(scope.row.parentId) }}
      </template>
    </page-content>
    <page-dialog
      ref="pageDialogRef"
      page-name="department"
      :default-data="defaultData"
      v-bind="afterDialogConfig"
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from '@/store'

import searchConfig from './config/search-config'
import contentConfig from './config/content-config'
import dialogConfig from './config/dialog-config'

import PageSearch from '@/components/page-search/src/PageSearch.vue'
import PageContent from '@/components/page-content/src/PageContent.vue'
import PageDialog from '@/components/page-dialog/src/PageDialog.vue'

import { usePageDialog } from '@/hook/usePageDialog'
import { usePageSearch } from '@/hook/usePageSearch'

export default defineComponent({
  name: 'Department',
  components: {
    PageDialog,
    PageContent,
    PageSearch
  },
  setup() {
    const store = useStore()
    const departmentList = computed(() => store.state.departmentList)
    const afterDialogConfig = computed(() => {
      const parentItem = dialogConfig.form.formItems.find(
        (item) => item.filed === 'parentId'
      )
      parentItem!.options = departmentList.value.map((item) => ({
        label: item.name,
        value: item.id
      }))
      return dialogConfig
    })

    // dialog-hook
    // usePageDialog的回调函数
    const updateCbFn = () => {
      dialogConfig.title = '修改部门'
    }

    const insertCbFn = () => {
      dialogConfig.title = '添加部门'
    }
    const [pageDialogRef, defaultData, handleInsert, handleEdit] =
      usePageDialog(updateCbFn, insertCbFn)

    // search-hook
    const [pageContentRef, handleQuery] = usePageSearch()

    return {
      searchConfig,
      contentConfig,
      afterDialogConfig,
      pageDialogRef,
      defaultData,
      handleInsert,
      handleEdit,
      pageContentRef,
      handleQuery
    }
  }
})
</script>

<style scoped lang="less">
:deep(.el-table .el-table__cell) {
  padding: 6px 0;
}
</style>
