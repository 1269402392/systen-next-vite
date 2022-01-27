<template>
  <div ref="mapRef" class="map"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import * as echarts from 'echarts'
import axios from 'axios'
export default defineComponent({
  name: 'MapEcharts',
  setup() {
    const mapRef = ref<HTMLElement>()

    onMounted(async () => {
      const chinaData = await axios.get('/map/china.json')
      const myChart = echarts.init(mapRef.value!)
      // 注册地图
      echarts.registerMap('china', chinaData.data)

      let mapName = 'china'
      let data = [
        { name: '北京', value: 199 },
        { name: '黑龙江', value: 123 },
        { name: '江苏', value: 92 },
        { name: '山东', value: 119 },
        { name: '河南', value: 137 },
        { name: '湖北', value: 116 },
        { name: '湖南', value: 114 },
        { name: '重庆', value: 91 },
        { name: '四川', value: 125 },
        { name: '贵州', value: 62 },
        { name: '云南', value: 83 },
        { name: '西藏', value: 9 },
        { name: '陕西', value: 80 },
        { name: '甘肃', value: 56 },
        { name: '宁夏', value: 18 },
        { name: '新疆', value: 180 },
        { name: '广东', value: 123 },
        { name: '广西', value: 59 },
        { name: '海南', value: 14 }
      ]
      let geoCoordMap: any = {}

      /*获取地图数据*/
      myChart.showLoading()
      let mapFeatures = echarts.getMap(mapName).geoJson.features
      myChart.hideLoading()
      mapFeatures.forEach(function (v: any) {
        // 地区名称
        let name = v.properties.name
        // 地区经纬度
        geoCoordMap[name] = v.properties.cp
      })
      let convertData = function (data: any) {
        let res = []
        for (let i = 0; i < data.length; i++) {
          let geoCoord = geoCoordMap[data[i].name]
          if (geoCoord) {
            res.push({
              name: data[i].name,
              value: geoCoord.concat(data[i].value)
            })
          }
        }
        return res
      }
      const option = {
        tooltip: {
          padding: 0,
          enterable: true,
          transitionDuration: 1,
          color: '#000',
          decoration: 'none'
        },
        visualMap: {
          show: true,
          min: 0,
          max: 200,
          left: '10%',
          top: 'bottom',
          calculable: true,
          seriesIndex: [1],
          inRange: {
            color: ['#04387b', '#467bc0'] // 蓝绿
          }
        },
        geo: {
          show: true,
          map: mapName,
          label: {
            show: false
          },
          roam: false,
          itemStyle: {
            areaColor: '#023677',
            borderColor: '#1180c7'
          }
        },
        series: [
          {
            name: '散点',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertData(data),
            symbolSize: function (val: any) {
              return val[2] / 10
            },
            label: {
              formatter: '{b}',
              position: 'right',
              show: true
            },
            itemStyle: {
              color: '#fff'
            }
          },
          {
            type: 'map',
            map: mapName,
            geoIndex: 0,
            aspectScale: 0.75, //长宽比
            showLegendSymbol: false, // 存在legend时显示
            label: {
              show: false,
              color: '#fff'
            },
            roam: true,
            itemStyle: {
              areaColor: '#031525',
              borderColor: '#3B5077'
            },
            animation: false,
            data: data
          },
          {
            name: '点',
            type: 'scatter',
            coordinateSystem: 'geo',
            zlevel: 6
          },
          {
            name: 'Top 5',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: convertData(
              data
                .sort(function (a, b) {
                  return b.value - a.value
                })
                .slice(0, 10)
            ),
            symbolSize: function (val: any) {
              return val[2] / 10
            },
            showEffectOn: 'render',
            rippleEffect: {
              brushType: 'stroke'
            },
            label: {
              formatter: '{b}',
              position: 'left',
              show: false,
              color: 'yellow',
              shadowBlur: 10,
              shadowColor: 'yellow'
            },
            zlevel: 1
          }
        ]
      }
      myChart.setOption(option)
    })
    return {
      mapRef
    }
  }
})
</script>

<style lang="less" scoped>
.map {
  width: 500px;
  height: 340px;
}
</style>
