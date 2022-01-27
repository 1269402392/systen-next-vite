import { ref } from 'vue'
import PageContent from '@/components/page-content'
/*
 * dialog-hook
 * pageContentRef: page-content组件实例
 * handleQuery: 查询按钮事件
 * */
export function usePageSearch() {
  // 搜索组件实例
  const pageContentRef = ref<InstanceType<typeof PageContent>>()
  // 搜索方法
  const handleQuery = (queryInfo?: any) => {
    pageContentRef.value!.pageInfo.currentPage = 1
    pageContentRef.value?.getDataList(queryInfo)
  }
  // 返回元组
  return [pageContentRef, handleQuery]
}
