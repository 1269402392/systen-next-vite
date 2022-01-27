import { ITable } from '@/components/ly-table/type'

const contentConfig: ITable = {
  title: '商品',
  tableItems: [
    { label: '商品名称', prop: 'name', slotName: 'name' },
    {
      label: '旧价格',
      prop: 'oldPrice',
      width: '80',
      slotName: 'oldPrice'
    },
    {
      label: '价格',
      prop: 'newPrice',
      width: '80',
      slotName: 'newPrice'
    },
    { label: '图片', prop: 'imgUrl', width: '150', slotName: 'imgUrl' },
    { label: '创建时间', prop: 'createAt', width: '230', slotName: 'createAt' },
    { label: '更新时间', prop: 'updateAt', width: '230', slotName: 'updateAt' },
    { label: '操作', prop: 'handle', slotName: 'handle' }
  ],
  isSelection: true,
  isIndex: false
}

export default contentConfig
