<template>
  <div class="page-search">
    <ly-from v-model="formData" v-bind="searchConfig.form">
      <template #header>
        <h2>{{ searchConfig.title ?? '蒲公英的约定' }}</h2>
      </template>
      <template v-if="searchConfig.form?.formItems !== undefined" #footer>
        <div class="btns">
          <el-button size="large" @click="resetClick">
            <el-icon><refresh /></el-icon>
            <span>重置</span>
          </el-button>
          <el-button size="large" type="primary" @click="queryClick">
            <el-icon><search /></el-icon>
            <span>查询</span>
          </el-button>
        </div>
      </template>
    </ly-from>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'
import LyFrom from '@/components/ly-from'
import { ISearchType } from '@/components/page-search/type'

export default defineComponent({
  name: 'PageSearch',
  components: {
    LyFrom
  },
  props: {
    searchConfig: {
      type: Object as PropType<ISearchType>,
      require: true
    }
  },
  emits: ['handleQuery', 'handleReset'],
  setup(props, { emit }) {
    const formData: any = ref({})
    for (const item of props.searchConfig!.form?.formItems ?? []) {
      formData.value[`${item.filed}`] = ''
    }
    const resetClick = () => {
      for (const item of props.searchConfig!.form?.formItems ?? []) {
        formData.value[`${item.filed}`] = ''
      }
      emit('handleQuery', { ...formData.value })
    }
    const queryClick = () => {
      emit('handleQuery', { ...formData.value })
    }
    return {
      formData,
      resetClick,
      queryClick
    }
  }
})
</script>

<style scoped lang="less">
.page-search {
  width: 100%;
  padding: 20px 10px;
  box-sizing: border-box;
  background-color: white;
  .btns {
    text-align: center;
  }
}
</style>
