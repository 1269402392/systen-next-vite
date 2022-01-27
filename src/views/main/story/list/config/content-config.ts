import { ITable } from '@/components/ly-table/type'

export const contentConfig: ITable = {
  title: '角色',
  tableItems: [
    { label: '故事标题', prop: 'name', slotName: 'name' },
    { label: '古诗内容', prop: 'content', slotName: 'content' },
    { label: '创建时间', prop: 'createAt', slotName: 'createAt' },
    { label: '更新时间', prop: 'updateAt', slotName: 'updateAt' },
    { label: '操作', prop: 'handle', slotName: 'handle' }
  ],
  isSelection: true,
  isIndex: false,
  isFooter: false
}
