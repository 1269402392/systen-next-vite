import { ITable } from '@/components/ly-table/type'

const contentConfig: ITable = {
  title: '部门',
  tableItems: [
    // { label: 'id', prop: 'id', slotName: 'id' },
    { label: '部门名称', prop: 'name', slotName: 'name' },
    { label: '部门领导', prop: 'leader', slotName: 'leader' },
    { label: '上级部门', prop: 'parentId', slotName: 'parentId' },
    { label: '创建时间', prop: 'createAt', slotName: 'createAt' },
    { label: '更新时间', prop: 'updateAt', slotName: 'updateAt' },
    { label: '操作', prop: 'handle', slotName: 'handle' }
  ],
  isSelection: true,
  isIndex: true
}

export default contentConfig
