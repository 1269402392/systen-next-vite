import { ISearchType } from '@/components/page-search/type'

export const searchConfig: ISearchType = {
  title: '爱的飞行日记',
  form: {
    labelWidth: '100px',
    formItems: [
      {
        label: '角色名',
        type: 'text',
        placeholder: '请输入角色名',
        filed: 'name'
      },
      {
        label: '介绍',
        type: 'text',
        placeholder: '请输入介绍内容',
        filed: 'intro'
      },
      { label: '创建时间', type: 'datepicker', filed: 'createAt' }
    ],
    colStyle: {
      span: 8
    }
  }
}
