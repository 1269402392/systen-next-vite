import { IDialogType } from '@/components/page-dialog/type'

const dialogConfig: IDialogType = {
  title: '分类',
  form: {
    formItems: [
      {
        type: 'text',
        filed: 'id',
        label: 'id',
        placeholder: '请输入id',
        isShow: true
      },
      {
        type: 'text',
        filed: 'name',
        label: '分类名称',
        placeholder: '请输入分类名称'
      }
    ],
    colStyle: {
      span: 24
    }
  }
}
export default dialogConfig
