<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <template v-for="item in amountData" :key="item.title">
        <el-col :md="12" :lg="6" :xl="6">
          <ly-card :title="item.title">
            <page-count title="Sale Volume" :number="item.number1" />
          </ly-card>
        </el-col>
      </template>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="7">
        <ly-card title="分类商品的数量">
          <pie-echarts :pie-data="pieData" />
        </ly-card>
      </el-col>
      <el-col :span="10">
        <ly-card title="不同城市商品的销量">
          <map-echarts />
        </ly-card>
      </el-col>
      <el-col :span="7">
        <ly-card title="分类商品的数量(玫瑰图)">
          <rose-echarts :rose-data="pieData" />
        </ly-card>
      </el-col>
      <el-col :span="12">
        <ly-card title="分类商品的销量(折线图)">
          <line-echarts :x-axis-data="xAxisData" :y-axis-data="yAxisData" />
        </ly-card>
      </el-col>
      <el-col :span="12">
        <ly-card title="分类商品的收藏(支持鼠标滚轮效果)">
          <bar-echarts :x-axis-data="pillarXData" :y-axis-data="pillarYData" />
        </ly-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

import { useStore } from '@/store'

import LyCard from '@/components/ly-card'
import PieEcharts from '@/views/main/analysis/dashboard/children/PieEcharts.vue'
import RoseEcharts from '@/views/main/analysis/dashboard/children/RoseEcharts.vue'
import MapEcharts from '@/views/main/analysis/dashboard/children/MapEcharts.vue'
import LineEcharts from '@/views/main/analysis/dashboard/children/LineEcharts.vue'
import BarEcharts from '@/views/main/analysis/dashboard/children/BarEcharts.vue'
import PageCount from '@/components/page-count/src/PageCount.vue'

export default defineComponent({
  name: 'Dashboard',
  components: {
    PageCount,
    BarEcharts,
    LineEcharts,
    MapEcharts,
    RoseEcharts,
    PieEcharts,
    LyCard
  },
  setup() {
    const store = useStore()
    store.dispatch('analysis/acquireChartData')
    const pieData = computed(() => {
      return store.state.analysis.pieData.map((item) => ({
        name: item.name,
        value: item.goodsCount
      }))
    })
    // 折线图
    const xAxisData = computed(() => {
      if (store.state.analysis.lineData.common) {
        return store.state.analysis.lineData.common.month
      }
      return []
    })
    const yAxisData = computed(() => {
      if (store.state.analysis.lineData.map) {
        return store.state.analysis.lineData.map.data
      }
      return []
    })
    // 柱状图
    const pillarXData = computed(() => {
      return store.state.analysis.barData.map((item) => item.name)
    })
    const pillarYData = computed(() => {
      return store.state.analysis.barData.map((item) => item.goodsFavor)
    })
    // 统计数据
    const amountData = computed(() => store.state.analysis.amountData)
    return {
      pieData,
      xAxisData,
      yAxisData,
      pillarXData,
      pillarYData,
      amountData
    }
  }
})
</script>

<style scoped lang="less">
.el-col {
  margin-bottom: 10px;
}
</style>
