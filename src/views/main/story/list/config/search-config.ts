import { ISearchType } from '@/components/page-search/type'

export const searchConfig: ISearchType = {
  title: '告白气球',
  form: {
    labelWidth: '100px',
    formItems: [
      {
        label: '故事名称',
        type: 'text',
        placeholder: '请输入故事名称',
        filed: 'name'
      },
      {
        label: '故事内容',
        type: 'text',
        placeholder: '请输入故事内容',
        filed: 'content'
      },
      { label: '创建时间', type: 'datepicker', filed: 'createAt' }
    ],
    colStyle: {
      span: 8
    }
  }
}
