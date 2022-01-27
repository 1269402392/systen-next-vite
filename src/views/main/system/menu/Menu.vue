<template>
  <div class="menu">
    <page-search :search-config="searchConfig" />
    <page-content page-name="menu" :content-config="contentConfig">
      <template #url="scope">
        <el-tag v-if="scope.row.type === 1" size="large" plain>
          {{ scope.row.url }}
        </el-tag>
        <el-tag
          v-else-if="scope.row.type === 2"
          type="success"
          size="large"
          plain
        >
          {{ scope.row.url }}
        </el-tag>
        <el-tag
          v-else-if="scope.row.type === 3"
          type="warning"
          size="large"
          plain
        >
          {{ scope.row.permission }}
        </el-tag>
      </template>
    </page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { searchConfig } from './config/search-config'
import { contentConfig } from './config/content-config'
import PageSearch from '@/components/page-search/src/PageSearch.vue'

export default defineComponent({
  name: 'Menu',
  components: { PageSearch },
  setup() {
    return {
      searchConfig,
      contentConfig
    }
  }
})
</script>

<style scoped></style>
