<template>
  <div class="overview">
    <over-header />
    <over-section />
    <over-footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import OverHeader from '@/views/main/analysis/overview/children/OverHeader.vue'
import OverSection from '@/views/main/analysis/overview/children/OverSection.vue'
import OverFooter from '@/views/main/analysis/overview/children/OverFooter.vue'

export default defineComponent({
  name: 'Overview',
  components: { OverFooter, OverSection, OverHeader },
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
.ly-card {
  margin-bottom: 15px;
}
</style>
