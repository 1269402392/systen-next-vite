import { ITable } from '@/components/ly-table/type'

export const contentConfig: ITable = {
  title: '角色',
  tableItems: [
    { label: '角色名', prop: 'name', slotName: 'name' },
    { label: '介绍', prop: 'intro', slotName: 'intro' },
    { label: '创建时间', prop: 'createAt', slotName: 'createAt' },
    { label: '更新时间', prop: 'updateAt', slotName: 'updateAt' },
    { label: '操作', prop: 'handle', slotName: 'handle' }
  ],
  isSelection: true,
  isIndex: false
}
