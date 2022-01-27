<template>
  <el-config-provider :locale="locale">
    <div class="app">
      <router-view v-slot="props">
        <keep-alive>
          <component :is="props.Component"></component>
        </keep-alive>
      </router-view>
    </div>
  </el-config-provider>
</template>

<script>
import { defineComponent } from 'vue'
import { ElConfigProvider } from 'element-plus'

import zhCn from 'element-plus/lib/locale/lang/zh-cn'

export default defineComponent({
  components: {
    ElConfigProvider
  },
  setup() {
    return {
      locale: zhCn
    }
  }
})
</script>

<style lang="less">
.app {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  //min-height: 500px;
  min-width: 1190px;
}
</style>
