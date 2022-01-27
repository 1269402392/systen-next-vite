<template>
  <ly-card title="项目规范">
    <el-descriptions
      class="margin-top"
      title="Git规范"
      :column="1"
      size="small"
      border
    >
      <template v-for="item in gitConfig" :key="item.label">
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

<script lang="ts" setup>
import { gitConfig } from '../config/skill-config'
</script>

<style scoped lang="less"></style>
