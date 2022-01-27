import { ITable } from '@/components/ly-table/type'

const contentConfig: ITable = {
  title: '用户',
  tableItems: [
    // { label: 'id', prop: 'id', width: '100', slotName: 'id' },
    { label: '姓名', prop: 'name', width: '100', slotName: 'name' },

    { label: '真实姓名', prop: 'realname', width: '100', slotName: 'realname' },
    {
      label: '电话号码',
      prop: 'cellphone',
      width: '150',
      slotName: 'cellphone'
    },
    { label: '状态', prop: 'enable', width: '80', slotName: 'enable' },
    { label: '角色ID', prop: 'roleId', width: '70', slotName: 'roleId' },
    {
      label: '部门ID',
      prop: 'departmentId',
      width: '70',
      slotName: 'departmentId'
    },
    { label: '创建时间', prop: 'createAt', width: '230', slotName: 'createAt' },
    { label: '更新时间', prop: 'updateAt', width: '230', slotName: 'updateAt' },
    { label: '操作', prop: 'handle', slotName: 'handle' }
  ],
  isSelection: true,
  isIndex: false
}

export default contentConfig
