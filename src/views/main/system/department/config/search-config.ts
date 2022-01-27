import { ISearchType } from '@/components/page-search/type'

const searchConfig: ISearchType = {
  title: '给我一首歌的时间',
  form: {
    labelWidth: '100px',
    formItems: [
      {
        label: '部门名称',
        type: 'text',
        placeholder: '请输入部门名称',
        filed: 'name'
      },
      {
        label: '部门领导',
        type: 'text',
        placeholder: '请输入部门领导',
        filed: 'leader'
      },
      { label: '创建时间', type: 'datepicker', filed: 'createAt' }
    ]
  }
}

export default searchConfig
