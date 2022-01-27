import { ISearchType } from '@/components/page-search/type'

const searchConfig: ISearchType = {
  title: '超人不会飞',
  form: {
    labelWidth: '100px',
    formItems: [
      {
        label: '分类名称',
        type: 'text',
        placeholder: '请输入分类名称',
        filed: 'name'
      },
      {
        label: '说走就走',
        type: 'text',
        filed: 'name',
        placeholder: '手牵手弹着斑鸠'
      },
      { label: '创建时间', type: 'datepicker', filed: 'createAt' }
    ]
  }
}

export default searchConfig
