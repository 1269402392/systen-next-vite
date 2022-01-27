<template>
  <div class="page-count">
    <div class="info">
      <div>
        <el-icon color="red"><histogram /></el-icon>
        <span>{{ title }}</span>
      </div>
      <ly-count class="number" :number="number" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LyCount from '@/components/ly-count/src/LyCount.vue'

export default defineComponent({
  name: 'PageCount',
  components: { LyCount },
  props: {
    title: {
      type: String,
      default: 'Sale Volume'
    },
    number: {
      type: Number,
      default: 999
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
.info {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  :deep(.el-icon) {
    position: relative;
    top: 2px;
    left: -10px;
    font-size: 17px;
  }
}
.number {
  font-size: 22px;
}
</style>
