<template>
  <div class="page-echarts">
    <div ref="echartsRef" class="main"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, PropType, watchEffect } from 'vue'
import * as echarts from 'echarts'
import { EChartsOption } from 'echarts'
export default defineComponent({
  name: 'PageEcharts',
  props: {
    options: {
      type: Object as PropType<EChartsOption>,
      required: true
    }
  },
  setup(props) {
    const echartsRef = ref<HTMLElement>()
    onMounted(() => {
      const echartsInstance = echarts.init(echartsRef.value!, undefined, {
        renderer: 'svg'
      })
      watchEffect(
        () => props.options && echartsInstance.setOption(props.options)
      )
    })
    return {
      echartsRef
    }
  }
})
</script>

<style scoped lang="less">
.main {
  height: 340px;
}
</style>
