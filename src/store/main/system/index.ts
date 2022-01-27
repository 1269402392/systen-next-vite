import { Module } from 'vuex'
import { IRootData } from '@/store/type'
import { ISystemState } from '@/store/main/system/type'
import {
  deleteData,
  getDataList,
  insertData,
  updateData
} from '@/service/main/system'
import { showMessage } from '@/utils/show-message'
import * as _ from 'lodash'
const systemModule: Module<ISystemState, IRootData> = {
  namespaced: true,
  state() {
    return {
      usersList: [],
      usersTotal: 0,
      goodsList: [],
      goodsTotal: 0,
      roleList: [],
      roleTotal: 0,
      menuList: [],
      menuTotal: 0,
      categoryList: [],
      categoryTotal: 0,
      departmentList: [],
      departmentTotal: 0
    }
  },
  mutations: {
    eslint() {},
    handleUsersList(state, dataList) {
      state.usersList = dataList
    },
    handleUsersTotal(state, total) {
      state.usersTotal = total
    },
    handleGoodsList(state, dataList) {
      state.goodsList = dataList
    },
    handleGoodsTotal(state, total) {
      state.goodsTotal = total
    },
    handleRoleList(state, dataList) {
      state.roleList = dataList
    },
    handleRoleTotal(state, total) {
      state.roleTotal = total
    },
    handleMenuList(state, dataList) {
      state.menuList = dataList
    },
    handleMenuTotal(state, total) {
      state.menuTotal = total
    },
    handleCategoryList(state, dataList) {
      state.categoryList = dataList
    },
    handleCategoryTotal(state, total) {
      state.categoryTotal = total
    },
    handleDepartmentList(state, dataList) {
      state.departmentList = dataList
    },
    handleDepartmentTotal(state, total) {
      state.departmentTotal = total
    }
  },
  actions: {
    async getDataListAction({ commit }, payload: any) {
      const { pageName, pageInfo } = payload
      if (pageName) {
        const url = `/${pageName}/list`
        const { data: dataList } = await getDataList(url, pageInfo)
        commit(`handle${_.capitalize(pageName)}List`, dataList.list)
        commit(`handle${_.capitalize(pageName)}Total`, dataList.totalCount)
      }
    },
    async deleteDataAction({ commit, dispatch }, payload: any) {
      const { pageName, id } = payload
      const deleteResult = await deleteData(pageName, id)
      console.log(1)
      showMessage(deleteResult.code, deleteResult.data)
      dispatch('getDataListAction', {
        pageName,
        pageInfo: {
          offset: 0,
          size: 3
        }
      })
      commit('eslint')
    },
    async insertDataAction({ commit, dispatch }, payload: any) {
      const { pageName, pageInfo } = payload
      const url = `/${pageName}`
      const insertResult = await insertData(url, pageInfo)
      showMessage(insertResult.code, insertResult.data)
      dispatch('getDataListAction', {
        pageName,
        pageInfo: {
          offset: 0,
          size: 3
        }
      })
      commit('eslint')
    },
    async updateDataAction({ commit, dispatch }, payload: any) {
      const { pageName, pageInfo } = payload
      const url = `/${pageName}/${pageInfo.id}`
      const updateResult = await updateData(url, pageInfo)
      dispatch('getDataListAction', {
        pageName,
        pageInfo: {
          offset: 0,
          size: 3
        }
      })
      showMessage(updateResult.code, updateResult.data)
      dispatch('getDataListAction', {
        pageName,
        pageInfo: {
          offset: 0,
          size: 3
        }
      })
      commit('eslint')
    }
  },
  getters: {
    getDataList(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}List`]
      }
    },
    getDataTotal(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}Total`]
      }
    }
  }
}

export default systemModule
