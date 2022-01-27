<template>
  <div class="category">
    <page-search :search-config="searchConfig" @handleQuery="handleQuery" />
    <page-content
      ref="pageContentRef"
      :content-config="contentConfig"
      page-name="category"
      @handleInsert="handleInsert"
      @handleEdit="handleEdit"
    />
    <page-dialog
      ref="pageDialogRef"
      page-name="category"
      :default-data="defaultData"
      v-bind="dialogConfig"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageSearch from '@/components/page-search/src/PageSearch.vue'
import PageContent from '@/components/page-content/src/PageContent.vue'
import PageDialog from '@/components/page-dialog/src/PageDialog.vue'

import searchConfig from './config/search-config'
import contentConfig from './config/content-config'
import dialogConfig from './config/dialog-config'
import { usePageDialog } from '@/hook/usePageDialog'
import { usePageSearch } from '@/hook/usePageSearch'

export default defineComponent({
  name: 'Category',
  components: { PageDialog, PageContent, PageSearch },
  setup() {
    const updateCbFn = () => {
      dialogConfig.title = '修改分类'
    }
    const insertCbFn = () => {
      dialogConfig.title = '添加分类'
    }
    const [pageDialogRef, defaultData, handleInsert, handleEdit] =
      usePageDialog(updateCbFn, insertCbFn)

    const [pageContentRef, handleQuery] = usePageSearch()

    return {
      searchConfig,
      contentConfig,
      dialogConfig,
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
