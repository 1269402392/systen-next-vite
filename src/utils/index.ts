import { useStore } from '@/store'
// 根据部门 id 查找名称
export function $department(parentId: number) {
  const store = useStore()
  const department = store.state.departmentList

  return department.find((item) => item.id === parentId)?.name ?? 'Boss'
}

// 根据角色 id 查找名称
export function $role(roleId: number) {
  const store = useStore()
  const roleList = store.state.roleList
  return roleList.find((item) => item.id === roleId)?.name ?? 'CEO'
}
