<template>
  <div class="login">
    <div class="login-content">
      <h2>故河十九年春</h2>
      <el-tabs v-model="tabsValue" type="border-card" stretch>
        <el-tab-pane name="account">
          <template #label>
            <el-icon><calendar /></el-icon>账号登陆
          </template>
          <login-account ref="accountRef" />
        </el-tab-pane>
        <el-tab-pane name="phone">
          <template #label>
            <el-icon><iphone /></el-icon>手机号登陆
          </template>
          <login-phone />
        </el-tab-pane>
      </el-tabs>
      <div :class="['util-box', tabsValue === 'account' ? '' : 'util-active']">
        <el-checkbox
          v-if="tabsValue === 'account'"
          v-model="checked"
          label="记住密码"
          size="large"
        ></el-checkbox>
        <el-link type="primary">忘记密码</el-link>
      </div>
      <div class="btn">
        <el-button type="primary" @click="submit">登陆</el-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import LoginAccount from './children/LoginAccount.vue'
import LoginPhone from './children/LoginPhone.vue'
import { useStore } from 'vuex'
import cache from '../../utils/cache'

export default defineComponent({
  name: 'Login',
  components: {
    LoginAccount,
    LoginPhone
  },
  setup() {
    const store = useStore()

    const checked = ref(true)
    const tabsValue = ref('account')

    const accountRef = ref<InstanceType<typeof LoginAccount>>()
    const submit = () => {
      if (checked.value) {
        cache.setCache('name', accountRef.value?.form.name)
        cache.setCache('password', accountRef.value?.form.password)
      }
      store.dispatch('login/loginAction', accountRef.value?.form)
    }
    return {
      checked,
      tabsValue,
      accountRef,
      submit
    }
  }
})
</script>

<style lang="less" scoped>
.util-active {
  justify-content: center !important;
}
.login {
  background-image: url('/src/assets/images/login-bg.jpg');
  background-size: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  min-height: 700px;
  width: 100%;
  h2 {
    width: 150px;
    margin: 100px auto 20px auto;
  }
  .el-icon {
    position: relative;
    top: 2px;
    left: -3px;
  }
  .util-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 40px;
  }
  :deep(.el-tabs__content) {
    padding: 35px 15px 25px 15px;
    box-sizing: border-box;
  }
  .btn {
    .el-button {
      width: 100%;
      padding: 15px 0;
    }
  }
}
.login-content {
  width: 400px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -75%);
}
</style>
