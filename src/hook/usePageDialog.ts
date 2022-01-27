import { ref } from 'vue'
import PageDialog from '@/components/page-dialog'

type cbFn = (row?: any) => void
/*
 * dialog-hook
 * pageDialogRef: page-dialog组件实例
 * defaultData: 表单默认值
 * handleInsert: 添加按钮事件
 * handleEdit: 修改按钮事件
 * */
export function usePageDialog(updateCbFn?: cbFn, insertCbFn?: cbFn) {
  // 组件实例
  const pageDialogRef = ref<InstanceType<typeof PageDialog>>()
  // 默认值
  const defaultData = ref({})

  // 修改Fn
  const handleEdit = (row: any) => {
    defaultData.value = { ...row }
    pageDialogRef.value!.dialogVisible = true
    updateCbFn && updateCbFn(row)
  }

  // 添加
  const handleInsert = () => {
    pageDialogRef.value!.dialogVisible = true
    defaultData.value = {}

    insertCbFn && insertCbFn()
  }
  return [pageDialogRef, defaultData, handleInsert, handleEdit]
}
