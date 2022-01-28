import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { registerIcons, registerComponent } from './global/register-properties'
import { setupStore } from './store'
import { formatDate } from '@/utils/format-date'
import 'normalize.css'
import './assets/css/base.css'
import 'element-plus/theme-chalk/el-message.css'
import './mock'
import { $department, $role } from '@/utils'

const app = createApp(App)
setupStore()
app.config.globalProperties.$filter = formatDate
app.config.globalProperties.$department = $department
app.config.globalProperties.$role = $role
app.use(router).use(store).use(registerIcons).use(registerComponent)

app.mount('#app')
