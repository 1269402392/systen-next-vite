import { ITable } from '@/components/ly-table/type'

const contentConfig: ITable = {
  title: '分类',
  tableItems: [
    { label: '名称', prop: 'name', slotName: 'name' },
    { label: '创建时间', prop: 'createAt', slotName: 'createAt' },
    { label: '更新时间', prop: 'updateAt', slotName: 'updateAt' },
    { label: '操作', prop: 'handle', slotName: 'handle' }
  ],
  isSelection: true,
  isIndex: true
}

export default contentConfig
