<template>
  <div class="ly-from">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <el-form
      ref="formRef"
      :model="LyFormData"
      :label-width="labelWidth"
      :rules="rules"
      class="demo-form-inline"
    >
      <el-row>
        <el-col
          v-for="(item, index) in formItems"
          :key="index"
          v-bind="colStyle"
        >
          <el-form-item
            v-if="!item.isShow"
            :prop="item.filed"
            :label="item.label"
            size="large"
          >
            <template v-if="item.type === 'text' || item.type === 'password'">
              <el-input
                v-model="LyFormData[`${item.filed}`]"
                type="text"
                :placeholder="item.placeholder"
              ></el-input>
            </template>
            <template v-if="item.type === 'select'">
              <el-select
                v-model="LyFormData[`${item.filed}`]"
                :placeholder="item.placeholder"
              >
                <el-option
                  v-for="option in item.options"
                  :key="option.value"
                  :label="option.label"
                  :value="option.value"
                ></el-option>
              </el-select>
            </template>
            <template v-if="item.type === 'datepicker'">
              <el-date-picker
                v-model="LyFormData[`${item.filed}`]"
                type="datetimerange"
                range-separator="To"
                start-placeholder="Start date"
                end-placeholder="End date"
              >
              </el-date-picker>
            </template>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, watch } from 'vue'
import { IFromItem } from '@/components/ly-from/type'
import { ElForm } from 'element-plus'

export default defineComponent({
  name: 'LyFrom',
  props: {
    formItems: {
      type: Array as PropType<IFromItem[]>,
      default: () => []
    },
    rules: {
      type: Object,
      default: () => {}
    },
    labelWidth: {
      type: String,
      default: '100px'
    },
    modelValue: {
      type: Object,
      require: true
    },
    colStyle: {
      type: Object,
      default: () => ({
        xl: 6,
        lg: 8,
        md: 12,
        sm: 24,
        xs: 24
      })
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const formRef = ref<InstanceType<typeof ElForm>>()
    const LyFormData = ref({ ...props.modelValue }) // 浅拷贝

    watch(
      () => LyFormData,
      (newValue) => {
        emit('update:modelValue', newValue.value)
      },
      {
        deep: true
      }
    )

    return {
      LyFormData,
      formRef
    }
  }
})
</script>

<style scoped lang="less">
.header {
  text-align: center;
  margin: 0 0 30px 0;
}
.el-col {
  width: 100%;
}
:deep(.el-date-editor) {
  width: 100%;
}
:deep(.el-range-editor.el-input__inner) {
  width: 100%;
}
</style>
