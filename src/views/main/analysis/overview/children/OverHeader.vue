<template>
  <div class="over-header">
    <ly-card title="故河十九年春">
      <el-icon><bell-filled /></el-icon>RMS(Backstage Management System) 是基于
      Vue3、Vuex、VueRouter、Vite、 ElementPlus
      、TypeScript、Echart5、mitt、countUp等技术建立的后台管理系统
    </ly-card>
    <ly-card title="技术栈">
      <el-descriptions
        class="margin-top"
        title="Technical Standard"
        :column="2"
      >
        <template v-for="item in skillList" :key="item.label">
          <el-descriptions-item>
            <template #label>
              <el-icon>
                <component :is="item.iconCpn"></component>
              </el-icon>
              <span> {{ item.label }} </span>
            </template>
            <el-link :href="item.link" type="primary">{{ item.value }}</el-link>
          </el-descriptions-item>
        </template>
      </el-descriptions>
    </ly-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LyCard from '@/components/ly-card/src/LyCard.vue'
import { skillList } from '@/views/main/analysis/overview/config/skill-config'

export default defineComponent({
  name: 'OverHeader',
  components: { LyCard },
  setup() {
    return {
      skillList
    }
  }
})
</script>

<style scoped lang="less">
.over-header {
  margin-bottom: 15px;
}
.ly-card {
  margin-bottom: 10px;
}
:deep(.el-icon) {
  font-size: 17px;
  position: relative;
  top: 2.8px;
  left: -5px;
}
.cpn-description {
  margin-top: 20px;
}
</style>
