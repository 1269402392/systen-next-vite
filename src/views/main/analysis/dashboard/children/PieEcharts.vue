<template>
  <div class="pie-echarts">
    <page-echarts :options="options" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, watchEffect } from 'vue'
import PageEcharts from '@/components/page-echarts'
import { EChartsOption } from 'echarts'
import { IEchartsType } from '@/components/page-echarts/type'

export default defineComponent({
  name: 'PieEcharts',
  components: { PageEcharts },
  props: {
    pieData: {
      type: Array as PropType<IEchartsType[]>,
      required: true
    }
  },
  setup(props) {
    const options = ref<EChartsOption>({})
    watchEffect(() => {
      options.value = {
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'horizontal',
          left: 'left'
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: '50%',
            data: props.pieData,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }
    })
    return { options }
  }
})
</script>

<style scoped lang="less"></style>
