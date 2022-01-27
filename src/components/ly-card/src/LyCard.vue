<template>
  <div class="ly-card">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>{{ title }}</span>
        </div>
      </template>
      <slot></slot>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LyCard',
  props: {
    title: {
      type: String,
      default: () => 'Card name'
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less"></style>
