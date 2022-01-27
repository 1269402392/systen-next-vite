import { ElMessage } from 'element-plus'
let timer: any = null
export function showMessage(code: number, message: string) {
  if (timer) clearTimeout(timer)
  timer = setTimeout(() => {
    if (code === 0) {
      ElMessage({
        message,
        type: 'success'
      })
    } else {
      ElMessage({
        message,
        type: 'error'
      })
    }
  }, 300)
}
