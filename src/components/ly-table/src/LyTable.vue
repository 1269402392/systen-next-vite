<template>
  <div class="ly-table">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <el-table
      :data="tableData"
      row-key="id"
      border
      style="width: 100%"
      @selection-change="selectChange"
    >
      <el-table-column v-if="isSelection" align="center" type="selection" />
      <el-table-column v-if="isIndex" align="center" type="index" />
      <el-table-column v-if="isExpand" type="expand"></el-table-column>
      <template v-for="(item, index) in tableItems" :key="index">
        <el-table-column
          show-overflow-tooltip
          :label="item.label"
          align="center"
          :width="item.width"
        >
          <template #default="scope">
            <slot :name="item.slotName" :row="scope.row">
              {{ scope.row[`${item.prop}`] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div v-if="isFooter" class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'
import { ITableItem } from '@/components/ly-table/type'

export default defineComponent({
  name: 'LyTable',

  props: {
    tableData: {
      type: Array,
      required: true
    },
    tableItems: {
      type: Array as PropType<ITableItem[]>,
      required: true
    },
    isSelection: {
      type: Boolean,
      default: false
    },
    isIndex: {
      type: Boolean,
      default: false
    },
    isFooter: {
      type: Boolean,
      default: true
    },
    isExpand: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const selectValues = ref([])
    const selectChange = (select: any) => {
      selectValues.value = select
    }
    return {
      selectChange,
      selectValues
    }
  }
})
</script>

<style scoped lang="less"></style>
