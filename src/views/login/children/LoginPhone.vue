<template>
  <div class="login-phone">
    <el-form
      ref="ruleFormRef"
      :model="form"
      :rules="rules"
      label-position="right"
      label-width="80px"
      class="demo-form-inline"
    >
      <el-form-item label="手机号" prop="name">
        <el-input v-model="form.name" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="password" class="code-box">
        <el-input
          v-model="form.password"
          type="password"
          show-password
          placeholder="请输入密码"
        ></el-input>
        <el-button type="primary">获取验证码</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { ElForm } from 'element-plus'

export default defineComponent({
  name: 'LoginPhone',
  setup() {
    const form = reactive({
      name: '',
      password: ''
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
    const submit = () => {
      console.log('submit!')
    }
    return {
      form,
      rules,
      ruleFormRef,
      submit
    }
  }
})
</script>

<style lang="less" scoped>
:deep(.el-input__inner) {
  box-sizing: border-box;
  padding: 18px 11px;
}
.code-box {
  :deep(.el-form-item__content) {
    display: flex;
    justify-content: space-between;
    .el-input {
      flex: 5 !important;
    }
    .el-button {
      margin-left: 15px;
      padding: 10px 10px;
    }
  }
}
</style>
