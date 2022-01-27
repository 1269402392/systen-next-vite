<template>
  <div class="goods">
    <page-search :search-config="searchConfig" />
    <page-content :content-config="contentConfig" page-name="goods">
      <template #imgUrl="scope">
        <div class="demo-image__preview">
          <el-image
            style="width: 80%; position: relative; top: -20px"
            hide-on-click-modal
            :src="scope.row.imgUrl"
            :preview-src-list="[scope.row.imgUrl]"
            :initial-index="1"
          >
          </el-image>
        </div>
      </template>
    </page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageContent from '@/components/page-content/src/PageContent.vue'
import contentConfig from './config/content-config'
import searchConfig from '@/views/main/product/goods/config/search-config'
import PageSearch from '@/components/page-search/src/PageSearch.vue'

export default defineComponent({
  name: 'Goods',
  components: { PageSearch, PageContent },
  setup() {
    return { contentConfig, searchConfig }
  }
})
</script>

<style scoped lang="less">
.demo-image__preview {
  height: 45px;
}
</style>
