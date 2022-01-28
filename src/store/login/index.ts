import { Module } from 'vuex'
import { ILoginState } from './type'
import { IRootData } from '../type'
import { ILogin } from '../../service/login/type'
import { getUserInfo, getUserMenus, loginRequest } from '../../service/login'
import cache from '../../utils/cache'
import router from '../../router'
import { mapMenusToRoutes } from '../../utils/map-menus'
import { showMessage } from '@/utils/show-message'

const loginModule: Module<ILoginState, IRootData> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: []
    }
  },
  mutations: {
    saveToken(state, token) {
      state.token = token
    },
    saveUserInfo(state, userInfo) {
      state.userInfo = userInfo
    },
    saveUserMenus(state, menuList) {
      state.userMenus = menuList
      const routes = mapMenusToRoutes(menuList)

      routes.forEach((route) => router.addRoute('main', route))
    }
  },
  actions: {
    async loginAction({ commit }, payload: ILogin) {
      const { data } = await loginRequest(payload)
      // 设置token
      commit('saveToken', data.token)
      cache.setCache('token', data.token)
      // 请求用户详细信息
      const { data: userInfo } = await getUserInfo(data.id)
      commit('saveUserInfo', userInfo)
      cache.setCache('userInfo', userInfo)
      // 请求用户菜单
      const { data: menuList } = await getUserMenus(userInfo.role.id)
      commit('saveUserMenus', menuList)
      cache.setCache('userMenus', menuList)
      if (data.token) showMessage(0, '使用过程中有BUG不要慌，忽略就好了~')

      await router.push('/main')
    },
    setupLocalLogin({ commit, dispatch }) {
      const token = cache.getCache('token')
      if (token) {
        commit('saveToken', token)
      }
      const userInfo = cache.getCache('userInfo')
      if (userInfo) {
        commit('saveUserInfo', userInfo)
      }
      const userMenus = cache.getCache('userMenus')
      if (userMenus) {
        commit('saveUserMenus', userMenus)
      }

      // 获取部门角色下拉数据
      dispatch('getInitiationAction', null, { root: true })
    }
  }
}

export default loginModule
