import { ITable } from '@/components/ly-table/type'

export const contentConfig: ITable = {
  title: '菜单',
  tableItems: [
    { label: '菜单名称', prop: 'name', slotName: 'name' },
    { label: '路由路径', prop: 'url', slotName: 'url' },
    { label: '创建时间', prop: 'createAt', slotName: 'createAt' },
    { label: '更新时间', prop: 'updateAt', slotName: 'updateAt' },
    { label: '操作', prop: 'handle', slotName: 'handle' }
  ],
  isFooter: false
}
