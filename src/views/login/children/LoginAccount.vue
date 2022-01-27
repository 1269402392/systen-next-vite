<template>
  <div class="login-account">
    <el-form
      ref="ruleFormRef"
      :model="form"
      :rules="rules"
      label-position="right"
      label-width="80px"
      class="demo-form-inline"
    >
      <el-form-item label="账号" prop="name">
        <el-input v-model="form.name" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          v-model="form.password"
          type="password"
          show-password
          placeholder="请输入密码"
        ></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { ElForm } from 'element-plus'
import cache from '../../../utils/cache'

export default defineComponent({
  name: 'LoginAccount',
  setup() {
    const form = reactive({
      name: cache.getCache('name') ?? '',
      password: cache.getCache('password') ?? ''
    })
    const ruleFormRef = ref<InstanceType<typeof ElForm>>()
    const rules = reactive({
      name: [
        {
          required: true,
          message: 'Please input Activity name',
          trigger: 'blur'
        }
      ],
      password: [
        {
          required: true,
          message: 'Please input Activity password',
          trigger: 'blur'
        }
      ]
    })

    return {
      form,
      rules,
      ruleFormRef
    }
  }
})
</script>

<style lang="less" scoped>
.login-account {
  :deep(.el-input__inner) {
    box-sizing: border-box;
    padding: 18px 11px;
  }
}
</style>
