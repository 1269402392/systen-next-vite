import { createStore, Store, useStore as VuexUseStore } from 'vuex'
import { getDataList } from '@/service/main/system'
import { IRootData, IStoreType } from './type'
import login from './login'
import system from '@/store/main/system'
import analysis from '@/store/main/analysis'
import cache from '@/utils/cache'
const store: Store<IRootData> = createStore({
  state() {
    return {
      departmentList: [],
      roleList: [],
      menuList: []
    }
  },
  mutations: {
    handleDepartmentList(state, list: any[]) {
      state.departmentList = list
    },
    handleRoleList(state, list: any) {
      state.roleList = list
    },
    handleMenuList(state, list: any) {
      state.menuList = list
    }
  },
  actions: {
    async getInitiationAction({ commit }) {
      if (!cache.getCache('token')) return
      const { data: departmentList } = await getDataList('/department/list')
      commit('handleDepartmentList', departmentList.list)
      const { data: roleList } = await getDataList('/role/list')
      commit('handleRoleList', roleList.list)
      const { data: menuList } = await getDataList('/menu/list')
      commit('handleMenuList', menuList.list)
    }
  },
  getters: {},
  modules: {
    login,
    system,
    analysis
  }
})
// 解决浏览器刷新时Vuex数据丢失问题(缓存)
export const setupStore = () => {
  store.dispatch('login/setupLocalLogin').then()
}

export function useStore(): Store<IStoreType> {
  return VuexUseStore()
}

export default store
