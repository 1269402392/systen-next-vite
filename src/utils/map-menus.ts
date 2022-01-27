import { RouteRecordRaw } from 'vue-router'
import { IBreadcrumb } from '@/components/nav-breadcrumb'

let firstPath: any = null

export function mapMenusToRoutes(menuList: any[]): RouteRecordRaw[] {
  // 存储二级菜单
  const routes: RouteRecordRaw[] = []
  // 存储所有的路由信息
  const allRoutes: RouteRecordRaw[] = []
  // 获取所有的路由信息 import.meta.globEager获取目标目录匹配的所有文件
  const routeFiles = import.meta.globEager('/src/router/main/**/*.ts')
  // 存储所有路由信息
  for (const route in routeFiles) {
    allRoutes.push(routeFiles[route].default)
  }
  // 递归查找匹配的路由并存储
  const _recurseGetRoute = (menuList: any[]) => {
    for (const menu of menuList) {
      if (menu.type === 2) {
        const route = allRoutes.find((item) => item.path === menu.url)
        if (!firstPath) firstPath = route!.path
        routes.push(route!)
      } else {
        _recurseGetRoute(menu.children)
      }
    }
  }

  _recurseGetRoute(menuList)

  return routes
}

export function pathMenuToBreadcrumb(menuList: any[], currentMenu: any) {
  const breadcrumb: IBreadcrumb[] = []
  pathToMenus(menuList, currentMenu, breadcrumb)
  return breadcrumb
}

export function pathToMenus(
  menuList: any[],
  currentPath: string,
  breadcrumb?: IBreadcrumb[]
) {
  for (const menu of menuList) {
    if (menu.url === currentPath) {
      return menu
    } else {
      const firstMenu: any = pathToMenus(menu.children ?? [], currentPath)
      if (firstMenu) {
        breadcrumb?.push({ title: menu.name })
        breadcrumb?.push({ title: firstMenu.name })
        return firstMenu
      }
    }
  }
}

export function treeKeysToMenus(menuList: any[]) {
  const treeKeys: number[] = []

  const _resourceTreeToKeys = (menuList: any, menuKeys: number[]) => {
    for (const menu of menuList) {
      if (menu.children && menu.children.length > 0) {
        _resourceTreeToKeys(menu.children, menuKeys)
      } else {
        menuKeys.push(menu.id)
      }
    }
  }
  _resourceTreeToKeys(menuList, treeKeys)

  return treeKeys
}

export function mapToPermission(menuList: any[], permission: string) {
  // const result: any = null

  const _resourcePermission = (menus: any[], authority: string) => {
    for (const menu of menus) {
      if (menu.permission === authority) {
        return menu
      } else {
        const first: any = _resourcePermission(menu.children ?? [], authority)
        if (first) return first
      }
    }
  }

  return !!_resourcePermission(menuList, permission)
}

export { firstPath }
