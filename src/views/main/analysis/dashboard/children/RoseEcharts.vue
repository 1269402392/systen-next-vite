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
  name: 'RoseEcharts',
  components: { PageEcharts },
  props: {
    roseData: {
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
            type: 'pie',
            radius: [20, 100],
            center: ['50%', '50%'],
            roseType: 'area',
            itemStyle: {
              borderRadius: 8
            },
            data: props.roseData
          }
        ]
      }
    })
    return { options }
  }
})
</script>

<style scoped lang="less"></style>
