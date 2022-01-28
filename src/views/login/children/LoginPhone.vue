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
      <el-form-item label="手机号" prop="cellphone">
        <el-input
          v-model="form.cellphone"
          placeholder="请输入用户名"
        ></el-input>
      </el-form-item>

      <el-form-item label="验证码" prop="code" class="code-box">
        <el-input
          v-model="form.code"
          type="text"
          placeholder="请输入密码"
        ></el-input>
        <el-button v-if="!isDisabled" type="primary" @click="handleGetCode">
          获取验证码
        </el-button>
        <el-button
          v-if="isDisabled"
          class="back-code"
          disabled
          type="info"
          @click="handleGetCode"
        >
          {{ backTime }}
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { ElForm, ElMessage } from 'element-plus'
import { handleGetRequest } from '@/service/other'

export default defineComponent({
  name: 'LoginPhone',
  emits: ['handleCode'],
  setup(props, { emit }) {
    const form = reactive({
      cellphone: '',
      code: ''
    })
    const regPhone = /^1(?:3\d|4[4-9]|5[0-35-9]|6[67]|7[013-8]|8\d|9\d)\d{8}$/
    const validateCellphone = (rule: any, value: any, callback: any) => {
      if (value === '') {
        callback(new Error('手机号不能为空'))
      } else if (!regPhone.exec(value)) {
        callback(new Error('请输入正确的手机号'))
      } else {
        callback()
      }
    }

    const ruleFormRef = ref<InstanceType<typeof ElForm>>()
    const rules = reactive({
      cellphone: [{ validator: validateCellphone, trigger: 'blur' }],
      code: [
        {
          required: true,
          message: '请填写验证码',
          trigger: 'blur'
        }
      ]
    })
    const codeNumber = ref('') // 存储验证码
    const backTime = ref(5) // 倒计时数字
    const isDisabled = ref(false) // 倒计时按钮
    const beforeTime = ref() // 重新获取验证码重新计时
    const submit = async () => {
      ElMessage.closeAll()
      ruleFormRef.value?.validate((valid) => {
        if (!valid) return
        console.log(codeNumber.value, form.code)
        if (codeNumber.value !== '' && codeNumber.value === form.code) {
          emit('handleCode')
        } else {
          ElMessage.error('验证码无效！')
        }
      })
    }
    // 点击获取验证码
    const handleGetCode = async () => {
      const { code } = await handleGetRequest('/phoneCode')
      backTime.value = 5
      isDisabled.value = !isDisabled.value
      codeNumber.value = code + ''
      const interval = setInterval(() => {
        if (backTime.value === 1) {
          clearInterval(interval)
          isDisabled.value = !isDisabled.value
        }
        backTime.value--
      }, 1000)
      ElMessage({
        showClose: true,
        message: `验证码为: ${code}`,
        type: 'success',
        duration: 5000
      })
      if (beforeTime.value) clearInterval(beforeTime.value)
      beforeTime.value = setTimeout(() => (codeNumber.value = ''), 10000)
    }
    return {
      form,
      rules,
      ruleFormRef,
      backTime,
      isDisabled,
      submit,
      handleGetCode
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
.back-code {
  width: 92px;
  height: 40px;
}
:deep(.el-input__suffix) {
  top: 13px;
}
</style>
