<template>
  <ly-card title="项目规范">
    <el-descriptions
      class="margin-top"
      title="文件规范"
      :column="1"
      size="small"
      border
    >
      <template v-for="item in fieldConfig" :key="item.label">
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">
              {{ item.label }}
            </div>
          </template>
          <el-tag type="success">
            {{ item.value }}
          </el-tag>
        </el-descriptions-item>
      </template>
    </el-descriptions>
    <el-descriptions
      class="margin-top cpn-description"
      title="组件规范"
      :column="1"
      size="small"
      border
    >
      <template v-for="item in componentConfig" :key="item.label">
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">
              {{ item.label }}
            </div>
          </template>
          <el-tag type="success">
            {{ item.value }}
          </el-tag>
        </el-descriptions-item>
      </template>
    </el-descriptions>
  </ly-card>
</template>

<script setup lang="ts">
import { fieldConfig, componentConfig } from '../config/skill-config'
</script>

<style scoped lang="less"></style>
