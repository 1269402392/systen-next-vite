<template>
  <div class="bar-echarts">
    <page-echarts :options="options" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, PropType, ref, watchEffect } from 'vue'

import { EChartsOption } from 'echarts'
import * as echarts from 'echarts'
import PageEcharts from '@/components/page-echarts/src/PageEcharts.vue'

export default defineComponent({
  name: 'BarEcharts',
  components: { PageEcharts },
  props: {
    xAxisData: {
      type: Array as PropType<string[]>,
      required: true
    },
    yAxisData: {
      type: Array as PropType<number[]>,
      required: true
    }
  },
  setup(props) {
    const options = ref<EChartsOption>({})

    onMounted(() => {
      watchEffect(() => {
        options.value = {
          tooltip: {},
          xAxis: {
            type: 'category',
            data: props.xAxisData
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              data: props.yAxisData,
              type: 'bar',
              showBackground: true,
              backgroundStyle: {
                color: 'rgba(180, 180, 180, 0.2)'
              },
              itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: '#2E72BF'
                  },
                  {
                    offset: 1,
                    color: '#23E5E5'
                  }
                ])
              }
            }
          ]
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
