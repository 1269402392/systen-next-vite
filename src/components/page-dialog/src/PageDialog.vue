<template>
  <div class="page-dialog">
    <el-dialog
      v-model="dialogVisible"
      destroy-on-close
      :title="title"
      width="30%"
      center
    >
      <ly-from ref="lyFormRef" v-model="formData" v-bind="form" />
      <slot></slot>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">Cancel</el-button>
          <el-button type="primary" @click="confirmClick">Confirm</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { ref, watch, defineComponent, PropType } from 'vue'
import { useStore } from '@/store'
import { IFrom } from '@/components/ly-from/type'
import LyFrom from '@/components/ly-from'
import 'element-plus/theme-chalk/el-message-box.css'
export default defineComponent({
  name: 'PageDialog',
  components: { LyFrom },
  props: {
    pageName: {
      type: String,
      required: true
    },
    form: {
      type: Object as PropType<IFrom>,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    defaultData: {
      type: Object,
      default: () => {}
    },
    otherInfo: {
      type: Object,
      default: () => {}
    }
  },
  setup(props) {
    const lyFormRef = ref<InstanceType<typeof LyFrom>>()

    const formData: any = ref({})
    for (const item of props.form.formItems) {
      formData.value[`${item.filed}`] = ''
    }
    watch(
      () => props.defaultData,
      (newValue) => {
        // 使用For更新而不是用...更新 -> 过滤掉没有用的字段信息
        for (const item of props.form.formItems) {
          formData.value[`${item.filed}`] = newValue[`${item.filed}`]
        }
      }
    )
    // 添加 or 修改
    const store = useStore()
    const confirmClick = () => {
      lyFormRef.value?.formRef?.validate((valid) => {
        if (!valid) return
        if (Object.keys(props.defaultData).length > 0) {
          // 修改
          store.dispatch('system/updateDataAction', {
            pageName: props.pageName,
            pageInfo: { ...formData.value, ...props.otherInfo }
          })
        } else {
          // 添加
          store.dispatch('system/insertDataAction', {
            pageName: props.pageName,
            pageInfo: { ...formData.value, ...props.otherInfo }
          })
        }

        dialogVisible.value = false
      })
    }

    // dialog 显示隐藏
    const dialogVisible = ref(false)
    return {
      formData,
      lyFormRef,
      dialogVisible,
      confirmClick
    }
  }
})
</script>

<style scoped lang="less"></style>
