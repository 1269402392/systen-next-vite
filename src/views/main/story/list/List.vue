<template>
  <div class="list">
    <page-search :search-config="searchConfig" />
    <page-content :page-name="''" :content-config="contentConfig" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { searchConfig } from './config/search-config'
import { contentConfig } from './config/content-config'
import PageSearch from '@/components/page-search/src/PageSearch.vue'
import PageContent from '@/components/page-content/src/PageContent.vue'

export default defineComponent({
  name: 'List',
  components: { PageContent, PageSearch },
  setup() {
    return {
      searchConfig,
      contentConfig
    }
  }
})
</script>

<style scoped></style>
