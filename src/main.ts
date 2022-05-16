import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { registerIcons, registerComponent } from './global/register-properties'
import { registerElement } from './global/register-cpn'
import { setupStore } from './store'
import { formatDate } from '@/utils/format-date'
import { $department, $role } from '@/utils'
import 'normalize.css'
import './assets/css/base.css'
import 'element-plus/theme-chalk/el-message.css'
import 'element-plus/dist/index.css'
import './mock'

const app = createApp(App)
setupStore()
app.config.globalProperties.$filter = formatDate
app.config.globalProperties.$department = $department
app.config.globalProperties.$role = $role
app
  .use(router)
  .use(store)
  .use(registerIcons)
  .use(registerComponent)
  .use(registerElement)

app.mount('#app')
