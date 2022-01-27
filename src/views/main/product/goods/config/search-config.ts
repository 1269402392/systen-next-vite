import { ISearchType } from '@/components/page-search/type'

const searchConfig: ISearchType = {
  title: '听妈妈的话',
  form: {
    labelWidth: '100px',
    formItems: [
      {
        label: '商品名称',
        type: 'text',
        placeholder: '请输入商品名称',
        filed: 'name'
      },
      {
        label: '商品价格',
        type: 'text',
        placeholder: '请输入商品价格',
        filed: 'name'
      },
      { label: '创建时间', type: 'datepicker', filed: 'createAt' }
    ]
  }
}

export default searchConfig
