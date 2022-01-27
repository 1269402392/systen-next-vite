<template>
  <div class="category-echarts">
    <page-echarts :options="options" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, PropType, ref, watchEffect } from 'vue'

import { EChartsOption } from 'echarts'
import * as echarts from 'echarts'
import PageEcharts from '@/components/page-echarts/src/PageEcharts.vue'

export default defineComponent({
  name: 'LineEcharts',
  components: { PageEcharts },
  props: {
    xAxisData: {
      type: Array as PropType<string[]>,
      default: () => []
    },
    yAxisData: {
      type: Array,
      default: () => []
    }
  },
  setup(props) {
    const colorOption = [
      ['rgb(128, 255, 165)', 'rgb(1, 191, 236)'],
      ['rgb(0, 221, 255)', 'rgb(77, 119, 255)'],
      ['rgb(55, 162, 255)', 'rgb(116, 21, 219)'],
      ['rgb(255, 0, 135)', 'rgb(135, 0, 157)'],
      ['rgb(255, 191, 0)', 'rgb(224, 62, 76)']
    ]
    const options = ref<EChartsOption>({})
    onMounted(() => {
      watchEffect(() => {
        options.value = {
          color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              label: {
                backgroundColor: '#6a7985'
              }
            }
          },
          legend: {
            data: props.yAxisData?.map((item: any) => item.name)
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: [
            {
              type: 'category',
              boundaryGap: false,
              data: props.xAxisData
            }
          ],
          yAxis: [
            {
              type: 'value'
            }
          ],
          series: props.yAxisData?.map((item: any, index: number) => ({
            name: item.name,
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
              width: 0
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: colorOption[index][0]
                },
                {
                  offset: 1,
                  color: colorOption[index][1]
                }
              ])
            },
            emphasis: {
              focus: 'series'
            },
            data: item.data
          }))
        }
      })
    })
    return {
      options
    }
  }
})
</script>

<style scoped lang="less"></style>
