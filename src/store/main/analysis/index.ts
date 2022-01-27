import { Module } from 'vuex'
import { IAnalysisState } from '@/store/main/analysis/type'
import { IRootData } from '@/store/type'
import { runGetRequest } from '@/service/main/analysis'
import { handleGetRequest } from '@/service/other'

const analysisModule: Module<IAnalysisState, IRootData> = {
  namespaced: true,
  state() {
    return {
      pieData: [],
      lineData: {},
      addressData: [],
      barData: [],
      amountData: []
    }
  },
  mutations: {
    handlePieData(state, list: any) {
      state.pieData = list
    },
    handleLineData(state, payload: any) {
      state.lineData = payload
    },
    handleAddressData(state, list: any) {
      state.addressData = list
    },
    handleBarData(state, list: any) {
      state.barData = list
    },
    handleAmountSale(state, list: any) {
      state.amountData = list
    }
  },
  actions: {
    // 获取图表数据
    async acquireChartData({ commit }) {
      const { data: pieData } = await runGetRequest('/goods/category/count')
      commit('handlePieData', pieData)
      // handleGetRequest -> 自定义其他接口请求
      const lineData = await handleGetRequest(
        'http://47.116.26.11:8096/api/trend'
      )
      commit('handleLineData', lineData)
      const { data: addressData } = await runGetRequest('/goods/address/sale')
      commit('handleAddressData', addressData)
      const { data: barData } = await runGetRequest('/goods/category/favor')
      commit('handleBarData', barData)
      const { data: amount } = await runGetRequest('/goods/amount/list')
      commit('handleAmountSale', amount)
    }
  }
}

export default analysisModule
